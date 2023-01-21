import React from 'react';
import {useNavigate} from "react-router-dom";

export function Profile(props) {
   const id = localStorage.getItem('id');
   const navigate = useNavigate();
   const [user, setUser] = React.useState({});
  console.log(user)


  React.useEffect(()=>{
    // fetch information based on id
    if(id != null) {
      fetch(` https://dummyjson.com/users/${id}`)
        .then(((res) => res.json()))
        .then(data => setUser(data))
        .catch((err) => console.log(err))
    }
  },[id]);

  const handleLogout = React.useCallback(()=>{
    localStorage.removeItem('id');
    localStorage.removeItem('token')
    setUser({})
    navigate('/authentication-api-react/login')
  },[])

  const notLoggedIn = typeof user.id != "number";

  if(notLoggedIn){
    return <div>
      <h2>Please Log in</h2>
    </div>
  }else{
    return (
      <div className="user-details">
        <img src={user.image} alt="user potrait"/>
        <h2>Name: {user.firstName} {user.lastName}</h2>
        <p>Gender: <strong>{user.gender.toUpperCase()}</strong></p>
        <p>Birth Date: <strong>{user.birthDate}</strong></p>
        <p>Age: <strong>{user.age}</strong></p>
        <p>Email: <strong>{user.email}</strong></p>
        <p>Phone: <strong>{user.phone}</strong></p>
        <p>Username: <strong>{user.username}</strong></p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
}

