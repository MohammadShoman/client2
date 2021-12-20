import axios from "axios";

const Calendar = {
  namespace: true,
  state: {
    startDate: "",
    startDate2: "",
    weeklyHeaderDays: "",
    list: [],
    appointmentsList: [],
    type: "rooms",
    filters: "",
    dailyDate: "",
    lang: "ar",

  },

  mutations: {
    changeStartDate(state, payload) {
      return (state.startDate = payload.startDate);
    },
    changeStartDate2(state, payload) {
      return (state.startDate2 = payload.startDate2);
    },
    changeWeeklyHeaderDays(state, payload) {
      return (state.weeklyHeaderDays = payload.weeklyHeaderDays);
    },
    changeList(state, payload) {
      return (state.list = payload.list);
    },
    filterUsers(state, payload) {
      return (state.type = payload.type);
    },
    changeDailyDate(state, payload) {
      return (state.dailyDate = payload.dailyDate);
    },
    changeLang(state, payload) {
      return (state.lang = payload.lang);
    },
    changeAppointmentsList(state, payload) {
      return (state.appointmentsList = payload.appointmentsList);
    },
  },
  actions: {
    getStartDateToPage({ commit }, payload) {
      var curr = new Date(payload.date); // get current date
      // if day === 0 = sunday
      while (curr.getDay() != payload.day) {
        curr.setDate(curr.getDate() - 1);
      }
      return curr;
    },

    setLang(context, payload) {
      context.commit("changeLang", {
        lang: payload.lang,
      });
    },
    addDays(context, payload) {
      const newD = new Date(payload.date);
      newD.setDate(newD.getDate() + payload.num);
      if (payload.status === "change_startDate")
        context.commit("changeStartDate", { startDate: newD });
      else if (payload.status === "change_startDate2")
        context.commit("changeStartDate2", { startDate2: newD });
    },

    getFilters(context) {
      console.log(" type2 ", context.state.type);

      if (
        context.state.type === "doctor" ||
        context.state.type === "assistant"
      ) {
        axios
          .get(
            `http://localhost:8000/providers/${context.getters.getLanguage}/${context.state.type}`
          )
          .then((res) => {
            // console.log(res, "hhhhh");
            context.commit("changeList", { list: res.data.filters });
          });
      } else if (context.state.type === "rooms") {
        axios
          .get(`http://localhost:8000/rooms/${context.getters.getLanguage}`)
          .then((res) => {
            console.log(res, "aaaaaaa");

            context.commit("changeList", { list: res.data.filters });
          });
      } else if (context.state.type === "procedures") {
        axios
          .get(`http://localhost:8000/services/${context.getters.getLanguage}`)
          .then((res) => {
            context.commit("changeList", { list: res.data.filters });
          });
      }
    },

    getAppoinments(context) {
      if (
        context.state.type === "doctor" ||
        context.state.type === "assistant"
      ) {
        console.log(" type", context.state.type);

        axios
          .get(
            `http://localhost:8000/providersWeeklyAppointments/${context.getters.getLanguage}/${context.state.type}/${context.state.startDate}`
          )
          .then((res) => {
            console.log(res.data, context.state.type);
            context.commit("changeAppointmentsList", {
              appointmentsList: res.data,
            });
          });
      } else if (context.state.type === "rooms") {
        // console.log(" type", context.state.type);

        axios
          .get(
            `http://localhost:8000/roomsWeeklyAppointments/${context.getters.getLanguage}/${context.state.startDate}`
          )
          .then((res) => {
            console.log("rooms api" ,res.data, context.state.type);
            context.commit("changeAppointmentsList", {
              appointmentsList: res.data,
            });
          });
      } else if (context.state.type === "procedures") {
        // console.log(" type", context.state.type);

        axios
          .get(
            `http://localhost:8000/servicesWeeklyAppointments/${context.getters.getLanguage}/${context.state.startDate}`
          )
          .then((res) => {
            // console.log(res, "services");
            console.log(res.data, context.state.type);
            context.commit("changeAppointmentsList", {
              appointmentsList: res.data,
            });
          });
      }
    },
    getFilterData(context, payload) {
      context.commit("filterUsers", { type: payload.type });
    },
    getDailyDate(context, payload) {
      context.commit("changeDailyDate", { dailyDate: payload.dailyDate });
    },
    async workingHour(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/workingHours",
          payload
        );
        console.log(result);
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
        
      }
    },
  },
  getters: {
    getStartDate(state) {
      return state.startDate;
    },
    getStartDate2(state) {
      return state.startDate2;
    },
    getWeeklyHeaderDays(state) {
      return state.weeklyHeaderDays;
    },
    getAppoinment(state) {
      return state.list;
    },
    gettersFilter(state) {
      return state.appointmentsList;
    },
    getFilterData(state) {
      return state.type;
    },
    getDailyDate(state) {
      return state.dailyDate;
    },
    getLang(state) {
      return state.lang;
    },
  },
};
export default Calendar;
