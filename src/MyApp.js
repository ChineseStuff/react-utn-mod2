import React from "react";
import { Route, Switch } from "react-router-dom";
import "./MyApp.css";
import ManageLogin from "./components/user/ManageLogin";
import HeaderPage from "./components/common/Header";
import HomePage from "./components/common/HomePage";
import UserList from "./components/user/UserList";

function MyApp() {
  return (
    <div className='App'>
      <HeaderPage />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signup' component={ManageLogin} />
        <Route path='/userlist' component={UserList} />
      </Switch>
      <a
        className='App-link'
        href='https://github.com/ChineseStuff/react-utn-mod1'
        target='_blank'
        rel='noopener noreferrer'
      >
        Developed by ChineseStuff Take a look to my GHub repo
      </a>
    </div>
  );
}

export default MyApp;
