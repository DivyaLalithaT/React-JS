import React, { useState } from 'react';
import "../App.css"

export default function App() {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const [userList, setUserList] = useState([]);

  const { username, email, phone } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUserList([...userList, data]);
    setData({
      username: '',
      email: '',
      phone: '',
    });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUserList(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    
      <div className="split left">
        <h1>Login Form</h1>
        <form onSubmit={submitHandler}>
          <label><b>Username:</b></label>
          <br/>
          <input type="text" name="username" placeholder="Enter name" value={username} onChange={changeHandler} />
          <br/><br/>
          <label><b>Email:</b></label>
          <br/>
          <input type="text" name="email" placeholder="Enter email" value={email} onChange={changeHandler} />
          <br/><br/>
          <label><b>Phone:</b></label>
          <br/>
          <input type="tel" name="phone" placeholder="Enter phonenumber" value={phone} onChange={changeHandler} />
          <br/><br/>
          <input type="submit" name="submit" />
        </form>
      </div>
    
  );
}
