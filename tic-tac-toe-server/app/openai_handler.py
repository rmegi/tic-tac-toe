import os

import openai
from prompt import prompt


class OpenAIHandler:
    def __init__(self, model="gpt-4-turbo", api_key=None):
        self.api_key = api_key or os.getenv("OPENAI_API_KEY")
        self.model = model

        if not self.api_key:
            raise ValueError(
                "OpenAI API key is missing. Set it in the environment variable or pass it as a parameter."
            )

        self.client = openai.OpenAI(api_key=self.api_key)
        self.messages_history = [
            {
                "role": "system",
                "content": [{"type": "text", "text": prompt}],
            }
        ]

    def clear_chat(self):
        self.messages_history = [
            {
                "role": "system",
                "content": [{"type": "text", "text": prompt}],
            }
        ]
        return "Chat history cleared."

    def get_chat_history(self):
        return self.messages_history

    def ask(self, prompt, max_tokens=500, temperature=0.00001):
        try:
            user_message = {
                "role": "user",
                "content": [{"type": "text", "text": prompt}],
            }

            user_prompt_message = user_message.copy()

            response = self.client.chat.completions.create(
                model=self.model,
                messages=self.messages_history + [user_message],
                max_tokens=max_tokens,
                temperature=temperature,
            )
            self.messages_history.append(user_prompt_message)
            self.messages_history.append(
                {
                    "role": "assistant",
                    "content": [
                        {"type": "text", "text": response.choices[0].message.content}
                    ],
                }
            )
            return response.choices[0].message.content

        except openai.OpenAIError as e:
            return f"OpenAI API error: {e}"
        except Exception as e:
            return f"An unexpected error occurred: {type(e)}: {e}"
