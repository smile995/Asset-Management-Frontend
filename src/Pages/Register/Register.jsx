import { useContext } from "react";
import { ContextAPI } from "../../ContaxtAPI/AuthContext";


const EmployeeRegister = () => {
    const { createUser, updateUserProfile, setUser} = useContext(ContextAPI)
    const handleEmployeeRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const date = form.date.value;
        console.log(name, email, password, date);
        createUser(email, password)
            .then(result => {
                setUser(result.user)
                // updating user information
                updateUserProfile(name, date)
                    .then(() => {
                        console.log("user update with the name and date of birthday");
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error.code);
                console.log(error.message);
            })




    }
    return (
        <div className="card lg:w-3/5 shadow-2xl shadow-blue-800  border-blue-600 bg-gray-300 my-5 md:my-10  mx-auto">
            <div>
                <h2 className="text-4xl text-center font-bold md:mt-10">Employee Registration Form</h2>
            </div>
            <form onSubmit={handleEmployeeRegister} className="card-body">
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
                    <input type="date" className="input input-bordered" required name="date" />

                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register as Employee</button>
                </div>
            </form>
        </div>



    );
};

export default EmployeeRegister;