# 📘 Customer Feedback & Issue Reporting System

A simple and interactive React project where users can submit feedback, bug reports, suggestions, complaints, and improvement ideas.  
All submitted feedback is instantly displayed in a clean dashboard.

This project teaches:

- Form Handling  
- Controlled & Uncontrolled Inputs  
- useState + useRef  
- Dynamic Input Fields  
- Conditional Rendering  
- Component-Based Architecture  
- Basic CSS Styling  

---

## 🚀 Features

### ✅ Feedback Form Includes:
- Full Name  
- Email  
- Category (Bug / Suggestion / Complaint / Other)  
- Priority (Low / Medium / High)  
- Description  
- Screenshot URL (optional)  
- Additional Notes (optional)

### ✅ Dynamic Fields  
Users can add/remove:
- Steps to Reproduce  
- Suggested Improvements  

### ✅ Instant Feedback Display  
Each submission is shown as a card with:
- Name & Email  
- Category + Priority badges  
- Description  
- Screenshot preview  
- Steps list  
- Suggestions list  
- Timestamp  

---

## 📂 Folder Structure

```
src/
 ├── App.jsx
 ├── App.css
 └── components/
      ├── FeedbackForm.jsx
      ├── FeedbackList.jsx
      └── FeedbackCard.jsx
```

---

## 🛠️ How to Run the Project

### 1️⃣ Install dependencies
```sh
npm install
```

### 2️⃣ Start development server
```sh
npm run dev
```

### 3️⃣ Open in browser  
Vite will show a link like:

```
http://localhost:5173/
```

Open it to view your project.

---

## 🎨 Styling  
All styling is done in **App.css**, including:

- Blue bordered form  
- Shadow effects  
- Input focus highlights  
- Card design for results  
- Colored priority badges  

---

## 🖼️ Add Screenshots  
Create a folder:

```
/public/screenshots/
```

Add your project images and link them like:

```markdown
![Feedback Form](public/screenshots/Screenshot%202025-12-06%20194415.png)
![Feedback Card](public/screenshots/Screenshot%202025-12-06%20194424.png)
```

---

## 👍 You're Done!

A clean, simple project that covers **all essential real-world React form concepts**.

If you want a more advanced README, Bootstrap version, or live demo deployment guide — just ask!
