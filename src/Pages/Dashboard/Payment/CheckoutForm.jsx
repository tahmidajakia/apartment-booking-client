import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const [error,setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();

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
      <button className="btn bg-pink-500 text-white mt-5" type="submit"  disabled={!stripe}>
        Pay
      </button>
      <p className="text-2xl text-red-600">{error}</p>
      {/* { transactionId && <p className="text-green-600">Your transactionId:{transactionId}</p>
      } */}
        </form>
        </div>
    );
};

export default CheckoutForm;