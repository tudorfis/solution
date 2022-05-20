<template>
  <div id="app">
    <h1>TO DO:</h1>
    <ToDo v-for="(todo, index) of todos" :key="index" />
  </div>
</template>

<script>
import ToDo from "./components/ToDo";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    ToDo,
  },
  computed: {
    ...mapGetters("api", ["todos"]),
  },
  mounted() {
    this.$store.dispatch("api/fetchTodos");
  },
};
</script>

<style>
#app {
  font-family: "Roboto", helvetica, arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  background: linear-gradient(
    135deg,
    rgba(65, 184, 131, 0.9),
    rgba(52, 73, 94, 0.9)
  );

  font-size: 1.5em;
}
</style>
