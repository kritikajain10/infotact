import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{
             textAlign: "center" ,
             color: "black",
             fontSize: "40px",
             fontWeight: "bold",
          }}>Welcome Back</h1>

        <p style={{ textAlign: "center", color: "gray" }}>
          Login to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

<div
  style={{
    position: "relative",
    marginTop: "15px",
  }}
>
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e) =>
        setPassword(e.target.value)
    }
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    }}
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "18px",
    }}
  >
    {showPassword ? "🙈" : "👁️"}
  </button>
</div>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
    fontSize: "14px",
  }}
>
  <label>
    <input type="checkbox" /> Remember Me
  </label>

  <a href="#" style={{ textDecoration: "none", color: "#2563eb" }}>
    Forgot Password?
  </a>
</div>
        <button
          onClick={() => {if(!email || !password)
          {
            alert("PLEASE FILL ALL FIELDS");
            return;
          }
navigate("/dashboard");
        }}
          
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}