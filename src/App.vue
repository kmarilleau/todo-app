<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <TodoList :todos="todos"/>
        <div class="todo-create-btn-container">
              <Modal/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Modal from "@/components/Modal";

export default {
  name: "App",
  components: {
    TodoList,
    Modal
  },
  data() {
    return {
      todos: [
        {
          _id: "1",
          title: "Title1",
          description: "Description1"
        },
        {
          _id: "2",
          title: "Title2",
          description: "Description2"
        },
        {
          _id: "3",
          title: "Title3",
          description: "Description3"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
$primary-color: rgb(100, 149, 237);
$primary-color-transparent: rgba(100, 149, 237, 0.4);
$accent-color: rgb(245, 245, 220);
$accent-color-transparent: rgba(245, 245, 220, 0.4);

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
    display: flex;
    flex-direction: column;
    width: 400px;
    min-height: 400px;
    background-color: $primary-color;
    border-radius: 5px;
  }

  &-create-btn-container {
    margin: 10px;
  }
}
</style>
