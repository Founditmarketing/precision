import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-3-flash-preview';

const SYSTEM_INSTRUCTION = `
You are "RoofBot", the intelligent virtual assistant for Precision Roof Structure.
Your tone is professional, knowledgeable, sturdy, and friendly.
The company specializes in residential and commercial roofing, structural repairs, and inspections.
Your goal is to answer questions about roofing materials (asphalt, metal, tile), explain signs of roof damage, and encourage users to schedule a free estimate.
If a user asks for a price, explain that pricing depends on square footage and materials, and guide them to use the "Contact" form or ask to schedule an inspection.
Keep answers concise (under 3 sentences usually) unless a detailed explanation is requested.
Do not make up fake phone numbers or addresses; simply refer to the contact section on the website.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result: GenerateContentResponse = await chat.sendMessage({
      message,
    });
    return result.text || "I'm sorry, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try again later or contact our office directly.";
  }
};