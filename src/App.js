import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Guide from "./pages/Guide";

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path='/'>
                    <Navbar />
                    <Sidebar />
                </Route>
                <Route path='/guide'>
                    <Guide />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
