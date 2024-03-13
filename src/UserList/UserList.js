import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ListItems from "../components/ListItems/ListItems";
import Button from "react-bootstrap/Button";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();
  }, []);

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, id: Date.now(), name: e.target.value });
  };
  const sendUser = () => {
    axios
      .get("https://jsonplaceholder.typecode.com/users", user)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <h1> List Of Users</h1>
      <div>
        <input
          type="text"
          placeholder="tape your name"
          on
          Change={handleChange}
        />
        <Button variant="success" onClick={sendUser}>
          Send
        </Button>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "44px",
          }}
        >
          {users.map((user, index) => {
            return <ListItems user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserList;
