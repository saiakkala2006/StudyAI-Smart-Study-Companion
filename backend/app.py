from flask import Flask
from flask_cors import CORS
from routes.upload import upload_bp
from routes.summary import summary_bp
from routes.flashcards import flashcard_bp
from routes.quiz import quiz_bp
from routes.schedule import schedule_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(summary_bp, url_prefix="/api")
app.register_blueprint(upload_bp, url_prefix="/api")
app.register_blueprint(flashcard_bp, url_prefix="/api")
app.register_blueprint(quiz_bp, url_prefix="/api")
app.register_blueprint(schedule_bp, url_prefix="/api")


@app.route("/")
def home():
    return {
        "status": "success",
        "message": "StudyAI Backend Running 🚀"
    }


@app.route("/health")
def health():
    return {
        "status": "healthy"
    }



# temp
@app.route("/test-schedule")
def test_schedule():

    from services.schedule_service import generate_schedule

    result = generate_schedule(
        "Machine Learning is a subset of Artificial Intelligence. It enables computers to learn from data."
    )

    return {
        "result": result
    }



if __name__ == "__main__":
    app.run(debug=True)