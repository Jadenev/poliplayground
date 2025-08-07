Quick description 💼:
Our app is a user-friendly Streamlit application that helps reduce political apathy. We let users interact with real U.S. bills and laws, and get simple summaries of what they mean to real people. Users can explore the left/right/center interpretations of what the bills mean to specific groups theoretically. A user can take a values quiz that reflects their learnings without pressure to choose, party labels, or judgment.

How to run locally👟:
Make sure you have Python and Git installed! MAY need to "pip install streamlit"!
Commands for root terminal:
- git clone https://github.com/Jadenev/poliplayground.git
- cd poliplayground
- python3 -m venv venv
- source venv/bin/activate  # On Windows use: venv\Scripts\activate
- pip install -r requirements.txt
- streamlit run app.py
(It will auto-launch at http://localhost:8501 or give you a link in the terminal)

Roles A🎒, B🥼, and C💍 with tech stack included:

A:🎒Building & Backend (Streamlit, Python, Git, JSON)
- Structure App
- Quiz and explainer logics
- Organize Github project file
- Remind of target dates

B:🥼GPT Integration (OpenAI GPT-4 API)
- Write GPT prompts
- Set up on/off function of AI-generated explanations
- Integrate OpenAI API (maybe even a backup system if API fails)
  
C:💍Frontend/UX/Design (Figma/draw.io? HTML/CSS)
- Create UI mockup
- Build layout for UI components
- Style touches
- !Working on mobile-first design!

Rough timeline plan👩🏽‍💻👨🏽‍💻🧑🏾‍💻: 

  August 9️⃣
UI Inspo
Political Website inspo
JSON structure for bills/laws { "bill_id": "H.Con.Res.14", "date_introduced": "2025-02-25", "topic": "Financial", "subtopic": "Congressional Budget", "sponsor": { "name": "Rep. Jodey C. Arrington", "district": "Texas 19th District", "region": "Midwestern Texas (Lubbock to Abilene)" } }
Server created
UI base created
Connecting UI and Server

  August 🔟- 1️⃣2️⃣
❓Catchup meeting Monday August 11th ❓
Add bill data samples
Implement UI for perspectives

  August 1️⃣3 -1️⃣5
Connect UI to JSON sample data
Start perspective logic (left leaning, right leaning, neutral ideologies) 
Work on GPT/AI simplifier
Test bill loader with AI summary
Add tool/usability tips + GPT interface

 August 16-18
 ❓Catchup meeting Saturday August 16th ❓
 Add quizzes(JSON or Python)
(Does our model need to be trained??) 

  August 20-22
❓Catchup meeting Wednesday August 20th ❓
Correct and implement error handling
Test, test, test
Fix bugs

  August 23-25
❓Catchup meeting Saturday August 23rd ❓
Add cute/fun animations for "completing" tasks or pieces of info 
Finalize Streamlit deployment

  August 26-30
❓ Catchup meeting Saturday August 30th ❓
Prepare demo ideas
Now that we have a stunning working project and we finished early, we have time to perfect and improve!

