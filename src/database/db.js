// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer oprações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utilizar o objeto de banco de dados para nossas operações
// db.serialize(() => {
//   // // com comandos SQL eu vou:

//   // // 1 -  Criar uma tabela
//   // db.run(`
//   //   CREATE TABLE IF NOT EXISTS places (
//   //     id INTEGER PRIMARY KEY AUTOINCREMENT,
//   //     image TEXT,
//   //     name TEXT,
//   //     address TEXT,
//   //     address2 TEXT,
//   //     state TEXT,
//   //     city TEXT,
//   //     items TEXT
//   //   );
//   // `)

//   // // 2 - Inserir dados na tabela
//   // const query = `
//   //   INSERT INTO places (
//   //     image,
//   //     name,
//   //     address,
//   //     address2,
//   //     state,
//   //     city,
//   //     items
//   //   ) VALUES (?,?,?,?,?,?,?);
//   // `
//   // const values = [
//   //   "https://images.unsplash.com/photo-1589526174056-2d6960ead9a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//   //   "Mercado do seu Zé",
//   //   "Santa Rita",
//   //   "Nº 482",
//   //   "São Paulo",
//   //   "Aparecida",
//   //   "Óleo de Cozinha"
//   // ]

//   // function afterInsertData(err) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }

//   //   console.log("Cadastrado com sucesso")
//   //   console.log(this)
//   // }
  
//   // db.run(query, values, afterInsertData)

//   // // 3 - Consultar os dados da tabela
//   // db.all(`SELECT name FROM places`, function(err, rows) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }

//   //   console.log("Aqui estão seus registros: ")
//   //   console.log(rows)
//   // })

//   // // 4 - Deletar um dado da tabela
//   // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//   //   if (err) {
//   //     return console.log(err)
//   //   }

//   //   console.log("Registro deletado com sucesso")
//   // })


// })


