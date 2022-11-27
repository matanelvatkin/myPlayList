import { Route, Routes } from 'react-router';
import './App.css';
import Layout from "./Layout/Layout";
import HomePage from ".//HomePage/HomePage"
import LogIn from ".//LogIn/LogIn"
import {users} from "./userPhctiv"
import { createContext, useState } from 'react';

export const userContext = createContext(null);

function App() {
  const [user,setUser]= useState(users)
  
  return (
    <userContext.Provider value={{user,setUser}}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/:user/*" element={<Layout/>} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
