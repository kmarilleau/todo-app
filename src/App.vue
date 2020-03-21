<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container is-primary">
        <TodoList :todos="todos"/>
        <div class="todo-create-btn-container">
              <TodoCreate @formSubmitted="createTodo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";

export default {
  name: "App",
  components: {
    TodoList,
    TodoCreate
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    createTodo(todo) {
      this.todos.push(todo);
    }
  }
};
</script>

<style lang="scss">
$primary-color: rgb(236, 236, 236);
$primary-color-transparent: rgba(236, 236, 236, 0.4);
$accent-color: rgb(113, 148, 189);
$accent-color-transparent: rgba(113, 148, 189, 0.4);
$error-color: rgb(250, 65, 65);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.app {
  &-form {
    .label {
      display: block;
      font-size: 16px;
      font-weight: bold;
    }

    .form {
      &-input {
        padding: 10px;
        font-size: 17px;
      }
      &-control {
        margin-bottom: 10px;
      }
    }

    &-last {
      margin-bottom: 0;
    }
  }

  &-button {
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
  }

  &-error {
    color: $error-color;
  }
}

.is {
  &-primary {
    background-color: $primary-color;
    color: $accent-color;

    &-transparent {
      background-color: $primary-color-transparent;
      color: $accent-color;
    }
  }
  &-accent {
    background-color: $accent-color;
    color: $primary-color;

    &-transparent {
      background-color: $accent-color-transparent;
      color: $primary-color;

      &:hover {
        cursor: pointer;
        background-color: $accent-color;
      }
    }
  }
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
    border-radius: 5px;
  }

  &-create-btn-container {
    margin: 10px;
  }
}
</style>
