

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="/" className="text-2xl font-extrabold">SmartSocial</a>
        </div>
        <div className="mb-6">
          <p>&copy; 2025 SmartSocial, All Rights Reserved.</p>
        </div>
        <div className="space-x-4">
          <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
