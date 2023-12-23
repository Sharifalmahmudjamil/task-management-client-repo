import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const PreviousTask = () => {
    const {user}=useAuth();
    const allTask = useLoaderData();
    console.log(allTask);
    const Task = allTask.filter(data => data.userEmail == user?.email)
    return (
        <div>
            <h1 className="text-3xl text-center font-medium mt-3 text-black"> Your All and Previous Task</h1>
            {
                Task.map(task =>
                    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3" key={task._id}>
                  
                     <div className="card w-72 bg-neutral text-neutral-content mt-5">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Title: {task.Titles}</h2>
                                    <p>Description: {task.Description}</p>
                                    <p>Deadline: {task.Deadline}</p>
                                    <p>Priority: {task.priority}</p>
                                  
                                </div>
                            </div>

                    </div>
                )
            }
        </div>
    );
};

export default PreviousTask;