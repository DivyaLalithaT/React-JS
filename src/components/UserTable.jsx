import React,{useState} from 'react'
import "../App.css"

export  default function UserTable  ()  {
  const [userList,setUserList] = useState([]);

  

  return (
    
    <div className="split right">
        <h1>User Table</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}



