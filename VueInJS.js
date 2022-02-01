const app = Vue.createApp({
  data() {
    return {
      abcd: "Computed Properties",

      firstname: "Harry",
      lastname: "Potter",
      birthyear: "1999",
    };
  },
  computed: {
    getfullname: function () {
      return this.firstname + " " + this.lastname;
    },
  },
});

app.mount("#app");
