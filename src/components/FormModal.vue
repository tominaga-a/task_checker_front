<script setup>
import { computed } from 'vue'
import GenreBody from './GenreBody.vue';
import TaskBody from './TaskBody.vue';

const props = defineProps({
  body: String, 
 
})

const showModal = computed(() => props.modelValue);

const component = computed(() => {
  return props.body === 'taskBody' ? TaskBody : GenreBody
})



</script>

<template>
    <dialog v-if="showModal">
  <Modal v-model="showModal">
    <component :is="component" />
  </Modal>
  </dialog>
</template>

<style>
.vm {
  height:75vh;
  padding: 2vw 10vw;
  text-align: center;
  overflow-y: auto;
}
</style>