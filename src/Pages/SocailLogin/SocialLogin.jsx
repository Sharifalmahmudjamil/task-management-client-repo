import { FaGoogle } from 'react-icons/fa';


import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            navigate('/');
            // const userInfo = {
            //     email: result.user?.email,
            //     name: result.user?.displayName
            // }
            // axiosPublic.post('/users', userInfo)
            // .then(res =>{
            //     console.log(res.data);
            //     navigate('/');
            // })
        })
    }
    return (
        <div>
             <button onClick={handleGoogleSignIn}  className="btn  btn-accent w-1/2 ml-24">
                    <FaGoogle ></FaGoogle>
                    Log in with Google</button>
        </div>
    );
};

export default SocialLogin;