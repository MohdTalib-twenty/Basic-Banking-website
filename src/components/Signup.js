import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({
        html: "invalid accountnumber",
        classes: "#c62828 red darken-3",
      });
    } else {
      fetch("/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          accountnumber,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "#c62828 red darken-3" });
          } else {
            M.toast({ html: data.message, classes: "#4caf50 green" });
            history.push("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="main">
      <div className="card auth">
        <h5>Welcome to the Sign In Page</h5>
        <h2>The Spark Foundation</h2>
        <div class="input-field col s6">
          <input
            id="icon_prefix"
            type="text"
            class="validate"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="icon_prefix">Account Holder Name</label>
        </div>
        <div class="input-field col s6">
          <input
            id="icon_prefix"
            type="text"
            class="validate"
            value={accountnumber}
            onChange={(e) => setAccountnumber(e.target.value)}
          />
          <label for="icon_prefix">Account Number </label>
        </div>
        <div class="input-field col s6">
          <input
            id="icon_prefix"
            type="text"
            class="validate"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="icon_prefix">Email </label>
        </div>
        <div class="input-field col s6">
          <input
            id="icon_prefix"
            type="password"
            class="validate"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="icon_prefix">Password</label>
        </div>

        <button
          className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2"
          onClick={() => PostData()}
        >
          Sign In
        </button>
        <h6>
          Already have an Acoount?
          <Link to="/login" className="new">
            Click Me
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Signup;
