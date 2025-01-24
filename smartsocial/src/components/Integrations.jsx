// src/components/Integrations.js
import Fb from "../assets/2021_Facebook_icon.svg.webp"
import Insta from "../assets/Instagram_icon.png"
import X from "../assets/x-social-media-black-icon.png"
import Linkedin from "../assets/174857.png"


const Integrations = () => {
  return (
    <section className="integrations bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">All Major Social Media Integrations</h2>
        <p className="text-lg mb-8">Connect with platforms like Facebook, Instagram, Twitter, LinkedIn, and more.</p>
        <div className="flex justify-center space-x-8">
          <img src={Fb} alt="Facebook" className="h-12" />
          <img src={Insta} alt="Instagram" className="h-12" />
          <img src={X} alt="Twitter" className="h-12" />
          <img src={Linkedin} alt="LinkedIn" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
