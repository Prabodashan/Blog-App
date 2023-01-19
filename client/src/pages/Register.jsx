import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder="username" id="" />
        <input required type="email" placeholder="email" id="" />
        <input required type="password" placeholder="password" id="" />
        <button>Login</button>
        <p>This is an error</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
