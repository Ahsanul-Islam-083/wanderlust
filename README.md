# 🌍 Wanderlust - Explore the World, One Destination at a Time ✈️



### 🚀 [Live Demo](https://wanderlust-hazel-five.vercel.app/) | 💻 [Backend Repo](https://github.com/Ahsanul-Islam-083/wanderlust-server)

**Wanderlust** is a premium travel booking platform designed for modern adventurers. Whether you're looking for a serene beach escape, a rugged mountain hike, or a vibrant city tour, Wanderlust connects you with the world's most breathtaking destinations.

---

## 📖 Overview

Wanderlust is more than just a booking site; it's a community-driven portal for travelers. Built with **Next.js 16** and **BetterAuth**, it offers a seamless, secure, and lightning-fast experience for discovering and booking your next journey. The platform features a curated selection of global destinations, each with detailed insights, pricing, and user reviews.

Our mission is to make travel planning effortless and inspiring. With a sleek dark-mode aesthetic and a mobile-first approach, Wanderlust ensures that your next adventure is just a few clicks away, whether you're at home or on the go.

The application leverages the power of **MongoDB** for scalable data management and **HeroUI** for a state-of-the-art user interface that feels alive with micro-animations and responsive layouts.

---

## 📸 Screenshots


<!-- Add your screenshots here -->


---

## ✨ Features

- 🌍 **Global Exploration** - Discover exotic destinations across all continents.
- 🔐 **Secure Authentication** - Robust login system powered by BetterAuth.
- 👤 **Traveler Profiles** - Personalized dashboards to manage your travel life.
- 📅 **Smart Booking** - Easy-to-use booking system for hassle-free reservations.
- 📤 **Contribution Hub** - Add and share your own travel spots with the community.
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop viewing.
- ⚡ **Next.js 16 Optimization** - Fast performance with Server Components and App Router.
- 🎨 **HeroUI Integration** - Premium, accessible, and beautiful UI components.
- 🔔 **Real-time Feedback** - Instant notifications using React Hot Toast and Toastify.
- 🗺️ **Interactive Categories** - Filter destinations by type and popularity.
- 🔑 **Google Social Login** - Quick access using your Google account.
- 🛠️ **Management Tools** - Effortlessly track and cancel your upcoming bookings.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | 16.2.6 | Full-stack React Framework |
| **HeroUI** | 3.0.4 | Premium React Component Library |
| **Tailwind CSS** | 4.0.0 | Utility-first CSS Framework |
| **BetterAuth** | 1.6.11 | Comprehensive Authentication Solution |
| **MongoDB** | 7.2.0 | High-performance NoSQL Database |
| **Lucide React** | 1.16.0 | Clean and Consistent Icon Set |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@better-auth/mongo-adapter": "^1.6.11",
    "@gravity-ui/icons": "^2.18.0",
    "@heroui/react": "^3.0.4",
    "@heroui/styles": "^3.0.4",
    "better-auth": "^1.6.11",
    "lucide-react": "^1.16.0",
    "mongodb": "^7.2.0",
    "next": "16.2.6",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.6.0",
    "react-toastify": "^11.1.0"
  }
}
```

---

## 🚀 Run Locally

Follow these steps to get a local copy up and running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ahsanul-Islam-083/wanderlust.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd wanderlust
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the variables listed below.

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

```env
# Authentication
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Database
MONGODB_URI=your_mongodb_connection_string

# Social Auth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# API
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

---

## 🛡️ Authentication Flow

- **Secure Handshake:** Uses BetterAuth for industry-standard session management.
- **Provider Options:** Supports both traditional Email/Password and Google OAuth.
- **JWT Strategy:** Sessions are managed using encrypted JSON Web Tokens for security.
- **Database Adapter:** User data is securely synced with MongoDB using a dedicated adapter.
- **Protected Routes:** Middleware ensures only authorized users can access booking and profile features.

---

## 📖 How to Use

| Action | Result |
| :--- | :--- |
| **Sign Up** | Create a new traveler account with secure credentials. |
| **Login** | Access your personalized dashboard and saved bookings. |
| **Browse Destinations** | Explore a wide range of exotic locations with full details. |
| **Book a Trip** | Select dates and secure your spot for a future adventure. |
| **Add Destination** | Contribute your own travel spots to the global community. |
| **Manage Bookings** | View, track, and manage all your upcoming travel plans. |

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by Ahsanul Islam</p>
  <h3>Travel far, travel wide, travel Wanderlust. 🗺️</h3>
</div>
