
import PostForm from "../components/PostForm";

function Dashboard() {

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <PostForm />
    </div>
  );
}

export default Dashboard;
