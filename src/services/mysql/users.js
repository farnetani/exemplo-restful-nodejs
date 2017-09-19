const sha1 = require('sha1')

const users = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps // object destructor
        connection.query('SELECT id, email FROM users', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as Usuários', reject)
            return false // para não chegar no resolve e para não termos que usar else
          }
          // resolve({ pagination: { page: 1, results: results.length }, users: results })
          resolve({ users: results })
        })
      })
    },
    save: (email, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps // object destructor
        connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, sha1(password)], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao salvar a Usuário ${email}`, reject)
            return false // para não chegar no resolve e para não termos que usar else
          }
          // resolve({ pagination: { page: 1, results: results.length }, users: results })
          resolve({ user: {email, id: results.insertId } })  
        })
      })
    },
    update: (id, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps // object destructor
        connection.query('UPDATE users SET password  = ? WHERE id = ?', [sha1(password), id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao atualizar a Usuário de id ${id}`, reject)
            return false // para não chegar no resolve e para não termos que usar else
          }
          console.log(results)
          resolve({ user: { id }, affectedRows: results.affectedRows })
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps // object destructor
        connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Falha ao tentar excluir a Usuário de ID = ${id}`, reject)
            return false // para não chegar no resolve e para não termos que usar else
          }
          resolve({ message: 'Usuário excluída com sucesso!', affectedRows: results.affectedRows })
        })
      })
    }
  }
}

module.exports = users
