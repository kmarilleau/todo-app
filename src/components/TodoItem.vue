<template>
    <div class="todo-item">
        <div class="todo-item-content">
          <div class="todo-item-content-title">
            Test
          </div>
          <div class="todo-item-content-description">
            Content of todo
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "TodoItem"
};
</script>

<style scoped lang="scss">
$primary-color: cornflowerblue;
$secondary-color: beige;

.todo {
  &-item {
    background-color: $secondary-color;
    min-height: 50px;
    margin: 10px;
    padding: 10px;
    color: $primary-color;
    border-radius: 5px;
    font-size: 23px;

    &-content {
      &-title {
        font-weight: bold;
      }
      &-description {
        font-size: 19px;
      }
    }
  }
}
</style>
