import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
export function Login(props) {
  // using ref to avoid multiple render as the task says to fetch after clicking login button.
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const[error, setError] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = (e)=>{
    setError(null);
    e.preventDefault();
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value;

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(res => res.json())
      .then((data)=>{
        if(data.message){
          setError(data.message)
        }else{
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('id', JSON.stringify(data.id));
          navigate('/authentication-api-react/profile')
        }
      })
      .catch((err)=> setError(err.message))
  }

  return (
    <>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username" ref={usernameRef}/>
      <input type="password" placeholder="password" ref={passwordRef}/>
      <button type="submit">Login</button>
      </form>
    </>
  );
}

