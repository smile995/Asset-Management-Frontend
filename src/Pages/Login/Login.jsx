

const Login = () => {
    const handleLogin = (e)=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        const user={email,password}
        console.log(user);
    }
    return (
        <div className="card lg:w-1/2 shadow-2xl shadow-blue-800  border-blue-600 bg-gray-300 my-5 md:my-10  mx-auto">
            <div>
                <h2 className="text-4xl text-center font-bold md:mt-10">Please Login</h2>
            </div>
            <form onSubmit={handleLogin} className="card-body">
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
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;