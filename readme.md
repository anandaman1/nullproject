# StackOverflow Clone Web App

A full-featured social platform built using modern web technologies. This app is designed to support responsive UI, real-time notifications, public social sharing, and multi-language support with conditional access control.

---

## Features

### 1. Responsive Design
- Website is fully responsive across devices.
- Components auto-adjust using media queries and flexible layout styles.
- Mobile, Tablet, and Desktop views supported.

### 2. Notification System
- Uses **Browser Notification API** to notify users when:
  - Their question is answered.
  - Their post or answer is upvoted.
- Users can **enable/disable notifications** via the Profile page.
- Notifications will display as pop-up messages with action-based context.

### 3. Public Space for Media Sharing
- Users can post **pictures and videos** publicly.
- Posts support **comments, likes, and shares**.
- Posting limit based on number of friends:
  - **0 friends** →  No posting allowed.
  - **1–2 friends** →  1–2 posts per day.
  - **>10 friends** →  Unlimited daily posts.
- Daily posting counter resets at 12:00 AM.

### 4. Multi-Language Support
- Languages supported:  
  🇬🇧 English, 🇪🇸 Spanish, 🇮🇳 Hindi, 🇵🇹 Portuguese, 🇨🇳 Chinese, 🇫🇷 French
- Users can switch language from a dropdown menu.
- Upon language switch:
  - **French** → Email OTP verification required.
  - **Other languages** → Mobile number OTP authentication required.
- All UI text and messages translated dynamically via i18n setup.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT, OTP-based via Email & SMS
- **Notifications**: Web Notification API
- **Translation**: `react-i18next` or similar library

---

##  Setup & Installation

```bash
git clone https://github.com/your-username/socialconnect.git
cd socialconnect

# Install dependencies
npm install

# Start the development server
npm start
