import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
// import { useState } from "react";





const ToDo = () => {
    const { user } = useAuth();
    // const [data,setData]=useState();
    const AllTask = useLoaderData();
    // console.log(AllTask);
    const All = AllTask.filter(data => data.userEmail == user?.email)
     console.log(All);
     
     const handleDelete=_id=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
           
              fetch(`http://localhost:5000/management/${_id}`,{
                method: 'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                if(data.deletedCount >0){
                     Swal.fire(
                'Deleted!',
                'Your Task has been deleted.',
                'success'
              )
            //   remove the user from ui
                        // const remainingFood=foods.filter(food=>food._id!==food.id)
                        // setFoods(remainingFood);
                        //   remove the user from ui
               
                }
              })
            }
          })
   }

   const dragStarted=(e,id)=>{
    console.log("drag has started");
        e.dataTransfer.setData("_id",id)
   }

   const draggingOver=(e)=>{
    e.preventDefault();
    console.log("drag over now");
   }

   const dragDropped=(e)=>{

    console.log("you have drooped");
    let transferedTodoId=e.dataTransfer.getData("todoId");
    console.log(transferedTodoId);
    
   }

   
    return (
        <div className="flex justify-between mt-2">

            <div name="todoId" className="w-56 h-10 bg-slate-400 text-center rounded mx-2">
                <h1  className="text-lg font-semibold">Todo</h1>
                {
                    All.map(Task =>
                        <div draggable onDragStart={(e)=>dragStarted(e,Task._id)} key={Task._id} className="grid grid-cols-1">
                            <div className="card w-72 bg-neutral text-neutral-content mt-5">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Title: {Task.Titles}</h2>
                                    <p>Description: {Task.Description}</p>
                                    <p>Deadline: {Task.Deadline}</p>
                                    <p>Priority: {Task.priority}</p>
                                    <div className="card-actions justify-end">

                                        <Link to={`/dashBoard/edit/${Task._id}`}>
                                        <button className="btn btn-outline bg-blue-400 btn-sm">Edit</button>
                                        </Link>
                                      
                                        <button  onClick={()=>handleDelete(Task._id)} className="btn btn-outline btn-sm text-white">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
           
               
            <div  onDragOver={(e)=>draggingOver(e)} onDrop={(e)=>dragDropped(e)} className="w-56 bg-slate-400 text-center rounded">
                <h1 className="text-lg font-semibold" >ongoing</h1>
            </div>
            
            <div className="w-56 bg-slate-400 text-center rounded">
                <h1 className="text-lg font-semibold">completed</h1>
            </div>
        </div>
    );
};

export default ToDo;