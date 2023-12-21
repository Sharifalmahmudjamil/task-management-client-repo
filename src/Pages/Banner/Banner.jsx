import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/0hnDv8w/task-management-concept-vector-24073177.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                       
                        <p className="mb-5 mt-40 "><span className="text-5xl font-bold ">Empower Your Productivity</span> <br /></p>
                        <p><span className="text-2xl font-semibold text-blue-300">Elevate Your Tasks, Unleash Your Potential</span></p>
                       <Link to="/login">
                       <button className="btn btn-outline bg-blue-400 mt-4">Let’s Explore</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;