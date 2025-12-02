const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI(process.env.GOOGLE_GEMINI_API);

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}
 
await main();
