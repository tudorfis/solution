<template>
  <div class="todo">
    <input type="text" v-model="message" :class="{ green: completed }" />
    <span v-if="completed" class="tick">✓</span>
    <button @click="completed = !completed" class="toggle">
      Toggle completed
    </button>
  </div>
</template>

<script>
const data = {
  message: "",
  completed: false,
};

export default {
  data() {
    return { ...data };
  },
};
</script>

<style scoped>
.green {
  color: #FFF;
  background-color: #42b983;
}

.toggle {
  position: absolute;
  right: -20px;
  top: 60px;
}

.tick {
  position: absolute;
  right: 0px;
  top: 20px;
  color: #green;
}

.todo {
  position: relative;
  margin-top: 40px;
  width: 500px;
}

input {
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  margin-top: 10px;
}

input[type="text"],
input[type="password"] {
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

input[type="text"]:hover,
input[type="password"]:hover {
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);
  transition: 0.3s box-shadow;
}
</style>