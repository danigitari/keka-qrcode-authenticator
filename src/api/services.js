import axios from "./axios";
const AUTH_TOKEN = "Bearer " + localStorage.getItem("token");
const AUTH_HEADER = { Authorization: AUTH_TOKEN };

export async function createNewItem({ formData }) {
  try {
    const res = await axios.post("/items", formData , {"headers": {"Content-Type": "multipart/form-data"}});
    return res?.data;
  } catch (err) {
    console.error(err);
  }
}
export async function getItems() {
  try {
    const res = await axios.get("/items" , { headers: AUTH_HEADER });
    return res?.data;
  } catch (err) {
    console.error(err);
  }
}

export async function register() {
  try {
    const res = await axios.get("/register");
    return res?.data;
  } catch (err) {
    console.error(err);
  }
}

export async function login() {
  try {
    const res = await axios.get("/login");
    console.log(res);
    // return res?.data;

  } catch (err) {
    console.error(err);
  }
}

