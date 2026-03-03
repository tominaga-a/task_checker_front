const express = require("express")/*expressを読み込み使えるように
(Node.jsでモジュールを使う時の基本の書き方*/
const app = express();/*expressを使ってアプリ本体（サーバーの入れ物)をappに作成*/
app.use(express.json());/*ﾘｸｴｽﾄのJSON文を読み取ってreq.bodyに入れる*/


app.listen(3000, () => {
  console.log("listening on localhost 3000")
})