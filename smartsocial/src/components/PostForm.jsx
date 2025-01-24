import { useState } from 'react';

const Dashboard = () => {
  const [content, setContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    facebook: false,
    twitter: false,
    linkedin: false,
    instagram: false,
  });
  
  const handleContentChange = (e) => setContent(e.target.value);
  const handlePlatformToggle = (platform) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };

  const handlePostSubmit = () => {
    // Code to submit the post to selected platforms
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, User</h1>
        <button>Logout</button>
      </header>

      <div className="create-post">
        <textarea
          placeholder="Write your content here..."
          value={content}
          onChange={handleContentChange}
        />
        <div className="social-media-selection">
          <label>
            <input
              type="checkbox"
              checked={selectedPlatforms.facebook}
              onChange={() => handlePlatformToggle('facebook')}
            />
            Facebook
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedPlatforms.twitter}
              onChange={() => handlePlatformToggle('twitter')}
            />
            Twitter
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedPlatforms.linkedin}
              onChange={() => handlePlatformToggle('linkedin')}
            />
            LinkedIn
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedPlatforms.instagram}
              onChange={() => handlePlatformToggle('instagram')}
            />
            Instagram
          </label>
        </div>
        <button onClick={handlePostSubmit}>Publish</button>
      </div>

      <div className="connected-social-media">
        {/* Display connected social media accounts */}
      </div>

      <div className="post-history">
        {/* Display past posts and analytics */}
      </div>
    </div>
  );
};

export default Dashboard;
