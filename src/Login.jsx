import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const emialStorage = sessionStorage.getItem("email");
    const passwordStorage = sessionStorage.getItem("password");
    if (uname === emialStorage && pwd === passwordStorage) {
      sessionStorage.setItem("logged", "true");
      navigate("/home");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setUname(e.target.value)} />
      <br/>
      <input placeholder="Password" type="password" onChange={(e) => setPwd(e.target.value)} />
      <br/>
      <button onClick={login}>Login</button>
    </div>
  );
}
