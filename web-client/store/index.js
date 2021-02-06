import axios from "axios";

const initState = () => ({
  message: "init"
})

export const state = initState;

export const mutations = {
  setMessage(state, message) {
    state.message = message;
  },
  reset(state) {
    Object.assign(state, initState());
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    const message = await axios.get("http://localhost:5000/api/home");
    commit("setMessage", message.data);

    await dispatch("tricks/fetchTricks")
  }
}
