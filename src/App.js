/**
desnewkirk@gmail.com
aEy-kyd-gfn-M83
app.aurora2go.com
 */
import ReactDOM from 'react-dom'
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from './Components/Views/Login/Login';
// import TaskDetails from './Components/Views/TaskDetails/TaskDetails'
// import Header from './Components/Views/Header/Header';
// import SideNavBar from './Components/Views/SideNavBar/SideNavBar';
// import ForgotPassword from './Components/Views/ForgotPassword/ForgotPassword'
// import SignUp from './Components/Views/SignUp/SignUp'
// import Dashboard from './Components/Views/Dashboard/Dashboard'
// import SignIn from './Components/Software/SignIn/SignIn';
// import SignUp from './Components/Software/SignUp/SignUp';
import MainDashboard from './Components/Views/Dashboard/MainDashboard';

function App() {
  return (
    <div className="App">
      <>
      {/* <Header />
      <SideNavBar /> */}
      {/* <Router>
        <Route exact path='/' component={Dashboard}></Route>
        <Route exact path='/Sign-In' component={Login}></Route>
        <Route exact path='/Sign-Up' component={SignUp}></Route>
        <Route exact path='/task-details' component={TaskDetails}></Route>
        <Route exact path='/Forgot-Password' component={ForgotPassword}></Route>
      </Router> */}


      {/* done by pooja */}
      {/* <Router>
        <Route exact path='/' component={SignUp}></Route>
        <Route exact path='/Sign-In' component={SignIn}></Route>
        <Route exact path='/task-details' component={TaskDetails}></Route>
        <Route exact path='/Forgot-Password' component={ForgotPassword}></Route>
      </Router> */}
      <MainDashboard></MainDashboard>
      </>
    </div>
  );
}

export default App;
