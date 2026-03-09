
import { createApp } from 'vue'/*Vue本体からアプリで作る関数を取りよせ*/
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'/*ルートコンポーネントの読み込み*/
import { Modal } from '@kouts/vue-modal'/*モーダルの公開されているコンポーネント*/
import '@kouts/vue-modal/dist/vue-modal.css'/*モーダルのCSS（見た目部分）　別々にないっているため二つインポート*/
import './assets/main.css'/*main.css（全体のCSS）ファイル*/

const app = createApp(App)
app.component('Modal',Modal);
app.use(createPinia())
app.use(router)
app.mount('#app')
/*#appはindex.html内にid=appで定義されたappのこと。
このマウントにより.vueファイルに書き込まれたtemplateたちが反映される*/

/*
最初createApp(App).mount('#app') だったが、Modalをアプリ全体で使いたくなったためこうなった
mountの前にModalをグローバル登録（どこでも使えるように）しておく必要がある
⇒mountした瞬間に描写を開始すると、Mondalが見つからないエラーが起きる
同じモーダルでも、複数コンポーネントで使わないならいらない設定*/
