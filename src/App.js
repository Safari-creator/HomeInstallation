/**
desnewkirk@gmail.com
aEy-kyd-gfn-M83
app.aurora2go.com
 */

import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from './Components/Views/Login/Login';
import TaskDetails from './Components/Views/TaskDetails/TaskDetails'
// import Header from './Components/Views/Header/Header';
// import SideNavBar from './Components/Views/SideNavBar/SideNavBar';
import ForgotPassword from './Components/Views/ForgotPassword/ForgotPassword'
// import SignUp from './Components/Views/SignUp/SignUp'
// import SignUpFLow1 from './Components/Views/SignUp/SignUpFlow1/SignUpFlow1';
// import SignUpFLow2 from './Components/Views/SignUp/SignUpFlow2/SignUpFlow2';
// import SignUpFLow3 from './Components/Views/SignUp/SignUpFlow3/SignUpFlow3';
// import SignUpFLow4 from './Components/Views/SignUp/SignUpFlow4/SignUpFlow4';
// import Dashboard from './Components/Views/Dashboard/Dashboard'
// import Home from './Components/Views/Home/Home'
// import HomeLogin from './Components/Views/HomeLogin/HomeLogin'
import MainDashboard from './Components/Views/Dashboard/MainDashboard';
import Sidebar from './Components/Views/Dashboard/Sidebar';
import SignIn from './Components/Software/SignIn/SignIn';
import SignUp from './Components/Software/SignUp/SignUp';

function App() {
  return (
      <Router>
        <Route exact path='/' component={SignUp}></Route>
        <Route exact path='/Sign-In' component={SignIn}></Route>
        <Route exact path='/MainDashboard' component={MainDashboard}></Route>
      </Router>
  );
}

export default App;
