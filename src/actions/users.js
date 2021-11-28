import axios from "axios";

//API GET call
export const getUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
