import {GoogleGenerativeAI} from "@google/generative-ai";

let genAI: GoogleGenerativeAI;

export default async function classingTasks(task: string)
{
  const model = initGemini().getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(`The text in [] below is the title of the task and its description. Based on the text, output "yes" if the task below requires battery consumption, output "no" if not. The output will contain a reason of your answer.\n\ntask: [${task}]`);
    return result.response.text().includes("yes");
  } catch (error) {
    throw error;
  }
}

export function initGemini()
{
  if (!genAI) genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  return genAI;
}

