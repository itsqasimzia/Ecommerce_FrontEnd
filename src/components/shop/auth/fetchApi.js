import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const isAuthenticate = () =>
  localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")) : false;

export const isAdmin = () => {
  let role = "";
  let jwtRole =
    localStorage.getItem("jwt") &&
    JSON.parse(localStorage.getItem("jwt"))?.user?.role;

  if (jwtRole === 1) {
    role = "customer";
  }
  if (jwtRole === 2) {
    role = "admin";
  }
  return role;
};

export const loginReq = async ({ email, password }) => {
  const data = { email, password };
  try {
    let res = await axios.post(`${apiURL}/api/signin`, data);
    console.log("login response", res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const signupReq = async ({
  name,
  email,
  password,
  cPassword,
  userRole,
}) => {
  const data = { name, email, password, cPassword, userRole };
  console.log(userRole);
  try {
    let res = await axios.post(`${apiURL}/api/signup`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
