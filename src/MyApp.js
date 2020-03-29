import React from "react";
import "./MyApp.css";
import UserProfile from "./components/user/UserProfile";
import ManageLogin from "./components/user/ManageLogin";

function MyApp() {
  return (
    <div className='App'>
      {/* <UserProfile /> */}
      <ManageLogin />
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
