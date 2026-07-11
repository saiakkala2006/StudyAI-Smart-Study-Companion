import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    FIREBASE_CREDENTIALS = os.getenv("FIREBASE_CREDENTIALS")