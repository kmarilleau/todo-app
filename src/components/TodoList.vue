<template>
  <div class="todo-list" >
    <TodoItem
      v-for="todo in todos"
      :key="todo._id"
      :_id="todo._id"
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

<style scoped lang="scss">
.todo-list {
  flex: 1;
}
</style>
