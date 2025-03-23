# 🚀 Startup Idea Generator API

A simple REST API that allows users to generate, manage, and filter startup ideas. Built using **Node.js** and **Supabase**, and deployed on **Render**.

## 📌 Features

- **GET /ideas** → Fetch all startup ideas
- **POST /ideas** → Add a new idea
- **GET /ideas/:id** → Get a specific idea by ID
- **GET /ideas/category/:category** → Filter ideas by category
- **PUT /ideas/:id** → Update an idea’s status
- **DELETE /ideas/:id** → Delete an idea

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Render

---

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/startup-idea-api.git
cd startup-idea-api
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Supabase

1. Go to [Supabase](https://supabase.com/), create a new project.
2. Navigate to **Project Settings → API** and copy the `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
3. Inside your project folder, create a `.env` file and add:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=5000
```

4. In **Supabase SQL Editor**, create the `ideas` table:

```sql
CREATE TABLE ideas (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    status TEXT DEFAULT 'new'
);
```

### 4️⃣ Run the Server Locally

```sh
npm start
```

Your API will be running on `http://localhost:5000`

---

## 🌍 Deployment on Render

### 1️⃣ Push Code to GitHub

```sh
git add .
git commit -m "Initial commit"
git push origin main
```

### 2️⃣ Deploy on Render

1. Go to [Render](https://render.com/), create an account.
2. Click **New → Web Service**.
3. Connect your **GitHub Repository**.
4. Fill in these details:
   - **Build Command:** `npm install && npm start`
   - **Environment Variables:** Add `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
5. Click **Deploy** and wait for the service to be live.

### 3️⃣ Get Live API URL

Once deployed, you’ll get a live URL like:

```sh
https://your-api-name.onrender.com
```

Test it using Postman:

```sh
GET https://your-api-name.onrender.com/ideas
```

---

## 🔗 Live API Link

👉 [**Click Here to Access the API**](https://your-api-name.onrender.com) *(Replace with your Render URL)*

### 📌 Sample Test Cases for Postman

#### 1️⃣ Fetch All Ideas
```sh
GET https://your-api-name.onrender.com/ideas
```

#### 2️⃣ Add a New Idea
```sh
POST https://your-api-name.onrender.com/ideas
Content-Type: application/json

{
    "title": "Smart Plant Monitor",
    "category": "tech"
}
```

#### 3️⃣ Get Idea by ID
```sh
GET https://your-api-name.onrender.com/ideas/1
```

#### 4️⃣ Get Ideas by Category
```sh
GET https://your-api-name.onrender.com/ideas/category/tech
```

#### 5️⃣ Update Idea Status
```sh
PUT https://your-api-name.onrender.com/ideas/1
Content-Type: application/json

{
    "status": "funded"
}
```

#### 6️⃣ Delete an Idea
```sh
DELETE https://your-api-name.onrender.com/ideas/1
```

---

## 📜 License

This project is licensed under the MIT License. See `LICENSE.md` for details.

---

*Developed with ❤️ using Node.js & Supabase* 🚀

