import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from ".//HomePage/HomePage";
import LogIn from ".//LogIn/LogIn";
import { users } from "./userPhctiv";
import { createContext, useState } from "react";
import PopUp from "./popup/PopUp";
import Signup from "./signup/Signup";

export const userContext = createContext(null);
export const PopupContext = createContext(null);

function App() {
  const [user, setUser] = useState(users);
  const [videosId, setVidesoId] = useState([]);
  const [isPause, setisPause] = useState(false);
  const [numberOfSong, setNumberOfSong] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <PopupContext.Provider
        value={{
          videosId,
          setVidesoId,
          isPause,
          setisPause,
          numberOfSong,
          setNumberOfSong,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/*" element={<Layout />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
        <PopUp />
      </PopupContext.Provider>
    </userContext.Provider>
  );
}

export default App;
