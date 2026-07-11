from groq import Groq
from config import Config

client = Groq(api_key=Config.GROQ_API_KEY)


def generate_summary(text):

    prompt = f"""
You are an expert study assistant.

Summarize the following study material.

Rules:
- Use simple language.
- Use bullet points.
- Mention important concepts.
- Keep it concise.
- Return only the summary.

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
        temperature=0.4
    )

    return response.choices[0].message.content