<template>
  <div class="todo-list" >
    <TodoItem
      v-for="todo in todos"
      :key="todo._id"
      :title="todo.title"
      :description="todo.description"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
</style>
