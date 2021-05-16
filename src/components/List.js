import React, { useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [name, setName] = useState("");
  const [accountnumber, setaccuntnumber] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [item, setItem] = useState([]);

  const addtoList = () => {
    setItem((oldItems) => {
      return [...oldItems, [name, accountnumber, phonenumber]];
    });
  };

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
        <Link to="/login" className="right">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Login
            <i class="fas fa-arrow-alt-circle-right"></i>
          </button>
        </Link>
      </div>
      <div className="input">
        <div className="card auth">
          <h5>Details</h5>
          <h2>Add to Contact</h2>
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
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
            />
            <label for="icon_prefix">Phone Number </label>
          </div>

          <button
            className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2"
            onClick={() => addtoList()}
          >
            Add
          </button>
        </div>
      </div>

      <div className="output">
        <div className="container">
          <table
            className="striped highlight centerd responsive-table"
            style={{ border: "2px solid black" }}
          >
            <thead style={{ backgroundColor: "black" }}>
              <tr>
                <th style={{ color: "#fff" }}>Name</th>
                <th style={{ color: "#fff" }}>Account Number</th>
                <th style={{ color: "#fff" }}>Phonenumber</th>
                <th style={{ color: "#fff" }}>Transfer</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Nimisha</td>
                <td>1234567890</td>
                <td>6398765456</td>
                <Link to="/transaction">
                  <button className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2">
                    transfer
                  </button>
                </Link>
              </tr>
              <tr>
                <td>Vishu</td>
                <td>98764645826</td>
                <td>6387652345</td>
                <Link to="/transaction">
                  <button className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2">
                    transfer
                  </button>
                </Link>
              </tr>
              <tr>
                <td>Himanshu</td>
                <td>654321588765345678</td>
                <td>7632345276</td>
                <Link to="/transaction">
                  <button className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2">
                    transfer
                  </button>
                </Link>
              </tr>
              <tr>
                <td>Parvej</td>
                <td>6543245588765345678</td>
                <td>76323634276</td>
                <Link to="/transaction">
                  <button className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2">
                    transfer
                  </button>
                </Link>
              </tr>
              <tr>
                <td>Abid</td>
                <td>746321588765345678</td>
                <td>65735345276</td>
                <Link to="/transaction">
                  <button className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2">
                    transfer
                  </button>
                </Link>
              </tr>
              <tr>
                <td>Saman Khan</td>
                <td>764321588765345678</td>
                <td>8762345276</td>
                <Link to="/transaction">
                  <button className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2">
                    transfer
                  </button>
                </Link>
              </tr>
              <tr>
                <td>Pooja</td>
                <td>65731588765345678</td>
                <td>1324345276</td>
                <Link to="/transaction">
                  <button className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2">
                    transfer
                  </button>
                </Link>
              </tr>

              {item.map((details) => {
                return (
                  <>
                    <tr>
                      <td>{details[0]}</td>
                      <td>{details[1]}</td>
                      <td>{details[2]}</td>
                      <Link to="/transaction">
                        <button className="waves-effect waves-light btn #b71c1c red darken-4#1976d2 blue darken-2">
                          transfer
                        </button>
                      </Link>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
