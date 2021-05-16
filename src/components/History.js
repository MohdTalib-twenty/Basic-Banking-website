import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const History = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/history", {
      headers: {
        // Authorization: "Bearer" + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.history);
      });
  }, []);
  return (
    <div>
      <div className="button">
        <Link to="/transaction" className="left">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Transaction
            <i class="material-icons right">send</i>
          </button>
        </Link>
        <Link to="/list" className="right">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            List of Contacts
            <i class="fas fa-arrow-alt-circle-right"></i>
          </button>
        </Link>
      </div>
      <div className="output-2 container">
        <h2>Transaction Detail</h2>
        <table
          className="striped highlight centerd responsive-table"
          style={{ border: "2px solid black" }}
        >
          <thead style={{ backgroundColor: "black" }}>
            <tr>
              <th style={{ color: "#fff" }}>Name</th>
              <th style={{ color: "#fff" }}>Account Number</th>
              <th style={{ color: "#fff" }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((detail) => {
              return (
                <>
                  <tr>
                    <td>{detail.name}</td>
                    <td>{detail.accountnumber}</td>
                    <td>{detail.rupees}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
