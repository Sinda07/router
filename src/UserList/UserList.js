import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const [ListofUsers, setListofUsers] = useState([]);

const getUsers = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
useEffect(() => {
  getUsers();
}, []);

const [ListofUser, setListofUser] = useState({});
const handleChange = (e) => {
  setListofUser({ ...ListofUser, id: Date.now(), name: e.target.value });
};

const sendUser = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/users", ListofUser)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default ListofUser;
