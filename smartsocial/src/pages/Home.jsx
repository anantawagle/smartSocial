import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Home() {
  return (

    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SmartSocial</h1>
          <p className="text-xl mb-6">Social media management made easy!</p>
            <Link to='/login'>
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Get Started
          </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Content Automation"
            description="Generate posts and captions tailored to your audience."
            icon="⚡"
          />
          <FeatureCard
            title="Analytics Dashboard"
            description="Track engagement and performance metrics in real time."
            icon="📊"
          />
          <FeatureCard
            title="Scheduling"
            description="Automate posting schedules across multiple platforms."
            icon="⏰"
          />
        </div>
      </div>
    </div>
   

  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Home;
