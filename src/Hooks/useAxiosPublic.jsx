// import axios from "axios";

import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://task-management-platform-server-inky.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic;
};
export default useAxiosPublic;