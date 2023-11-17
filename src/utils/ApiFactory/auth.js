// import axios from "axios";
import Axios from "../axios";

export const providusLoginFn = async (payload) => {
  const res = await Axios.post(`auth/login`, payload, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return res;
};

export const tokenFn = async (payload) => {
  const res = await Axios.post(`auth/token`, payload, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
  return res;
};
