import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Login = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
    } else {
      fetch("/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            M.toast({ html: data.error, classes: "#c62828 red darken-3" });
          } else {
            M.toast({ html: "login successfull", classes: "#4caf50 green" });
            history.push("/list");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="main">
      <div className="  card auth">
        <h5>Welcome to the Login Page</h5>
        <h2>The Spark Foundation</h2>
        <div class="input-field col s6">
          <input
            id="icon_prefix"
            type="text"
            className="validate"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="icon_prefix">Email</label>
        </div>
        <div class="input-field col s6">
          <input
            id="icon_prefix"
            type="password"
            className="validate"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="icon_prefix">Password</label>
        </div>
        <button
          className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2"
          onClick={() => PostData()}
        >
          Login
        </button>
        <h6>
          Don't have an Acoount?
          <Link to="/signup" className="new">
            Click Me
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;
