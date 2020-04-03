import React from "react";
import { Route, Switch } from "react-router-dom";
import "./MyApp.css";
import HeaderPage from "./components/common/HeaderPage";
import FooterPage from "./components/common/FooterPage";
import ManageLogin from "./components/user/ManageLogin";
import HomePage from "./components/common/HomePage";
import UserList from "./components/user/UserList";

function MyApp() {
  return (
    <div className='app'>
      <HeaderPage />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signup' component={ManageLogin} />
        <Route path='/userlist' component={UserList} />
      </Switch>
      <FooterPage />
    </div>
  );
}

export default MyApp;
