// const express = require("express");
// const { OpenAIApi, Configuration } = require("openai");

// const router = express.Router();

// // Configure OpenAI API
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure this environment variable is set correctly
// });
// const openai = new OpenAIApi(configuration);

// // Generate a post
// router.post("/generate", async (req, res) => {
//   const { prompt } = req.body;

//   if (!prompt) {
//     return res.status(400).json({ success: false, message: "Prompt is required." });
//   }

//   try {
//     const response = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: prompt }],
//       max_tokens: 100,
//       temperature: 0.7,
//     });

//     const generatedPost = response.data.choices[0]?.message?.content?.trim();

//     if (generatedPost) {
//       res.status(200).json({
//         success: true,
//         post: generatedPost,
//       });
//     } else {
//       res.status(500).json({ success: false, message: "Failed to generate post." });
//     }
//   } catch (error) {
//     console.error("Error generating post:", error.message);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// module.exports = router;
