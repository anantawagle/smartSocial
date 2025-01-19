
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/home'>
        <h1 className="text-2xl font-extrabold">SmartSocial</h1>
        </Link>
        <div className="space-x-4">
          
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link to="/signup" className="hover:text-gray-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
