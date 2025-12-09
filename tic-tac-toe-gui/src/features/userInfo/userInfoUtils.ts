import type { UserInput } from "../../atoms/userInfoAtoms";

export async function handleUserInfo(backendUrl: string, userInfo: UserInput) {
  try {
    const response = await fetch(`${backendUrl}/openai/add_user_prompt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Error sending user info:", error);
    throw error;
  }
}
