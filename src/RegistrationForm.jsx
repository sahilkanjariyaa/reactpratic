import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "", name: "", email: "", phone: "",password:""
  });

  const [msg, setMsg] = useState({
    id: "", name: "", email: "", phone: "",password:""
  });

  const [valid, setValid] = useState({
    id: false, name: false, email: false, phone: false,password:false
  });

  const check = (f, val) => {
    let r, ok;

    if (f === "id") {
      r = /^SID[0-9]+$/;
      ok = r.test(val);
      setValid(v => ({ ...v, id: ok }));
      setMsg(m => ({ ...m, id: ok ? "✔ Valid ID" : "✘ ID must start with SID" }));
    }

    if (f === "name") {
      r = /^[A-Za-z ]{6,}$/;
      ok = r.test(val);
      setValid(v => ({ ...v, name: ok }));
      setMsg(m => ({ ...m, name: ok ? "✔ Valid Name" : "✘ Minimum 6 characters" }));
    }

    if (f === "email") {
      r = /^[^@]+@[^@]+\.[^@]+$/;
      ok = r.test(val);
      setValid(v => ({ ...v, email: ok }));
      setMsg(m => ({ ...m, email: ok ? "✔ Valid Email" : "✘ Invalid Email" }));
    }

    if (f === "phone") {
      r = /^[0-9]{10}$/;
      ok = r.test(val);
      setValid(v => ({ ...v, phone: ok }));
      setMsg(m => ({ ...m, phone: ok ? "✔ Valid Phone" : "✘ Must be 10 digits" }));
    }

    if (f === "password") {
        r = /^[A-Za-z ]{6,}$/;
        ok = r.test(val);
        setValid(v => ({ ...v, password: ok }));
        setMsg(m => ({ ...m, password: ok ? "✔ Valid Phone" : "✘ Must be 6 digits" }));
      }
  };

  const change = (e) => {
    let n = e.target.name;
    let v = e.target.value;
    setForm({ ...form, [n]: v });
    check(n, v);
  };

  const submit = (e) => {
    e.preventDefault();

    if (valid.id && valid.name && valid.email && valid.phone) {
        sessionStorage.setItem("email", form.email);
        sessionStorage.setItem("password", form.password);
      alert("Form submitted successfully!");

      // 👉 Redirect to Login page
      navigate("/login");

    } else {
      alert("Fix errors before submitting");
    }
  };

  return (
    <form onSubmit={submit}>
      <h3>Registration Form</h3>

      <input name="id" placeholder="ID" onChange={change} />
      <p style={{ color: valid.id ? "green" : "red" }}>{msg.id}</p>

      <input name="name" placeholder="Full Name" onChange={change} />
      <p style={{ color: valid.name ? "green" : "red" }}>{msg.name}</p>

      <input name="email" placeholder="Email" onChange={change} />
      <p style={{ color: valid.email ? "green" : "red" }}>{msg.email}</p>

      <input name="phone" placeholder="Phone" onChange={change} />
      <p style={{ color: valid.phone ? "green" : "red" }}>{msg.phone}</p>
    
      <input name="password" placeholder="password" onChange={change} />
      <p style={{ color: valid.password ? "green" : "red" }}>{msg.password}</p>

      <button type="submit">Submit</button>
    </form>
  );
}
