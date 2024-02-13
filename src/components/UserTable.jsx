import React,{useState} from 'react'

export  default function UserTable  ()  {
  const [userList,setUserList] = useState([]);

  

  return (
    
    <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Address</th>
              <th>Phonenumber</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.userName}</td>
                <td>{user.address}</td>
                <td>{user.phonenumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}



