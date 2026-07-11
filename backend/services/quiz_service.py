import json
from groq import Groq
from config import Config

client = Groq(api_key=Config.GROQ_API_KEY)


def generate_quiz(text):

    prompt = f"""
Generate ONLY 3 multiple choice questions.

Return ONLY JSON.

Example:

[
 {{
   "question":"...",
   "options":["A","B","C","D"],
   "answer":"A"
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
        temperature=0.2
    )

    content = response.choices[0].message.content.strip()

    # Remove markdown if present
    content = content.replace("```json", "").replace("```", "").strip()

    return json.loads(content)