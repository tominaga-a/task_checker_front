import { defineStore } from 'pinia'
import api from '../api/axios'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([]);

  async function fetchAllTasks () {
    try{
      const response = await api.get('/tasks')
      tasks.value = response.data;/*サーバーからのレスポンスにはレスポンスヘッダーやリクエストの設定なども含まれる⇒データのみを取り出すため.dataをつける*/
    }catch(error){
      console.log('タスクデータの取得ができませんでした', error);
    }
  }
  return { tasks, fetchAllTasks }
})
