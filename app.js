const app = Vue.createApp({
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
      input: "",
    };
  },
  methods: {
    addTask(e) {
      e.preventDefault();
      this.tasks.push({ text: this.input, done: false });
      this.input = "";
    },
    toggleDone(idx) {
      const task = this.tasks[idx];
      task.done = !task.done;
    },
    remove(idx) {
      this.tasks.splice(idx, 1);
    },
  },
  watch: {
    tasks: {
      handler(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      },
      deep: true,
    },
  },
});

app.mount("#app");
