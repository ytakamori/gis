// -----------------------------
// PostgreSQL操作
// -----------------------------


// 接続情報
const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "db-pjgis",
  password: "postgres",
  port: 5432,
});


// データ操作
client.connect();
client.query("SELECT * FROM system.user", (err, res) => {
  console.log(err, res);
  client.end();
});

// -----------------------------
// memo：実行 → node psql.js
// memo：追加、更新↓
// const query = {
//     text: "INSERT INTO member VALUES ($1, $2)",
//     values: [1, "山田太郎"],
//   };