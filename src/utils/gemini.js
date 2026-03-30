import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
if (!API_KEY) {
  throw new Error('VITE_GEMINI_API_KEY is not defined. Please add it to your .env file.');
}
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `You are a helpful shopping assistant for Luxara, a premium jewelry e-commerce store.
Luxara sells luxury jewelry including necklaces, bracelets, earrings, rings, and gift sets.
Help customers find products, answer questions about jewelry care, shipping, returns, and gift recommendations.
Keep your answers concise and friendly. If asked about something unrelated to shopping or Luxara, politely redirect the conversation.`;

export async function askGemini(userMessage, chatHistory = []) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const chat = model.startChat({
    history: [
      {
        role: 'user',
        parts: [{ text: SYSTEM_PROMPT }],
      },
      {
        role: 'model',
        parts: [{ text: "I'm your Luxara shopping assistant! How can I help you find the perfect jewelry today?" }],
      },
      ...chatHistory,
    ],
  });

  const result = await chat.sendMessage(userMessage);
  return result.response.text();
}
