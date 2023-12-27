
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [user, setUser] = useState("");
  const [noDataFound, setNoDataFound] = useState(true);


  async function TableList() {
    try {
      const response = await fetch("https://reqres.in/api/users");

      const data = await response.json();

      if (response.ok) {
        setUser(data.data);
        setNoDataFound(false);
      } else {
        
        setNoDataFound(true);
      }
    
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <nav>
        <h3>Blue Whales</h3>
        <button className="btn" onClick={TableList}>Get User List</button>
      </nav>
     
        <table>
          <thead className="thead">
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Avatar</th>
             
            </tr>
            
          </thead>
         {noDataFound && <h4>No data found on display.</h4>}
          <tbody >
            {user.length>0 && (user.map((users) => (
              <tr  key={users.id}>
            
                <td className="tbody">{users.first_name}</td>
                
                <td className="tbody">{users.last_name}</td>
                <td className="tbody">{users.email}</td>
                <td className="tbody">
                  <img src={users.avatar} alt={user.first_name+ " " + user.last_name} />
                </td>
                
              </tr>
                
            )))}
          
          </tbody>
        </table>
    
    </div>
  )
}

export default App
