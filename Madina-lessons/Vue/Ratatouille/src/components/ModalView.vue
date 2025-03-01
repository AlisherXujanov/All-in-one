<script setup>

const emit = defineEmits(['close-modal'])

</script>

<!--
  <p>...</p>
  <ModalView>...</ModalView>
 -->
<template>
  <div class="modal-view">
    <button @click="emit('close-modal')">&times;</button>
    <div class="modal-content">
      <h1>Modal Content</h1>
      <slot>
        <!-- external items to insert -->
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  @include flex();

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    color: black;
  }
}
</style>
