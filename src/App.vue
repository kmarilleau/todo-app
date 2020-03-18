<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <TodoList/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: "App",
  components: {
    TodoList
  }
};
</script>

<style lang="scss">
$primary-color: cornflowerblue;
$secondary-color: beige;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
  margin-top: 60px;
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &-container {
    width: 400px;
    min-height: 400px;
    background-color: $primary-color;
    border-radius: 5px;
  }
}
</style>
