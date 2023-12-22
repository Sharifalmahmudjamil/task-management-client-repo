import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";





const CreateTask = () => {
   const axiosPublic=useAxiosPublic();
   const {user}=useAuth();
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async (data) =>{ 
        console.log(data);
       
            // now send the task in server side
            const task={
                Titles: data.Titles,
                Deadline: data.Deadline,
                Description:data.Description,
                priority:data.priority,
                department:data.department,
                userEmail:user?.email
            }
            console.log(task);
           
        const TaskRes= await axiosPublic.post('/management',task);
        console.log(TaskRes);
        if(TaskRes.data.insertedId){
            // show the pop up
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Task Created SuccessFully",
                showConfirmButton: false,
                timer: 1500
              });
              reset();
        }
          
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-medium mt-3 text-black">Create Your Task</h1>
            <div className= " w-auto p-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text"> Titles*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Titles"
                                {...register('Titles', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input
                                type="datetime-local"
                                placeholder="Deadline"
                                {...register('Deadline', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                    
                    </div>
                    <div className="form-control w-1/2  my-6">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                {...register('Description', { required: true })}
                                required
                                className="input input-bordered w-full h-32" />
                        </div>

                    <div className="flex gap-6">
                        
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Priority*</span>
                            </label>
                            <select defaultValue="default" {...register('priority', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="moderate">moderate</option>
                                <option value="high">High</option>

                            </select>
                        </div>

                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Department Name</span>
                            </label>
                            <select defaultValue="default" {...register('department', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Department</option>
                                <option value="developers">Developers</option>
                                <option value="corporate ">corporate professionals</option>
                                <option value="Bankers">Bankers</option>
                                <option value="HR">HR</option>
                                <option value="Accounter">Accounter</option>
                                <option value="Technical">Technical</option>
                            </select>
                        </div>     

                    </div>
                    <button className="btn btn-outline">
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;