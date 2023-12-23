/* eslint-disable react/no-unescaped-entities */

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const About = () => {
    return (
        <div>
             <Navbar></Navbar>
            <div>
            <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">

               
                
                <h1 className="text-5xl font-medium text-center mt-5">About Us</h1>
                <div className="lg:flex mt-5">
                    <div className="mt-14">
                        <p> <span className="text-2xl font-medium text-rose-500">Welcome to Task Management Platform</span>
                            ,Start with a brief introduction that captures the essence of your task management platform. Highlight the main purpose and vision of your website. <br /> <br />
                            <span className="text-xl font-medium"> Our Mission: </span>
                            Clearly articulate the mission of your platform. Explain how your task management solution aims to simplify and enhance users' lives by providing effective tools for managing tasks and increasing productivity.
                            <br />
                            <br />
                            <span className="text-xl font-medium">User-Focused Approach :</span>
                            Emphasize your commitment to the user experience. Highlight how your platform is designed with the end user in mind, ensuring a seamless and enjoyable experience for individuals and teams. <br />
                            <span className="text-xl font-medium">Join Us Today:</span>
                            Provide a glimpse into the future of your task management platform. Share your vision for upcoming features, improvements, and expansions. This helps convey that your platform is dynamic and committed to continuous enhancement. <br />
                            <span className="text-xl font-medium text-pink-500"> Empower Your Productivity, Simplify Your Tasks.</span>



                        </p>
                    </div>
                    <div className="ml-2 mt-5">
                        <img className="rounded w-[1200px]" src="https://i.ibb.co/Ks1PFk3/depositphotos-473495782-stock-illustration-time-management-concept-in-flat.webp" alt="" />
                    </div>
                </div>
               <Footer></Footer>
            </div>
            </div>
        </div>
    );
};

export default About;