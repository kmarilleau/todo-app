<template>
  <div class="todo-list">
    <TodoItem/>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: "TodoList",
  components: {
    TodoItem
  }
};
</script>

<style>
</style>
