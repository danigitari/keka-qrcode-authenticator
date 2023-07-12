import axios from "./axios";

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
    const res = await axios.get("/items");
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
    return res?.data;
  } catch (err) {
    console.error(err);
  }
}