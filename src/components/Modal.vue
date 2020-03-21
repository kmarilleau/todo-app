<template>
  <div>
    <div @click="open" class="app-button is-accent-transparent">
      +
    </div>
    <div class="modal is-primary-transparent" :class="{'is-active': isOpen}">
      <div class="modal-content is-accent">
        <span @click="close" class="close">&times;</span>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
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
