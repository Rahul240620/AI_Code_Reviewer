const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({}); // Auto-uses GEMINI_API_KEY from .env

async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

module.exports = { generateContent };
