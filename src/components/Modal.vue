<template>
  <div>
    <div @click="isOpen = true" class="app-button">
      +
    </div>
    <div class="modal" :class="{'is-active': isOpen}">
      <div class="modal-content">
        <span @click="isOpen = false" class="close">&times;</span>
        <p>Modal Window</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
};
</script>

<style lang="scss">
$primary-color: rgb(100, 149, 237);
$primary-color-transparent: rgba(100, 149, 237, 0.4);
$accent-color: rgb(245, 245, 220);
$accent-color-transparent: rgba(245, 245, 220, 0.4);

.app-button {
  font-size: 50px;
  padding: 5px;
  border-radius: 5px;
  background-color: $accent-color-transparent;
  color: $primary-color;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: $accent-color;
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
  background-color: $primary-color-transparent;

  &.is-active {
    display: block;
  }

  &-content {
    background-color: $accent-color;
    border-radius: 5px;
    margin: 15% auto;
    padding: 20px;
    width: 80%;
  }
}
</style>
