import React, { useState } from 'react';
import './App.css'

export default function App() {
  const [data, setData] = useState({
    userName: '',
    address: '',
    phonenumber: '',
  });

  const [userList, setUserList] = useState([]);

  const { userName, address, phonenumber } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data); 
    setUserList([...userList, data]); 
    setData({
      userName: '',
      address: '',
      phonenumber: '',
    });
  };

  return (
    <div className='mainContainer'>
      <center>
        <h1>Login Form</h1>
        <form onSubmit={submitHandler}>
          <label><b>Username:</b></label>
          <input type="text" name="userName" placeholder="Enter name" value={userName} onChange={changeHandler} />
          <br/>
          <br/>
          <label><b>Address:</b></label>
          <input type="text" name="address" placeholder="Enter address" value={address} onChange={changeHandler} />
          <br/>
          <br/>
          <label><b>Phonenumber:</b></label>
          <input type="tel" name="phonenumber" placeholder="Enter phonenumber" value={phonenumber} onChange={changeHandler} />
          <br/>
          <br/>
          <input type="submit" name="submit" />
        </form>
        
        
        <table >
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
      </center>
    </div>
  );
}
