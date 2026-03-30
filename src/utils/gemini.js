import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error(
    "Missing VITE_GEMINI_API_KEY environment variable. " +
      "Add it to your .env file to use the Gemini AI features."
  );
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error.status === 429) {
      return "Rate limit reached. Please wait a moment and try again.";
    }
    if (error.status === 403) {
      return "Invalid or unauthorized API key. Please check your configuration.";
    }
    return "Sorry, an error occurred. Please try again.";
  }
}
