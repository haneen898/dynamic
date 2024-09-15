
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DynamicForm from "./compount/DynamicForm";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <Link to="/" className="text-blue-500">Home</Link> | 
          <Link to="/form" className="text-blue-500 ml-2">Dynamic Form</Link>
        </nav>
        <Routes>
          <Route path="/form" element={<DynamicForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2 className="text-2xl">Welcome to the Advanced Dynamic Form Layout!</h2>;
}

export default App;
