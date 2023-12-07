import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from 'hook/useAuth';
function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    // Add authentication logic here (e.g., API call, validation)
    // For simplicity, we'll just check if username and password are not empty
    
    console.log('!!!E',e)
    e.preventDefault()
    console.log('!!!username && password!',username, password)
    const payload = JSON.stringify({username,password})
    try {
    const result = await fetch('/api/login', { method: 'POST', body: payload, headers: {
      "Content-Type": "application/json",
    }, })
    console.log(result.json().then((data)=>{
      console.log('!!!data',data)
      localStorage.setItem('token', data.accessToken);
      if(data.accessToken) {
        console.log('!!!IN',data.accessToken)
        setAuth(data)
        navigate('/')
      }
    }))
  //  result.then((data)=>{
  //     console.log('!!!DATA',data)
  //   })
    } catch (e) {
      console.error(e)
    }
    if (username && password) {
      // setIsLoggedIn(true);
    } else {
      // alert("Please enter both username and password.");
    }
  };

  const handleTest = async() => {
    try {
    await fetch('/api/',{method: 'GET',
    credentials: 'include',
  })
} catch (e) {
  console.log(e)
}
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button type="button" onClick={handleTest}>
          Test
        </button>
    </div>
  );
}

export default LogIn;
