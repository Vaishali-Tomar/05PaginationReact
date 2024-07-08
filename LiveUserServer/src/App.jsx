// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://randomuser.me/api/?results=50");
      setUsers(result.data.results);
    };
    fetchData();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.location.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.location.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="content">
      <h2>Live User Filter</h2>
      <p>Search by name and/or location</p>
      <input
        type="text"
        className="input-text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul className="main">
        {filteredUsers.map(user => (
          <li key={user.login.uuid}>
            <img src={user.picture.medium} alt="Profile" />
            <div>
              <h2>{`${user.name.first} ${user.name.last}`}</h2>
              <p>{`${user.location.state}, ${user.location.country}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
