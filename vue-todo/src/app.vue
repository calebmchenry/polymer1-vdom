<template>
  <div id="app">
    <h1>TODO:</h1>
    <input id="todoInput" type="text" v-model="input">
    <button @click="_addTodo">Add</button>
    <ol>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],

      input: ""
    };
  },
  methods: {
    _addTodo(e) {
      this.todos.push(this.input);
      this.input = "";
    }
  }
};
</script>

<style>
#app {
  border: 1px solid green;
}
</style>