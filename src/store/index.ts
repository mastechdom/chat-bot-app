import messageHistory from "../models/messageHistory";
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    messages: [
    {
      text: "How are you ?",
      sender: "Azhar",
      time:"03:40:45",
      date:"08/02/2021",
    },
    {
      text: "How are you ?",
      sender: "mas",
      time:"03:40:45",
      date:"08/02/2021",
    },
    {
      text: "How are you ?",
      sender: "Azhar",
      time:"03:40:45",
      date:"08/02/2021",
    }
    ] as messageHistory[],
    userName: "",
  },
  getters: {
    messages: state => {
      return state.messages;
    },
    userName: state => {
      return state.userName;
    },
  },
  mutations: {
    setUser (state, newName) {
      state.userName = newName;
      console.log(state.userName);
    },
    setMessage (state, newMessage) {
      newMessage.sender = state.userName;
      axios.post("http://localhost:2410/messages",newMessage)
          .then((resp)=>{
          console.log("done");
        })
      // state.messages.push(newMessage)
    },
    setState (state, messages) {
      state.messages = messages;
    }
  },
  actions: {
    
  },
  modules: {},
});
