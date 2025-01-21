import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // To manage loading state
  const [successMessage, setSuccessMessage] = useState(null); // To display success message
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup payload:", { username, email, password }); // Debug log


    // Basic client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Add any other password or input validation rules here
    setLoading(true); // Show loading indicator
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        username,
        email,
        password,
      });

      if (response.data.token) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data.token); // Save JWT to localStorage

        // Display success message
        setSuccessMessage("Signup successful! Redirecting to your dashboard...");
        
        // Redirect to dashboard after a short delay to show confirmation message
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000); // Adjust the delay (in ms) if needed
      }
    } catch (err) {
      if (err.response) {
        // Server-side error handling
        if (err.response.status === 400) {
          // Display the specific message from the server (e.g., invalid email/username)
          setError(err.response.data.message || "Signup failed. Please try again.");
        } else {
          setError("Signup failed. Please try again.");
        }
      } else {
        // Network error or no response from the server
        setError("An error occurred. Please check your connection and try again.");
      }
      console.log(err);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="container mx-auto max-w-sm p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className={`w-full p-2 mb-4 border ${
            confirmPassword && confirmPassword !== password
              ? "border-red-500"
              : "border-gray-300"
          } rounded`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-lg"
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">Log In</a>
      </p>
    </div>
  );
}

Signup.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Signup;
