const { generateContent } = require("../services/ai.service");

const getReview = async (req, res) => {
  const code = req.body.code;
  if (!code) {
    return res.status(400).json({ message: "Code prompt is required" });
  }
  const response = await generateContent(code);
  res.send(response);
};
module.exports = { getReview };
