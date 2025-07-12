# Weather App

A responsive web application that fetches and displays weather data based on user location or user-inputted location.

## Features

- **Location-based Weather**: Get weather for your current location using geolocation API
- **Search by City**: Enter any city name to get weather information
- **Comprehensive Weather Data**: Displays temperature, weather conditions, humidity, wind speed, pressure, visibility, and sunrise/sunset times
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, modern interface with smooth animations

## Setup Instructions

### 1. Get an API Key

You need to get a free API key from OpenWeatherMap:

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to the API Keys section in your account
4. Copy your API key

### 2. Configure the API Key

Open `script.js` and replace `'YOUR_API_KEY'` with your actual API key:

```javascript
const apiKey = 'your_actual_api_key_here';
```

### 3. Run the Application

Since this is a client-side application, you can run it in several ways:

#### Option 1: Simple HTTP Server (Recommended)
```bash
# If you have Python installed
python -m http.server 8000

# Or if you have Node.js installed
npx http-server
```

Then open `http://localhost:8000` in your browser.

#### Option 2: Live Server (VS Code Extension)
If you're using VS Code, install the "Live Server" extension and right-click on `index.html` → "Open with Live Server".

#### Option 3: Direct File Opening
You can also open `index.html` directly in your browser, but some browsers may block geolocation requests for file:// URLs.

## File Structure

```
weather-app/
├── index.html      # Main HTML file
├── styles.css      # Styling and responsive design
├── script.js       # JavaScript for API calls and DOM manipulation
└── README.md       # This file
```

## Usage

1. **Search by City**: Enter a city name in the input field and click "Search"
2. **Current Location**: Click "Use Current Location" to get weather for your current position (requires location permission)
3. **Weather Information**: The app displays:
   - Current temperature and weather conditions
   - Feels-like temperature
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure
   - Visibility distance
   - Sunrise and sunset times

## API Information

This app uses the OpenWeatherMap API:
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Features used**: Current weather data, geolocation support
- **Units**: Metric (Celsius, m/s, etc.)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

**Note**: Geolocation feature requires HTTPS in production or localhost for development.

## Troubleshooting

1. **API Key Issues**: Make sure you've replaced `'YOUR_API_KEY'` with your actual API key
2. **Geolocation Not Working**: Ensure you're running the app on `localhost` or `https://`
3. **CORS Issues**: Use an HTTP server instead of opening the file directly
4. **City Not Found**: Try using full city names or include country codes (e.g., "London,UK")

## License

This project is open source and available under the [MIT License](LICENSE).
