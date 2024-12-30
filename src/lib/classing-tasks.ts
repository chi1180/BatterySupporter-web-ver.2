import {GoogleGenerativeAI} from "@google/generative-ai";

let genAI: GoogleGenerativeAI;

export default async function classingTasks(task: string) {
  const model = initGemini().getGenerativeModel({model: "gemini-1.5-flash"});

  try {
    const result = await model.generateContent(`The text in [] below is a summary of the task titles and notes listed. From the text in [], determine whether or not the device (PC, Smartphone, etc.) battery needs to be consumed when performing the task. If the device battery needs to be consumed, output "yes", and if the device battery does not need to be consumed, output "no". Output only "yes" or "no", and do not output anything else.\n\nTask: [${task}]`);
    return result.response.text().includes("yes");
  } catch (error) {
    throw error;
  }
}

export function initGemini() {
  if (!genAI) genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  return genAI;
}

