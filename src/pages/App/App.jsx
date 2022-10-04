import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Weather from "../../components/Weather/Weather";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <Weather />

      {/* {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes></Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )} */}
    </main>
  );
}
