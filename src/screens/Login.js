import React, { useState } from "react";
import login1 from "../images/login1.png";
import mainbg from "../images/mainbg.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BACKEND_URL}/api/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credentials.");
    } else {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div
        className="row g-0 justify-content-center align-items-center bg-info vh-100"
        style={{
          backgroundImage: "url(" + mainbg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{
            width: "50%",
            height: "60%",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            borderRadius: "60px",
          }}
        >
          <form className="col-6" onSubmit={handleSubmit}>
            <div className="text-center">
              <img
                src={login1}
                alt=""
                className="img-fluid bg-light"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <h3
              className="login-title text-center py-2 mb-4 text-light"
              style={{ borderBottom: "3px solid #19891c" }}
            >
              Login
            </h3>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Username"
                value={credentials.email}
                onChange={onChange}
              />
              <label htmlFor="email">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control mb-3"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={onChange}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="d-flex justify-content-around">
              <button type="submit" className=" btn btn-success">
                Login
              </button>
              <Link to="/createuser" className=" btn btn-danger">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
