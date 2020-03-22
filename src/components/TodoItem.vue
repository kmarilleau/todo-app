<template>
    <div v-if="!editMode" class="todo-item is-accent">
        <div class="todo-item-content">
          <div class="todo-item-content-title">
            {{ title }}
          </div>
          <div class="todo-item-content-description">
            {{ description }}
          </div>
        </div>
        <div class="app-button-container">
          <button
            @click="editMode = true"
            class="app-button is-warning"
          >
            &#x270F;
          </button>
          <button
            @click="deleteTodo"
            class="app-button is-danger"
          >
            &#x1F5D1;
          </button>
        </div>
    </div>
    <div v-else class="todo-item is-accent">
      <form class="app-form">
        <div class="form-control">
          <label class="label">Title</label>
          <input
            v-model="todo.title"
            class="form-input"
            type="text
          ">
        </div>
        <div class="form-control form-control-last">
          <label class="label">Description</label>
          <textarea
            v-model="todo.description"
            class="form-input"
            cols="19"
            row="4"
          >
          </textarea>
        </div>
      </form>
      <div class="app-button-container">
        <button
          @click.prevent="cancelUpdateTodo"
          class="app-button is-danger"
        >
           &#x1F6AB;
        </button>
        <button
          @click.prevent="updateTodo"
          class="app-button is-success"
        >
          &#x1F4BE;
        </button>
      </div>
    </div>
</template>

<script>
import store from "@/store";

export default {
  props: {
    _id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      editMode: false,
      todo: {
        _id: this._id,
        title: this.title,
        description: this.description
      }
    };
  },
  methods: {
    updateTodo() {
      store.dispatch("updateTodo", { ...this.todo });
      this.editMode = false;
    },
    cancelUpdateTodo() {
      this.todo = { title: this.title, description: this.description };
      this.editMode = false;
    },
    deleteTodo() {
      store.dispatch("deleteTodo", this.todo._id);
    }
  }
};
</script>

<style scoped lang="scss">
.app {
  &-button {
    font-size: 12px;

    &-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
.todo {
  &-item {
    display: flex;
    justify-content: space-between;
    min-height: 50px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    font-size: 23px;

    &-content {
      flex-grow: 1;
      text-align: left;
      margin-bottom: 10px;
      &-title {
        font-weight: bold;
      }
      &-description {
        font-size: 15px;
      }
    }
  }
}
</style>
