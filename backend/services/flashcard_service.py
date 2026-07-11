import json
from groq import Groq
from config import Config

client = Groq(api_key=Config.GROQ_API_KEY)


def generate_flashcards(text):

    prompt = f"""
You are an AI study assistant.

Generate exactly 10 flashcards.

Return ONLY valid JSON.

Example:

[
    {{
        "question":"...",
        "answer":"..."
    }}
]

Study Material:

{text}
"""

    response = client.chat.completions.create(

        model="llama-3.3-70b-versatile",

        messages=[
            {
                "role":"user",
                "content":prompt
            }
        ],

        temperature=0.3

    )

    return json.loads(response.choices[0].message.content)