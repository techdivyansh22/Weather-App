# 🌦️ Weather App

A responsive and interactive Weather Application built using **HTML, CSS, and JavaScript** that provides real-time weather information for any city around the world. Users can either search for a city manually or grant location access to fetch weather data for their current location.

---

## 🚀 Features

✅ Get weather information using your current location

✅ Search weather by city name

✅ Displays:

- 🌡️ Temperature
- ☁️ Cloud Percentage
- 💧 Humidity
- 🌬️ Wind Speed
- 🌍 Country Flag
- 🌤️ Weather Description
- 🖼️ Weather Icon

✅ Loading screen while fetching data

✅ Responsive UI

✅ Clean and modern design

---

## 📸 Screenshots

### Weather Information

```md
Add your project screenshot here

![Weather App Screenshot](screenshot.png)
```

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API
- Geolocation API

---

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── styles.css
├── script.js
│
├── assets/
│   ├── cloud.png
│   ├── humidity.png
│   ├── wind.png
│   ├── location.png
│   ├── search.png
│   └── loading.gif
│
└── README.md
```

---

## ⚙️ How It Works

### 📍 Current Location Weather

1. Click **Grant Access**.
2. Browser requests location permission.
3. Latitude and longitude are fetched using the Geolocation API.
4. Weather data is fetched from OpenWeatherMap API.
5. Weather information is displayed on the screen.

### 🔎 Search Weather

1. Click on **Search Weather** tab.
2. Enter a city name.
3. Press the search button.
4. Weather details for the city are displayed instantly.

---

## 🌤️ Weather Information Displayed

| Parameter | Description |
|------------|-------------|
| Temperature | Current temperature |
| Humidity | Moisture level in air |
| Wind Speed | Wind velocity |
| Clouds | Cloud coverage percentage |
| Description | Weather condition |
| Country Flag | Country identifier |

---

## 🔑 API Used

### OpenWeatherMap API

```bash
https://api.openweathermap.org/data/2.5/weather
```

Get your free API key from:

https://openweathermap.org/api

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/weather-app.git
```

### Move into Project Folder

```bash
cd weather-app
```

### Add API Key

Inside `script.js` replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with:

```javascript
const API_KEY = "YOUR_ACTUAL_API_KEY";
```

### Run Project

Open:

```bash
index.html
```

in your browser.

---

## 🧠 Concepts Used

- DOM Manipulation
- Async/Await
- Fetch API
- Promises
- Geolocation API
- REST APIs
- Event Handling
- Responsive Web Design

---

## 📋 Future Enhancements

- 5-Day Weather Forecast
- Hourly Forecast
- Dark/Light Mode
- Search History
- Weather Maps
- Air Quality Index (AQI)
- UV Index Information

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Divyansh Shahi**

GitHub: https://github.com/techdivyansh22

LinkedIn: https://linkedin.com/in/divyanshshahi/

---

⭐ If you found this project useful, consider giving it a star on GitHub!
