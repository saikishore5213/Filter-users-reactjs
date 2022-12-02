import React, { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./UsersList";
const dummy_users = [
  { id: 1, name: "Virat kohli" },
  { id: 2, name: "Rohit Sharma" },
  { id: 3, name: "Surya Kumar Yadav" },
  { id: 4, name: "Hardik" },
  { id: 5, name: "Harsha" },
];

const App = () => {
  const [filter, setFilter] = useState(dummy_users);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilter(dummy_users.filter((user) => user.name.includes(searchTerm)));
  }, [searchTerm]);

  const handleUsers = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <input placeholder="Search users..." onChange={handleUsers} />
      {/* <SearchForm getSearchTerm={filterSearch}></SearchForm> */}
      <UsersList users={filter} />
    </div>
  );
};
export default App;
