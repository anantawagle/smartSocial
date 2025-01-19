import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.data.token) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data.token); // Save JWT to localStorage
        navigate("/dashboard");
      }
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <div className="container mx-auto max-w-sm p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-lg"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-center">
        Dont have an account?{" "}
        <a href="/signup" className="text-blue-500">Sign Up</a>
      </p>
    </div>
  );
}

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Login;
