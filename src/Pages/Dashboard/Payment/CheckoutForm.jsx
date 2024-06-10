import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import useAgreements from "../../../Hooks/useAgreements";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const {user} = useContext(AuthContext)
    const [error,setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId,setTransactionId] = useState()
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();
    const [agreement,refetch] = useAgreements()
    const navigate = useNavigate()
    const totalPrice = agreement.reduce((total, agreement) => total + agreement.rent, 0)

    useEffect( () => {
        axiosPublic.post('/create-payment-intent', {rent:totalPrice})
        .then(res => {
           console.log(res.data.clientSecret)
           setClientSecret(res.data.clientSecret)
        })
    
   },[axiosPublic,totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card ===  null){
            return
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error)
            setError(error.message)
        }
        else{
            console.log('payment method',paymentMethod)
            setError('')
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous',
  
              }
            }
          })
          if(confirmError){
            console.log('confirm error')
          }
          else{
          console.log('payment intent',paymentIntent)
          if(paymentIntent.status === 'succeeded') {
            console.log('transaction id', paymentIntent.id)
            setTransactionId(paymentIntent.id)

            const payment = {
                email: user.email,
                rent: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(),
                // cartIds: agreement.map(item => item._id),
                // menuItemIds: agreement.map(item => item.menuId),
                status: 'pending'
              }
              const res = await axiosPublic.post('/payments', payment);
            console.log('payment saved', res.data)
            refetch()
            if(res.data?.paymentResult?.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your payment is successful",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboards/paymentHistory')
            }


        }
        }
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn bg-pink-500 text-white mt-5" type="submit"  disabled={!stripe }>
        Pay
      </button>
      <p className="text-2xl text-red-600">{error}</p>
      { transactionId && <p className="text-green-600">Your transactionId:{transactionId}</p>
      }
        </form>
        </div>
    );
};

export default CheckoutForm;