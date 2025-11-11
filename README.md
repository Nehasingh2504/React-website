# 🌐 Responsive React Website

A **single-page responsive web application** built using **React (Vite)** and **Bootstrap**, featuring a beautifully designed **Home Page** and a fully functional **Contact Form** with real-time **API integration**.

This project demonstrates my skills in **frontend development, responsive UI design, API communication, form validation, and deployment**.

---

## 🚀 Live Demo

🔗 **[View on Vercel](https://react-website-eosin-ten.vercel.app/)**  

---

## 🧩 Features

- ✨ **Modern UI** — Clean, elegant design inspired by the Figma reference  
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop  
- 🧠 **Form Validation** — Prevents empty submissions and checks valid email & phone formats  
- 🔗 **API Integration** — Connects to the official endpoint using `fetch()` (POST method)  
- ⚡ **Built with Vite** — Fast build and development setup  
- 🎨 **Bootstrap Styling** — Simple yet polished layout with ready-made components  
- 🧰 **Tested with Postman** — Verified API communication  
- ☁️ **Deployed on Vercel** — Live, production-ready hosting  

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React.js (Vite) |
| Styling | Bootstrap, CSS |
| API | [https://vernanbackend.ezlab.in/api/contact-us/](https://vernanbackend.ezlab.in/api/contact-us/) |
| Testing | Postman |
| Deployment | Vercel |

---

## 🧾 API Integration

**Endpoint:**
POST https://vernanbackend.ezlab.in/api/contact-us/


**Request Body Example:**
```json
{
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}
```

**Expected Response:**
```json
{
  "created_at": "2025-10-10T05:27:59.371578Z",
  "email": "testuser@gmail.com",
  "id": 49,
  "message": "This is a message",
  "name": "Test user",
  "phone": "908765498",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```
## 🧮 Postman Testing

The API was tested and verified using **Postman**:

- ✔️ Sent **POST request** with sample data  
- ✔️ Validated **response structure**  
- ✔️ Checked **error handling** for missing or invalid fields

---
## 🧠 Key Learnings

- Implemented form validation and controlled components in React
- Integrated a real API with error and success handling
- Ensured consistent responsiveness across all devices
- Practiced modern deployment workflows (Vercel + GitHub CI/CD)
- Used Postman for manual API testing and debugging

---



