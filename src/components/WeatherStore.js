import { createStore } from "vuex";

const state = {
  location: "Reims",
  weather: {},
};

const mutation = {
  ADD_LOCATION: (state, location) => {
    state.location = location;
  },
};

const getters = {
  location: (state) => state.location,
};

const action = {
  addLocation: (WeatherStore, location) => {
    WeatherStore.commit("ADD_LOCATION", location);
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
