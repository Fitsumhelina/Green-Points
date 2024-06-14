import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./page/home/home";
import Dashboard from "./page/dashboard/dashboard";
import Layout from "./comp/layout/layout";
import Login from "./page/login/login";
function App() {

  return (
    <Layout >
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </Router>
    </Layout>
  )
}

export default App
