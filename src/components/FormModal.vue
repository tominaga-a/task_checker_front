<script setup>
import { computed } from 'vue'
import GenreBody from './GenreBody.vue';
import TaskBody from './TaskBody.vue';
const props = defineProps({/*defineProps：script専用API*/
  body: String /*親からbodyというpropsを受け取る*/
})

const component = computed(() => { /*componentは新しく作っている変数名*/
  return props.body === 'taskBody' ? TaskBody : GenreBody
})/*props.bodyの値に応じて表示するｺﾝﾎﾟｰﾈﾝﾄを選んで返す”計算プロパティ”*/
/*taskBodyならTaskBody、それ以外ならGenreBodyｺﾝﾎﾟｰﾈﾝﾄを返す*/
/*↑というconputedの作業をcomponentに入れ込んでる*/

const emit = defineEmits(['close-modal'])
const closeModal = () => {
  emit('close-modal')
}

</script>

<template>
  <Modal v-model="showModal">
     <component :is="component" @close-modal="closeModal" />
  </Modal>
</template>

<style>
.vm {
  height:75vh;
  padding: 2vw 10vw;
  text-align: center;
  overflow-y: auto;
}
</style>