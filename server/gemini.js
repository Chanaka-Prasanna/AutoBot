import { GoogleGenerativeAI } from "@google/generative-ai";

const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyCbRVzRSHxLqrdyBKgxWZA1mnx-_lktoFs";

const genAI = new GoogleGenerativeAI(API_KEY);

const conversation = async (req, res) => {
  const { prompt } = req.body;
  const text = await run(prompt);
  return res.status(200).send({ response: text });
};

async function run(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return JSON.stringify(text);
}

export { conversation };
