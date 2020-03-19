<template>
  <div>
    <div @click="isOpen = true" class="app-button is-accent-transparent">
      +
    </div>
    <div class="modal is-primary-transparent" :class="{'is-active': isOpen}">
      <div class="modal-content is-accent">
        <span @click="isOpen = false" class="close">&times;</span>
        <form class="app-form">
          <div class="form-control">
            <label class="label">Title</label>
            <input
              v-model="form.title"
              class="form-input"
              type="text
            ">
          </div>
          <div class="form-control">
            <label class="label">Description</label>
            <input
              v-model="form.description"
              class="form-input"
              type="text"
            >
          </div>
          <button
            @click="createTodo"
            class="app-button is-primary"
            type="button"
          >
            &#10003;
          </button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      form: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    createTodo () {
      
    }
  }
};
</script>

<style lang="scss">
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
  }

  &-button {
    font-size: 30px;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
  }
}

.close {
  float: right;
  font-size: 28px;
  font-weight: bold;
  line-height: 8px;

  &:hover {
    cursor: pointer;
  }
}

.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;

  &.is-active {
    display: block;
  }

  &-content {
    text-align: left;
    border-radius: 5px;
    margin: 15% auto;
    padding: 20px;
    width: 80%;
  }
}
</style>
