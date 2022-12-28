<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'custom-modal',
  mixins: [toggleMixin]
}
</script>

<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.7);
  }

  .modal__content {
    width: 300px;
    padding: 16px;
    background: white;
  }
</style>