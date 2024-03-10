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
      "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. It is designed to help you solve problems and answer your questions. You can ask for help with a problem or ask for information. The assistant is very good at solving problems and answering questions. The assistant is very helpful.",
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
