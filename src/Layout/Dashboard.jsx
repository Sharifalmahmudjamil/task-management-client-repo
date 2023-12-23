import {  FaEdit, FaHome, FaStreetView,  } from "react-icons/fa";

import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";







const Dashboard = () => {
    const {  logOut,user } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    
    
    return (
        <div className="flex">
           
            {/* dashboard sidebar */}
            
            <div className="w-64 min-h-screen  bg-gray-500">
            
            <p className="text-xl text-center font-medium">DashBoard</p>
            <h1 className="text-xl text-center font-semibold text-blue-400">Welcome, {user.displayName} </h1>
            <div className="avatar items-center gap-3">
                        <div className="w-16 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                        <p>{user?.displayName}</p>
                    </div>
                    
            <ul className="menu p-4 my-10">
              
                
                <>
                    
                  <li>
                    <NavLink to='/dashboard/createTask'>
                    <FaEdit></FaEdit>
                        Create new Tasks</NavLink>
                   
                    </li>
                <li>
                    <NavLink to='/dashboard/previousTask'>
                    <FaStreetView></FaStreetView>
                    See previous Tasks</NavLink>
                   
                    </li>
                <li>
                    <NavLink to='/dashboard/todo'>
                    TO DO</NavLink>
                    
                   
                    </li>
                  <li>
                    <NavLink to='/dashboard/user'>
                    User Display</NavLink>
                    
                   
                    </li>
                    

                
              
             
                    <Link to='/'>
                    <button onClick={handleLogOut}  className="btn btn-outline w-full btn-sm mt-5">Logout</button></Link>
                </>
              
                    {/* shared nav link */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
            </ul>
           
            </div>
           
            
            {/* dashboard content */}
            <div className="flex-1">
           
                <Outlet></Outlet>
              
            </div>
        </div>
    );
};

export default Dashboard;