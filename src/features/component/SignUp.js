import { useEffect, useState } from "react";
import { registerAsync } from "../auth/authSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import validator from "validator";


import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "../../utils/Toats";

import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [socialType, setSocialType] = useState("");
  const [formState, setFormState] = useState({
    errors: {},
  });
  const dispath = useDispatch();
  const registerData = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    role: "student",
    socialType: "Default",
  };
  const handleSubmit = (e) => {
    console.log("object", registerData)
    e.preventDefault();
    if (validation()) {
      dispath(registerAsync({ postData: registerData }));
    }
  };
  const validation = () => {
    let errors = {};
    let formIsValid = true;
    if (!validator.isMobilePhone(email) && !validator.isEmail(email)) {
      formIsValid = false;
      errors["email"] = "Please Enter Valid Email";
      toast.error("Please Enter Valid Email");
    }
    if (!first_name) {
      formIsValid = false;
      errors["first_name"] = "Enter your FirstName";
      toast.error("Enter your FirstName")
    }
    if (!last_name) {
      formIsValid = false;
      errors["last_name"] = "Enter your LastName";
      toast.error("Enter your lastName")
    }
    setFormState({ errors: errors });
    return formIsValid;
  };

  return (
    <div>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center ">
            <CCol md="6">
              <CCardGroup>

                <CCard className="container">

                  <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                      <h1 className="text-center mt-4">Welocme</h1>

                      <CInputGroup className="mb-3">
                        <CInputGroupText></CInputGroupText>
                        <CFormInput
                          placeholder="FirstName"
                          name="FirstName"
                          autoComplete="FirstName"
                          type="text"
                          value={first_name}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupText></CInputGroupText>
                        <CFormInput
                          placeholder="LastName"
                          name="LASTNAME"
                          autoComplete="username"
                          value={last_name}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText></CInputGroupText>
                        <CFormInput
                          placeholder="Email"
                          type="email"
                          autoComplete="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </CInputGroup>

                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          name="password"
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </CInputGroup>


                      <CCol >
                        <Link
                          to="/dashboard"
                          className="text-login ml=9"
                        >
                          <CButton color="link">Login</CButton>
                        </Link>
                        <Link to="/password-reset" className="text-login"></Link>
                        <div className="clm-btn text-center">


                          <Link
                            to="/forgotpassword"
                            className="text-login ml=9"
                          >
                            <CButton color="link"> Forgot password?</CButton>
                          </Link>
                          <Link to="/password-reset" className="text-login"></Link>
                        </div>
                      </CCol>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  );
};
export default SignUp;
