

const Announcement = () => {

    const handleAnnouncement = event => {
        event.preventDefault()

        const form = event.target
        const title = form.title.value
        const description = form.description.value
        const announcement = {
            title,description
        }
        
        

        fetch('http://localhost:5000/announcements', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(announcement)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }
    return (
        <div>
            <div>
               <h1 className="text-2xl font-bold">Create Your Announcement</h1>
               <form onSubmit={handleAnnouncement}>
                   <div className="mt-5">
                      <label className="label">
                         <span className="label-text">Title</span>
                       </label>
                        <input type="text" name='title' placeholder="Write Here" className="input input-bordered w-[400px] " />
                   </div>
                   <div className="mt-5">
                      <label className="label">
                         <span className="label-text">Description</span>
                       </label>
                        <input type="text" name='description' placeholder="Write here" className="input input-bordered input-lg w-[400px] h-[200px]" />
                   </div>
                   <button className="bg-green-700 text-white rounded-xl px-4 py-3 mt-8">Submit</button>
               </form>
            </div>
        </div>
    );
};

export default Announcement;