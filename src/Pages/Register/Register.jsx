

const EmployeeRegister = () => {
    return (
        <div className="card  w-full max-w-md shadow-2xl bg-base-100 my-5 md:my-10  mx-auto">
            <div>
                <h2 className="text-4xl text-center font-bold md:mt-10">Employee Registration Form</h2>
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
                    <input type="date"  className="input input-bordered" required name="date" />
                   
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register as Employee</button>
                </div>
            </form>
        </div>



    );
};

export default EmployeeRegister;