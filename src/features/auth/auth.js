import axios from "axios"
import {toast} from "../../utils/Toats"
import SignUp from "./SignUp";
import UserDetails from "./UserDetails"

// REGISTRATION
export function registerApi(data) {

let basePath=process.env.REACT_APP_API_URL

    return new Promise((resolve, reject) =>
      axios
        .post(`${basePath}/api/v1/users/register`, data)
        .then(function (response) {
          console.log('response', response)
          if (response?.data?.user_id !== "") {
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            // toast.error(response?.data?.message)
            console.error(response);
          }
          resolve(response);
          toast.success(response?.data?.message);
        })
        .catch(async (error) => {
          console.log("errro", await error?.response);
          toast.error(error?.response?.data?.message);
          // reject(error)
        })
    );
  }
  // GET USER DETAILS
export function getUserData() {

let basePath=process.env.REACT_APP_API_URL
return new Promise((resolve, reject) =>
      axios
        .get(`${basePath}/api/v1/users/getData`,
       
    )
    .then(function (response) {
      // console.log('user-response',response)
      resolve(response);
      // toast.success(response?.data?.message)
    })
    .catch(function (error) {
      console.error(error);
      // toast.error(error?.response?.data?.message)
    })
);
}