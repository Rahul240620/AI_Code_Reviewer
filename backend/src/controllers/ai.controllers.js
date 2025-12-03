const { generateContent } = require("../services/ai.service");

const getResponse = async (req, res) => {
  const prompt = req.query.prompt;
  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }
  const response = await generateContent(prompt);
  res.send(response);
};
module.exports = { getResponse };
