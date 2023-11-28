import { Link } from "react-router-dom";


const Navbar = () => {
    const NavLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/employeeRegister'}>Join as Employee</Link></li>
        <li><Link to={'/adminRegister'}>Join as HR/Admin</Link></li>
        <li><Link to={'/login'}>Login</Link></li>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            NavLink
                        }
                    </ul>
                </div>
                <div className='flex items-center '>
                    <img className='w-20 ' src="../../../../Public/Assets/Images/logo.png" alt="" />
                    <h2 className='text-3xl font-bold text-sky-700'>ASMS</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        NavLink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div >
                    <img className='w-10 h-10 rounded-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;