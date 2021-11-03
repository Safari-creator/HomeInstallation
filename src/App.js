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
    <div className="App">
      {/* <Header />
      <SideNavBar /> */}
      {/* <Router>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Home' component={Home}></Route>
        <Route exact path='/Dashboard' component={Dashboard}></Route>
        <Route exact path='/Sign-In' component={Login}></Route>
        <Route exact path='/Sign-Up' component={SignUpFLow1}></Route>
        <Route exact path='/Upsell-1' component={SignUpFLow2}></Route>
        <Route exact path='/confirmed' component={SignUpFLow3}></Route>
        <Route exact path='/Create-Password' component={SignUpFLow4}></Route>
        <Route exact path='/task-details' component={TaskDetails}></Route>
        <Route exact path='/Forgot-Password' component={ForgotPassword}></Route>
      </Router> */}
      {/* <MainDashboard></MainDashboard> */}
      {/* <MainDashboard></MainDashboard> */}
      <Router>
        <Route exact path='/' component={SignUp}></Route>
        <Route exact path='/Sign-In' component={SignIn}></Route>
        <Route exact path='/MainDashboard' component={MainDashboard}></Route>
        {/* <Route exact path='/task-details' component={TaskDetails}></Route>
      <Route exact path='/Forgot-Password' component={ForgotPassword}></Route> */}
      </Router>
      {/* <SignIn></SignIn> */}
      {/* <SignUp></SignUp> */}
    </div>
  );
}

export default App;
