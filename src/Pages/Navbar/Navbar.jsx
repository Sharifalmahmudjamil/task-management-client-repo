import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navLinks =
        <>
            <li className="lg:text-black  "><NavLink to="/"
                className={({ isActive }) => isActive ? 'btn btn-outline btn-sm' : ' btn btn-outline hover:bg-blue-400 btn-sm '}
            >Home</NavLink></li>

            <li className="lg:text-black mx-5"><NavLink to="/about"
                className={({ isActive }) => isActive ? 'btn btn-outline btn-sm' : ' btn btn-outline hover:bg-blue-400 btn-sm'}
            >About US</NavLink></li>
            <li className="lg:text-black "><NavLink to="/contact"
                className={({ isActive }) => isActive ? 'btn btn-outline btn-sm' : ' btn  btn-outline hover:bg-blue-400 btn-sm'}
            >Contact US</NavLink></li>

{
                user ? <>
                      <li className="lg:text-black mx-4"><NavLink to="/dashboard"
                className={({ isActive }) => isActive ? 'btn btn-outline btn-sm' : ' btn  btn-outline hover:bg-blue-400 btn-sm'}
            >DashBoard</NavLink></li>
                    <button onClick={handleLogOut} className="btn  btn-outline hover:bg-blue-400 btn-sm">LogOut</button>
                </> :
                    <>
                        <li className="lg:text-black "><NavLink to="/login"
                            className={({ isActive }) => isActive ? 'btn btn-outline btn-sm' : ' btn bg-pink-500 btn-sm'}
                        >Login</NavLink></li>
                    </>
            }
        </>
    return (
        <div>
            <div className="navbar z-10 bg-opacity-30  bg-slate-200 shadow-2xl  w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="lg:w-[60px] lg:h-[65px] w-16 h-20 mx-6" src="https://i.ibb.co/RbpHbF7/attachment-20319607-removebg-preview.png" alt="" />
                    <p className="text-xl font-semibold "><span className="lg:mx-20 font-bold text-2xl">Task</span> <br /> <span className="text-base lg:mx-7 text-sky-400 ">Management Platform</span> </p>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                        
                    </div>
                    <p>{user?.displayName}</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;