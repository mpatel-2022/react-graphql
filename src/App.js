import React from "react";
import './App.css';
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import Search from "./pages/Search";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} exact />{" "}
        <Route path="/search" element={<Search />} exact />{" "}
        <Route path="/:id" element={<Character />} exact />{" "}
      </Routes>
    </div>
  );
}

export default App;
