import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUsers } from "./actions/users";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";
import UserInfo from "./components/UserInfo";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.log("From loading user", error);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <Router>
            <Routes>
              <Route exact path="/" element={<UserCard users={users} />} />

              <Route exact path="/:id" element={<UserInfo users={users} />} />
            </Routes>
          </Router>
        </div>
      )}

      <Footer />
    </Fragment>
  );
}

export default App;
