const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,  // Load the API key from the .env file
});
const openai = new OpenAIApi(configuration);

// Controller function to generate a social media post
async function generatePost(req, res) {
  try {
    const { prompt } = req.body;  // Get the prompt from the request body

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",  // You can change the model as needed
      messages: [
        { role: "system", content: "You are a social media manager." },
        { role: "user", content: prompt }
      ],
      max_tokens: 100,
    });

    const generatedPost = response.data.choices[0].message.content;

    // Send the generated post back in the response
    res.status(200).json({
      success: true,
      post: generatedPost,
    });
  } catch (error) {
    console.error("Error generating post:", error.response ? error.response.data : error.message);
    res.status(500).json({
      success: false,
      message: "Error generating the post.",
    });
  }
}

module.exports = {
  generatePost,
};
