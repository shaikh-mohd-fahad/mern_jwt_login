import React, { useContext, useEffect, useState } from 'react'
import Home from './component/Home'
import {BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Profile from './component/Profile'
import Login from './component/Login'
import { AuthContext } from './context/AuthContext'
function App() {
  const { token } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
      <Route path="/login" element={!token ? <Login /> : <Navigate to="/profile" />} />
      {token ? (
        <>
          <Route path="/profile" element={<Profile />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
