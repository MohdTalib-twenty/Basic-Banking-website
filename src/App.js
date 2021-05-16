import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import List from "./components/List";
//import ListofContact from "./components/ListofContact";
//import History from "./components/Transaction history";
import History from "./components/History";
import Transaction from "./components/Transaction";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/list">
          <List />
        </Route>

        <Route path="/transaction">
          <Transaction />
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Router>
    </>
  );
}

export default App;
