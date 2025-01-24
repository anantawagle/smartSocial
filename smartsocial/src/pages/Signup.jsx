// import { useState } from "react";

// import PropTypes from "prop-types";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Signup({ setIsLoggedIn }) {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     setLoading(true); // Show loading indicator

//     try {
//       const response = await axios.post("http://localhost:5000/api/signup", {
//         username,
//         email,
//         password,
//       });

//       console.log("Signup Response:", response.data);

//       if (response.data.token) {
//         setIsLoggedIn(true);
//         localStorage.setItem("token", response.data.token); // Save JWT to localStorage

//         // Redirect to dashboard
//         navigate("/dashboard");
//       } else {
//         setError("Signup successful, but token is missing. Please try logging in.");
//       }
//     } catch (err) {
//       console.error("Signup Error:", err.response?.data || err.message);
//       setError(err.response?.data?.message || "Signup failed. Please try again.");
//     } finally {
//       setLoading(false); // Hide loading indicator
//     }
//   };

//   return (
//     <div className="container mx-auto max-w-sm p-8 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Username"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="w-full py-2 bg-indigo-600 text-white rounded-lg"
//           disabled={loading} // Disable the button while loading
//         >
//           {loading ? "Signing Up..." : "Sign Up"}
//         </button>
//       </form>
//       <p className="mt-4 text-center">
//         Already have an account?{" "}
//         <a href="/login" className="text-blue-500">Log In</a>
//       </p>
//     </div>
//   );
// }

// Signup.propTypes = {
//   setIsLoggedIn: PropTypes.func.isRequired,
// };

// export default Signup;

import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!avatar) {
      setError("Avatar is required.");
      return;
    }

    setLoading(true); // Show loading indicator

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);
    if (coverImage) formData.append("coverImage", coverImage);

    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });

      console.log("Signup Response:", response.data.formData);

      if (response.data.token) {
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data.token); // Save JWT to localStorage

        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        setError("Signup successful, but token is missing. Please try logging in.");
      }
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="container mx-auto max-w-sm p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
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
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          onChange={(e) => setAvatar(e.target.files[0])}
          required
        />
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          onChange={(e) => setCoverImage(e.target.files[0])}
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

