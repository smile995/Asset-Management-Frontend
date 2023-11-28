

const AdminRegister = () => {
    return (
        <div className="card lg:w-3/5 shadow-2xl bg-base-100 my-5 md:my-10  mx-auto">
            <div>
                <h2 className="text-4xl text-center font-bold md:mt-10">HR/Admin Registration Form</h2>
            </div>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Your name" className="input input-bordered" required name="name" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" placeholder="Your company name" className="input input-bordered" required name="company" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo</span>
                    </label>
                    <input type="text" placeholder="Logo URL" className="input input-bordered" required name="logo" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required name="password" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date of Birth</span>
                    </label>
                    <input type="date" className="input input-bordered" required name="date" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Package</span>
                    </label>
                    
                    <select className="select select-bordered w-full ">
                        <option disabled selected>Select your package</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>

                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register as HR/Admin</button>
                </div>
            </form>
        </div>
    );
};

export default AdminRegister;