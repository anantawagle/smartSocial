import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token is found
    } else {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername); // Get username from localStorage (if available)
    }
  }, [navigate]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">
        {username ? `Welcome, ${username}` : "Welcome to Your Dashboard"}
      </h1>
      <PostForm />
    </div>
  );
}

export default Dashboard;
