# 🌤️ Weather App — React

A responsive weather application built with React that displays real-time weather data with full Arabic/English translation support.

---

## 🚀 Live Demo

> Coming soon...

---

## 📸 Preview
<img src="https://cdn.vectorstock.com/i/1000v/40/42/weather-condition-forecast-cloud-with-rain-vector-44814042.jpg" width="300" />
## ✨ Features

- 🌡️ Real-time temperature (current, min, max)
- 🌍 Arabic / English language toggle
- 🕐 Live date and time display (with moment.js locale support)
- ☁️ Dynamic weather description and icon
- 📱 Responsive design using Material UI
- 🔤 Custom IBM Plex Arabic font (7 weights)
- 🧩 Clean component-based architecture

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI Framework |
| Material UI | Component Library |
| Axios | API Requests |
| i18next | Internationalization (AR/EN) |
| moment.js | Date & Time Formatting |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── CARD.js             # Main card wrapper with RTL/LTR support
│   ├── City_and_time.js    # City name and date/time display
│   ├── Temp.js             # Temperature, icon, min/max
│   ├── imageIcon.js        # Cloud icon component
│   ├── TransleatBTN.js     # Language toggle button
│   └── Mycomponents.css    # Component styles
├── App.js                  # Main app logic
├── App.css                 # Global styles & IBM font setup
└── i18n.js                 # i18next configuration
public/
├── locales/
│   └── ar/
│       └── translation.json  # Arabic translations
└── fonts/IBM/               # IBM Plex Arabic font files
```

---

## 🌐 Translations

The app supports full Arabic/English switching using **i18next**.

`public/locales/ar/translation.json` includes:

```json
{
  "Dubai": "دبي",
  "عربي": "English",
  "Min": "الصغرى",
  "Max": "الكبرى",
  "clear sky": "سماء صافية",
  "few clouds": "غيوم خفيفة",
  "scattered clouds": "غيوم متفرقة",
  "broken clouds": "غيوم متقطعة",
  "shower rain": "أمطار خفيفة",
  "rain": "مطر",
  "thunderstorm": "عاصفة رعدية",
  "snow": "ثلج",
  "mist": "ضباب"
}
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/weather-app-react.git

# 2. Navigate to project folder
cd weather-app-react

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will run at `http://localhost:3000`

---

## 🏗️ Build for Production

```bash
npm run build
```

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "@mui/material": "^5.x",
  "@mui/icons-material": "^5.x",
  "axios": "^1.x",
  "moment": "^2.x",
  "i18next": "^23.x",
  "react-i18next": "^13.x"
}
```

---

## 👨‍💻 Author

**Adnan**
- GitHub: [@Adnan-Ghiyath](https://github.com/Adnan-Ghiyath)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
