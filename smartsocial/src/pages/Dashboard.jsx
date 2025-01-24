// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PostForm from "../components/PostForm";

// function Dashboard() {
//   const [username, setUsername] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login"); // Redirect to login if no token is found
//     } else {
//       const storedUsername = localStorage.getItem("username");
//       setUsername(storedUsername); // Get username from localStorage (if available)
//     }
//   }, [navigate]);

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-6">
//         {username ? `Welcome, ${username}` : "Welcome to Your Dashboard"}
//       </h1>
//       <PostForm />
//     </div>
//   );
// }

// export default Dashboard;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

function Dashboard() {
  const [username, setUsername] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login"); // Redirect to login if no token is found
    } else {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername); // Get username from localStorage (if available)
    }
  }, [navigate]);

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post("http://localhost:8000/refresh", { refreshToken });
      const newAccessToken = response.data.accessToken;

      // Update local storage with new access token
      localStorage.setItem("accessToken", newAccessToken);
      setAccessToken(newAccessToken);
    } catch (error) {
      console.error("Failed to refresh token", error);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login"); // Redirect to login if refresh fails
    }
  };

  const handleApiRequest = async () => {
    try {
      const response = await axios.get("http://localhost:8000/protected-resource", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("API Response:", response.data);
    } catch (error) {
      if (error.response.status === 401) {
        // If 401 error (unauthorized), try refreshing the access token
        await refreshAccessToken();
        // Retry the original request after refreshing the token
        handleApiRequest();
      } else {
        console.error("Error fetching protected resource", error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">
        {username ? `Welcome, ${username}` : "Welcome to Your Dashboard"}
      </h1>
      <PostForm />
      <button onClick={handleApiRequest}>Fetch Protected Data</button>
    </div>
  );
}

export default Dashboard;
