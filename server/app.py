from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)

## test route to see if server is up in dev
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Flask server is running!"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.getenv("PORT", 5000)))
