
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-500 text-base-content ">
                <aside>
                <img className=" lg:w-[60px] lg:h-[65px] w-16 h-20" src="https://i.ibb.co/RbpHbF7/attachment-20319607-removebg-preview.png" alt="" />
                    <p>Task Management Platform<br />Empower Your Productivity, Simplify Your Tasks</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link to='/dashboard'><a className="link link-hover hover:text-blue-400">DashBoard</a></Link>
                  
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to='/about'><a className="link link-hover hover:text-blue-400">About Us</a></Link>
                    <Link to="/contact">
                    <a className="link link-hover hover:text-blue-400" >Contact</a>
                    </Link>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;         