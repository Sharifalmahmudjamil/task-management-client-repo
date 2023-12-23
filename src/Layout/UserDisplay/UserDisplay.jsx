import { useLoaderData } from "react-router-dom";

const UserDisplay = () => {
    const users= useLoaderData();
    console.log(users);
    return (
        <div>
                       <div className="overflow-x-auto">
  <table className="table  ">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        
        
        <th>User Photo</th>
        
        <th>User Name</th>
        <th> Department</th>
        
        
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user => 
            <tr key={user._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
          
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-16 h-16">
                    <img src={user.Photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                 
                </div>
              </div>
            </td>
           
            <td>{user.Name}</td>
            
          
            <th>
            <td>{user.department}</td>
            </th>
           
            <th>
            <td></td>
            </th>
            
            <th>
           
           
            </th>
          </tr>
            
            )
     }
     
   
    </tbody>
   
    
    
  </table>
</div>
        </div>
    );
};

export default UserDisplay;