import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
// import { useLoaderData } from "react-router-dom";



const EditTask = () => {
    const axiosPublic=useAxiosPublic();
  const data=useLoaderData();
  console.log(data);
  const {Titles,Description,Deadline,department,priority,_id }=data;
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async (data) =>{ 
        console.log(data);
        const task={
            Titles: data.Titles,
            Deadline: data.Deadline,
            Description:data.Description,
            priority:data.priority,
            department:data.department,
            
        }
        const TaskData = await axiosPublic.patch(`/management/${_id}`, task);
            console.log(TaskData.data)
            if(TaskData.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Task  updated Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  reset();
            }
    }
    return (
        <div>
            
            <h1 className="text-3xl text-center font-medium mt-3 text-black">Edit Your Task</h1>
            <div className=" w-auto p-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5">
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text"> Titles*</span>
                            </label>
                            <input
                            defaultValue={Titles}
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
                                 defaultValue={Deadline}
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
                         defaultValue={Description}
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
                            <select defaultValue={priority} {...register('priority', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled >Select Priority</option>
                                <option value="low">Low</option>
                                <option value="moderate">moderate</option>
                                <option value="high">High</option>

                            </select>
                        </div>

                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Department Name</span>
                            </label>
                            <select defaultValue={department} {...register('department', { required: true })}
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
                        Edit Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditTask;