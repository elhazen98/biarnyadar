"use server";

import getRoastPrompt from "@/lib/roastPrompt";
import { openai } from "@/utils/openai";

export async function getResponsePrompt(prompt, RoastLevel) {
  const systemPrompt = getRoastPrompt(RoastLevel);
  const promptString = JSON.stringify(prompt);
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: systemPrompt,
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: promptString,
          },
        ],
      },
    ],
    response_format: {
      type: "text",
    },
    temperature: 1.1,
    max_completion_tokens: 5000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  const messageContent = response.choices[0].message.content;
  return messageContent;
}
