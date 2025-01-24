
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Integrations from "../components/Integrations";
import SocialMediaAI from "../components/socialMediaAI";
// import EcommerceIntegration from "../components/EcommerceIntegration";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      {/* <div className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to SmartSocial</h1>
          <p className="text-xl mb-6">Social media management made easy!</p>
          <Link to="/login">
            <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
              Get Started
            </button>
          </Link>
        </div>
      </div> */}

      <Features />
      <Integrations />
      <SocialMediaAI />
      {/* <EcommerceIntegration /> */}
      <Testimonials />
    </div>
  );
}

export default Home;
