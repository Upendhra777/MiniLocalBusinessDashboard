# 💼 Mini Local Business Dashboard

A responsive full-stack application simulating how local businesses can view their SEO content and Google Business data — built as part of the GrowthProAI Full Stack Intern Assignment.

## 🧩 Features

### 📥 Input Form (React + Tailwind CSS)
- Enter **Business Name** and **Location**
- Fully responsive, mobile-optimized design
- Basic form validation

### 📊 Business Dashboard Card
- ⭐ Simulated Google Rating
- 📝 Number of Reviews
- 🧠 AI-generated SEO Headline
- 🔁 Button to regenerate a new headline (fetches from backend)

---

## 🔧 Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express.js

No database used — all data is simulated.

---

## 🔁 API Endpoints

### `POST /business-data`
Simulates business SEO and rating data.

**Request Body:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
