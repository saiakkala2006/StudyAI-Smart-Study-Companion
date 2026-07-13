import json
from groq import Groq
from config import Config

client = Groq(api_key=Config.GROQ_API_KEY)


def generate_quiz(text):

    prompt = f"""
You are an AI Study Assistant.

Generate exactly 10 multiple choice questions from the study material.

Rules:
- Each question must have 4 options.
- Only one option should be correct.
- Keep questions simple and relevant.
- Return ONLY valid JSON.

Example:

[
  {{
    "question": "What is Machine Learning?",
    "options": [
      "A subset of Artificial Intelligence",
      "A programming language",
      "A database",
      "A web browser"
    ],
    "answer": "A subset of Artificial Intelligence"
  }}
]

Study Material:

{text}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3
    )

    content = response.choices[0].message.content.strip()

    # Remove markdown if Groq returns it
    content = content.replace("```json", "")
    content = content.replace("```", "")
    content = content.strip()

    return json.loads(content)