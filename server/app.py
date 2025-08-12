from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)

CORS(app)

## test route to see if server is up in dev
@app.route("/api/test", methods=["GET"])
def home():
    return jsonify({
        'message': "If you're seeing me on the frontend, congrats you've connected the the server and backend"
        })

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.getenv("PORT", 5000)))
