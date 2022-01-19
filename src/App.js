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
import SettingsServices from './Components/Views/Dashboard/SettingsServices/SettingsServices';
import Sidebar from './Components/Views/Dashboard/Sidebar';
import SignIn from './Components/Software/SignIn/SignIn';
import SignUp from './Components/Software/SignUp/SignUp';
import SettingsProfile from './Components/Views/Dashboard/SettingsProfile/SettingsProfile';
import SettingsAvailability from './Components/Views/Dashboard/SettingsAvailability/SettingsAvailability';
import SettingsTeam from './Components/Views/Dashboard/SettingsTeam/SettingsTeam';
import SettingsSampleReports from './Components/Views/Dashboard/SettingsSampleReports/SettingsSampleReports';
import SettingsDiscountCodes from './Components/Views/Dashboard/SettingsDiscountCodes/SettingsDiscountCodes';
import SettingsBusinessTools from './Components/Views/Dashboard/SettingsBusinessTools/SettingsBusinessTools';

function App() {
  return (
    <Router>
      <Route exact path='/' component={SignUp}></Route>
      <Route exact path='/Sign-In' component={SignIn}></Route>
      <Route exact path='/Dashboard' component={MainDashboard}></Route>

      <Route exact path='/CreateNewReport' component={MainDashboard}></Route>
      <Route exact path='/Contracts' component={MainDashboard}></Route>
      <Route exact path='/Realtors' component={MainDashboard}></Route>
      <Route exact path='/ExtraPages' component={MainDashboard}></Route>
      <Route exact path='/Reports' component={MainDashboard}></Route>
      <Route exact path='/Template' component={MainDashboard}></Route>
      <Route exact path='/Contacts' component={MainDashboard}></Route>
      <Route exact path='/Metrics' component={MainDashboard}></Route>
      <Route exact path='/Automation' component={MainDashboard}></Route>
      <Route exact path='/Settings' component={MainDashboard}></Route>
      <Route exact path='/AddRealtor' component={MainDashboard}></Route>

      <Route exact path='/SettingsProfile' component={SettingsProfile}></Route>
      <Route exact path='/SettingsServices' component={SettingsServices}></Route>
      <Route exact path='/SettingsAvailability' component={SettingsAvailability}></Route>
      <Route exact path='/SettingsTeam' component={SettingsTeam}></Route>
      <Route exact path='/SettingsSampleReports' component={SettingsSampleReports}></Route>
      <Route exact path='/SettingsDiscountCodes' component={SettingsDiscountCodes}></Route>
      <Route exact path='/Settings/BusinessTools' component={SettingsBusinessTools}></Route>
    </Router>
  );
}

export default App;
