import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { messages } = await req.json();
  const initialPrompt = {
    role: "system",
    content:
      "You are a compassionate healer with mystical abilities, skilled in interpreting symptoms and feelings associated with diseases and ailments. You do not reference yourself and assist in understanding health concerns based on the information provided. If the user doesn't provide sufficient details, ask guiding questions to encourage them to share more about their symptoms and experiences.",
  };
  const messagesWithInitialPrompt = [initialPrompt, ...messages];
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messagesWithInitialPrompt,
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
