import React, { useState } from "react";
import axios from "axios";
import "./../styles/App.css";

const App = () => {
  const [user, setUser] = useState("");

  function TableList() {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      {/* Do not remove the main div */}

      <span>Blue Whales</span>
      <button className="btn" onClick={TableList}>
        Get User List
      </button>

      <table>
        <thead className="thead">
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>

        <tbody>
          {user.length > 0 ? (
            user.map((users) => (
              <tr key={users.id}>
                <td className="tbody">{users.first_name}</td>

                <td className="tbody">{users.last_name}</td>
                <td className="tbody">{users.email}</td>
                <td className="tbody">
                  <img
                    src={users.avatar}
                    alt={user.first_name + " " + user.last_name}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <h4>No data found on display.</h4>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
