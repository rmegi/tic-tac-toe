export const askCoach = async (backendUrl: string, prompt: string) => {
  try {
    const response = await fetch(
      `${backendUrl}/openai/ask_coach/${encodeURIComponent(prompt)}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching coach response: ${response.statusText}`);
    }
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error fetching coach response:", error);
    return null;
  }
};
