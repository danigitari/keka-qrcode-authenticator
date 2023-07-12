import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
});
