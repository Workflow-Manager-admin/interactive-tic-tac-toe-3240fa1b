//
// openaiService.js
//
// Provides access to the OpenAI API key and a placeholder for making future OpenAI API requests.
// The key is loaded from the environment variable REACT_APP_OPENAI_API_KEY set in the .env file at build time.
//
// USAGE:
//   import { getOpenAIApiKey, callOpenAI } from "./openaiService";
//   const apiKey = getOpenAIApiKey();
//   // To call OpenAI in the future: await callOpenAI({prompt: "..."}); (implementation TBD)
//
// HOW IT WORKS:
// - The REACT_APP_OPENAI_API_KEY variable is automatically replaced at build time if set in .env (create-react-app standard).
// - The actual key is never shipped to the browser if not prefixed with REACT_APP_ in .env.
//
 
// PUBLIC_INTERFACE
/**
 * Returns the OpenAI API key set in the environment (.env).
 * If not set, returns undefined.
 */
export function getOpenAIApiKey() {
  // The key is compiled in the build if REACT_APP_OPENAI_API_KEY is defined in .env
  return process.env.REACT_APP_OPENAI_API_KEY;
}

// PUBLIC_INTERFACE
/**
 * Placeholder for making API calls to OpenAI in the future.
 * Do not implement yet -- this just sketches signature and documents intended use.
 *
 * @param {object} params - The request params (e.g., {prompt, ...})
 * @returns {Promise<object>} - The OpenAI API response (implementation TBD)
 *
 * Example usage (future):
 *    const result = await callOpenAI({ prompt: "..." });
 */
export async function callOpenAI(params) {
  // Placeholder implementation
  throw new Error("OpenAI API call not implemented yet. This is a placeholder.");
}
