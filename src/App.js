import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Components/Views/Login/Login';
import TaskDetails from './Components/Views/TaskDetails/TaskDetails'
import Header from './Components/Views/Header/Header';
import SideNavBar from './Components/Views/SideNavBar/SideNavBar';

function App() {
  return (
    <div className="App">
      <>
      {/* <Header />
      <SideNavBar /> */}
      <Router>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/task-details' component={TaskDetails}></Route>
      </Router>
      </>
    </div>
  );
}

export default App;
