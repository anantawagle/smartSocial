
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero bg-indigo-600 text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">AI meets Social Media</h1>
        <p className="text-xl mb-6">Create and schedule content effortlessly with our AI-powered platform.</p>
        <div className="space-x-4">
          <Link to="/signup" className="px-6 py-3 bg-green-500 rounded-full text-white hover:bg-green-400">
            Try Free
          </Link>
          <Link to="/signup" className="px-6 py-3 bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-indigo-600">
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
