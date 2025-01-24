import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-10">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            exact
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            exact
            path="/dashboard"
            element={
              isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />
            }

          />
          
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
