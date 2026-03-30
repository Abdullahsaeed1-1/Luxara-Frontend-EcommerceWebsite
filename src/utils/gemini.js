import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Set VITE_GEMINI_API_KEY in your .env file.");
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export async function askGemini(prompt) {
  if (!genAI) {
    return "AI assistant is not configured. Please set up your API key.";
  }
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error.message ?? "Unknown error");
    return "Sorry, kuch error aa gaya. Dobara try karein!";
  }
}
