import Swal from 'sweetalert2'

const CustomRequest = () => {
    const handleCustomRequest = (e) => {
        e.preventDefault();
        const form = e.target;
        const assetName = form.assetName.value;
        const price = form.price.value;
        const select = form.select.value;
        const image = form.image.value;
        const reason = form.reason.value;
        const additional = form.additional.value;
        const customRequest = { assetName, price, select, image, reason, additional }
        // console.log(customRequest);
        fetch('http://localhost:5000/requests', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customRequest)

        })
            .then(res => res.json())
            .then(data => {
                console.log("inside the data posting  to the server side", data);
                if(data.insertedId){
                    form.reset()
                    Swal.fire({
                        icon: "success",
                        title: "Congratulations",
                        text: "Custom request added successfully",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">


            <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className=" mt-5 text-3xl font-semibold text-center">Make a Custom Request</h1>
                <form onSubmit={handleCustomRequest} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Asset Name</span>
                        </label>
                        <input type="text" name="assetName" placeholder="Asset name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" required />

                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text">Asset Types</span>

                        </div>
                        <select name="select" className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select</option>
                            <option>Returnable</option>
                            <option>Non-Returnable</option>

                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Asset Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Asset Image Url" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Why You do this</span>
                        </label>
                        <input type="text" name="reason" placeholder="write the reason, Why You do this" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Additional Information</span>
                        </label>
                        <input type="text" name="additional" placeholder="Additional Information" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Request</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default CustomRequest;