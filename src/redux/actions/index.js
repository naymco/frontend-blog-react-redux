import store from "../store";
import axios from "axios";

// Types
import { GET_POST, GET_JSON_HOME } from "../types";

export function getAllPost() {
  axios
    .get("http://localhost:3005/articles/")
    .then(res => {
      store.dispatch({ type: GET_POST, payload: res.data });
    })
    .catch(error => console.log(error));
}

export function getJsonView() {
  axios
    .get("http://localhost:3000/home.json")
    .then(res => {
      console.log(res);
      store.dispatch({ type: GET_JSON_HOME, payload: res.data });
    })
    .catch(error => console.log(error));
}
