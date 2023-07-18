import axios from "./axios";
const AUTH_TOKEN = "Bearer " + localStorage.getItem("token");
const AUTH_HEADER = { Authorization: AUTH_TOKEN };

export async function createNewItem({ formData }) {
  try {
    const res = await axios.post("/items", formData, {
      headers: { "Content-Type": "multipart/form-data", ...AUTH_HEADER },
    });
    return res?.data;
  } catch (err) {
    console.error(err);
  }
}
export async function getItems() {
  try {
    const res = await axios.get("/items", { headers: AUTH_HEADER });
    return res?.data;
  } catch (err) {
    console.error(err);
  }
}

// export async function getItem({ id }) {} // TODO
export async function register() {
  try {
    const res = await axios.get("/register" );
    return res?.data;
  } catch (err) {
    console.error(err);
  }
}
export async function deleteItem(id) {
  try {
    const res = await axios.delete("/items/" + id, { headers: AUTH_HEADER });
    getItems();
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

export async function logout() {
  try {
    const res = await axios.get("/logout", { headers: AUTH_HEADER });
    console.log(res);
    // return res?.data;
  } catch (err) {
    console.error(err);
  }
}
