# URL Shortener

## 🚀 Project Overview
This project is a simple URL Shortener that allows users to:
- Generate a shortened URL from a long URL.
- Store both the original and shortened URLs in a database.
- Track the number of clicks on the shortened URL.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Others**: Nanoid (for generating unique short URLs)

## 📌 Features
- 🔗 Shorten long URLs into concise links.
- 🗄️ Store original and shortened URLs in a database.
- 📊 Track the number of times a shortened URL is clicked.
- 🚀 Redirect users to the original URL when they access the shortened link.

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the project root and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
BASE_URL=http://localhost:5000
```

### 4️⃣ Run the Project
```sh
npm start
```

## 🔥 API Endpoints
| Method | Endpoint       | Description              |
|--------|--------------|--------------------------|
| POST   | `/shorten`   | Shortens a URL          |
| GET    | `/:shortId`  | Redirects to original URL |
| GET    | `/stats/:shortId` | Fetches click count |

## 📌 Example Usage
### 🔹 Shorten a URL
```http
POST /url
Content-Type: application/json
{
  "url": "https://example.com"
}
```
#### Response:
```json
{
  "shortId": "abc123"
}
```

### 🔹 Redirect to Original URL
```http
GET /url/abc123
```
(Redirects to `https://example.com`)

### 🔹 Get Click Stats
```http
GET /url/analytics/abc123
```
#### Response:
```json
{
  "originalUrl": "https://example.com",
  "shortUrl": "http://localhost:5000/abc123",
  "visitHistory": [ entries ]
}
```

## 🤝 Contributing
Feel free to fork this repository, make improvements, and submit a pull request!

## 📜 License
This project is licensed under the MIT License.

## 📧 Contact
For any questions or suggestions, feel free to reach out!

