import react, { useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { toast } from "../../utils/Toats";
import "react-toastify/dist/ReactToastify.css";
import { loginAsync } from "../auth/authSlice";
import validator from "validator";



const Login = () => {
  const dispatch = useDispatch();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState({
    errors: {},
  });
  const login = {
    email: email,
    password: password,
  };
  const handleSubmit = e => {
    
    e.preventDefault();
    if (validation()){
    console.log(login, "LOgin")
    dispatch(loginAsync({ postData: login }));
    }
  }
  const validation = () => {
    let errors = {};
    let formIsValid = true;
    if (!validator.isMobilePhone(email) && !validator.isEmail(email)) {
      formIsValid = false;
      errors["email"] = "Please Enter Valid Email";
      toast.error("Please Enter Valid Email");
    }
    if (!password) {
      formIsValid = false;
      errors["password"] = "Enter your password";
      toast.error("Enter your password");
    }
    setFormState({ errors: errors });
    return formIsValid;
  };
  return (
    <>
      <div className="d-flex md-3 justify-content-center " onSubmit={handleSubmit}>
        <div className="d-flex border 2px solid justify-content-center" >

          <div >
            <h2>Register Form</h2>
            <p>Let's get start to login </p>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            ></input>
            <input
              className="form-control "
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button onClick={handleSubmit}>Login</button>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcB9pt3Tasegrjl6637LB1iJqCND1jp2oLA&usqp=CAU" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
