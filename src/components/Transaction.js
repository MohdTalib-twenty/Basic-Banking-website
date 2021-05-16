import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import M from "materialize-css";

const Transaction = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [accountnumber, setaccuntnumber] = useState("");
  const [rupees, setRupees] = useState("");

  const transactionDetails = () => {
    fetch("/transaction", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // "Authorization" : "Bearer" + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        name,
        accountnumber,
        rupees,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          // localStorage.setItem("jwt", data.token);
          // localStorage.setItem("user", JSON.stringify(data.user));
          M.toast({
            html: "Transaction Completed",
            classes: "#4caf50 green",
          });
          history.push("/history");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main">
      <div className="button">
        <Link to="/list" className="right">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            List of Contact
            <i class="material-icons right">send</i>
          </button>
        </Link>
        <Link to="/history" className="left">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Transaction Detail
            <i class="fas fa-arrow-alt-circle-right"></i>
          </button>
        </Link>
      </div>
      <div className="card auth">
        <h2>Transaction Details</h2>
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
            onChange={(e) => setaccuntnumber(e.target.value)}
          />
          <label for="icon_prefix">Account Number </label>
        </div>
        <div class="input-field col s6">
          <input
            id="icon_prefix"
            type="Number"
            class="validate"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
          />
          <label for="icon_prefix">Rupees </label>
        </div>

        <button
          className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2"
          onClick={() => transactionDetails()}
        >
          Transfer
        </button>
      </div>

      {/* <div className="output">
        {items.map((details) => {
          return (
            <>
              <Contactlist details={details} />
            </>
          );
        })}
      </div> */}
    </div>
  );
};

export default Transaction;
