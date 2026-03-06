import { defineStore } from 'pinia'
import api from '../api/axios'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([]);
  const filteredTasks = ref([]); /*この変数にフィルタリングしたデータを保存していく*/

  async function fetchAllTasks () {
    try{
      const response = await api.get('/tasks')
      tasks.value = response.data;/*サーバーからのレスポンスにはレスポンスヘッダーやリクエストの設定なども含まれる⇒データのみを取り出すため.dataをつける*/
    }catch(error){
      console.log('タスクデータの取得ができませんでした', error);
    }
  }
  return { tasks, fetchAllTasks }

 async function filterTasks(genreId) {
   const numericGenreId = Number(genreId);
/*genreIdは引数。Taskモデル（schema参照）*/
   if(numericGenreId === 0) {
      filteredTasks.value = [...tasks.value];
    } else {
      filteredTasks.value = tasks.value.filter(task => numericGenreId === task.genreId)
    }
  }
  return { tasks, filteredTasks, fetchAllTasks,filterTasks }
})