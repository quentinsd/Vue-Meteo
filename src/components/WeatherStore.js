import { createStore } from "vuex";

const state = {
  location: "Reims",
  weather: {
    main: {
      temp: "",
      feels_like: "",
      temp_min: "",
      temp_max: "",
      pressure: "",
      humidity: "",
    },
    weather: [
      {
        main: "",
        description: "",
        icon: "",
      },
    ],
    wind: {
      speed: "",
      deg: "",
    },
  },
};

const mutation = {
  ADD_LOCATION: (state, location) => {
    state.location = location;
  },
  FETCH_WEATHER: (state, weather) => {
    state.weather = weather;
  },
};

const getters = {
  location: (state) => state.location,
  tempMax: (state) => Math.round(state.weather.main.temp_max),
  tempMin: (state) => Math.round(state.weather.main.temp_min),
  temp: (state) => Math.round(state.weather.main.temp),
  feelsLike: (state) => state.weather.main.feels_like,
  pressure: (state) => state.weather.main.pressure,
  humidity: (state) => state.weather.main.humidity,
  weatherCondition: (state) => state.weather.weather[0].description,
  iconId: (state) => state.weather.weather[0].id,
  cloud: (state) => state.weather.weather[0].main,
  windDeg: (state) => state.weather.wind.deg,
  windSpeed: (state) => state.weather.wind.speed,
};

const action = {
  addLocation: (WeatherStore, location) => {
    WeatherStore.commit("ADD_LOCATION", location);
  },
  fetchWeather: (WeatherStore, location) => {
    fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.VUE_APP_APIKEY}&lang=fr&units=metric`
    )
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          const error = (data && data.message) || res.statusText;
          return Promise.reject(error);
        } else {
          WeatherStore.commit("FETCH_WEATHER", data);
          WeatherStore.commit("ADD_LOCATION", location);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const WeatherStore = createStore({
  state: state,
  mutations: mutation,
  getters: getters,
  actions: action,
  strict: true,
});

global.WeatherStore = WeatherStore;
export default WeatherStore;
