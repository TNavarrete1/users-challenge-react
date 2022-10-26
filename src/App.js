import React, { useState, useEffect } from "react";
import UserComponents from "./UserComponents";
import "./App.css";
import "./root.css";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div id="layout">
        {users ? <UserComponents users={users} /> : "Loading..."}
      </div>
    </>
  );
}

export default App;
