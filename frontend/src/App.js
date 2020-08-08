import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddAdmin from "./components/AddAdmin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./components/Admin";
import AddNanny from "./components/AddNanny";
import LoginAdmin from "./components/Login";
import Drawer from "./components/NavBar";

function App() {
  return (
      <div className="App">
        <Router>
          <CssBaseline />
          <Drawer />
          <Route exact path="/" component={LoginAdmin} />
          <Route exact path="/AddNanny" component={AddNanny} />
          <Route exact path="/AddAdmin" component={AddAdmin} />
          <Route exact path="/Admin" component={Admin} />
        </Router>
      </div>
  );
}

export default App;
