import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { useSelector } from "react-redux";

import SignIn from "./features/auth/signup";
import Dashboard from "./features/component/Dashboard";
import user from "./features/auth/authSlice";
export default function Routes(props) {
  const auth = useSelector(selectAuth);
  console.log(auth,"auth");
  const authorized = auth?.data?.userData?._id ? true : false;
  return (
    <>
<Router>
          {/* <Route exact path="/" component={SignUp} /> */}
          <Route  path="/dashboard" component={Dashboard} />
          
       
      </Router>
    </>
  );
}
