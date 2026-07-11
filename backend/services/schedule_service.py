from groq import Groq
from config import Config

client = Groq(api_key=Config.GROQ_API_KEY)


def generate_schedule(text):

    prompt = f"""
You are an AI study planner.

Create a study schedule for the following material.

Rules:

- Divide into Day 1, Day 2, Day 3...
- Keep each day manageable.
- Mention revision day.
- Keep it concise.
- Return only the schedule.

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