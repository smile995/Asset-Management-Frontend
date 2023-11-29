import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { ContextAPI } from "../../ContaxtAPI/AuthContext";

const Login = () => {
    const {signInUser}= useContext(ContextAPI)
    const handleSigninWithGoogle=()=>{

    }
    const handleLogin = (e)=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        // const user={email,password}
        // console.log(user);
        signInUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.code);
            console.log(error.message);
        })
    }
    return (
        <div className="card lg:w-1/2 shadow-2xl shadow-blue-800  border-blue-600 bg-gray-300 my-5 md:my-10 card-body  mx-auto">
            <div>
                <Helmet>
                    <title>Assets Management System | Login</title>
                </Helmet>
                <h2 className="text-4xl text-center font-bold md:mt-10">Please Login</h2>
            </div>
            <form onSubmit={handleLogin} >
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
            <div className="divider divider-warning ">OR</div>
            <div onClick={handleSigninWithGoogle} className=" flex items-center gap-5 text-3xl font-bold mb-5 justify-center btn btn-ghost btn-active">
            <FcGoogle></FcGoogle>
            <h2>Google</h2>
            </div>
        </div>
    );
};

export default Login;