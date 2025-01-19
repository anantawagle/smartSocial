import { useState } from "react";
import axios from "axios";


function PostForm() {
  const [prompt, setPrompt] = useState(""); // Store the user's input
  const [generatedPost, setGeneratedPost] = useState(""); // Store the generated post
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  // Handle form submission to generate post
  const handleGeneratePost = async () => {
    setIsLoading(true);
    setError(null); // Reset any previous errors
    try {
      const response = await axios.post("http://localhost:5000/api/posts/generate", {
        prompt,
      });

      if (response.data.success) {
        setGeneratedPost(response.data.post);
      } else {
        setError("Error generating post. Please try again.");
      }
    } catch (err) {
        console.log(err)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-8 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Generate Social Media Post</h2>
      <textarea
        placeholder="Enter your post prompt here..."
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows="4"
      />
      <button
        onClick={handleGeneratePost}
        className="w-full py-2 bg-indigo-600 text-white rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? "Generating..." : "Generate Post"}
      </button>

      {generatedPost && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Generated Post</h3>
          <p className="text-gray-700">{generatedPost}</p>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

PostForm.propTypes = {
  // Define any required props here if necessary
};

export default PostForm;
