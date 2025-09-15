import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Welcomepage from './Welcomepage'
import VarLetConst from './VarLetConst'

const App = () => {
  return (
    <Router>
      {/* Simple navigation */}
      <nav style={{ margin: "10px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/welcomepage" style={{ marginRight: "10px" }}>Welcome</Link>
        <Link to="/varletconst">Var/Let/Const</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>This is Home Page</h2>} />
        <Route path="/welcomepage" element={<Welcomepage />} />
        <Route path="/varletconst" element={<VarLetConst />} /> 
      </Routes>
    </Router>
  )
}

export default App
