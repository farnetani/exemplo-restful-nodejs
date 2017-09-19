const sha1 = require('sha1')
const jwt = require('jsonwebtoken')

const auth = deps => {
  return {
    authenticate: (email, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps // object destructor
        const queryString = 'SELECT id, email FROM users WHERE email = ? AND password = ?'
        const queryData = [email, sha1(password)]

        connection.query(queryString, queryData, (error, results) => {
          if (error || !results.length) {
            errorHandler(error, 'Falha ao localizar o usuário!', reject)
            return false // para não chegar no resolve e para não termos que usar else
          }
          // resolve({ pagination: { page: 1, results: results.length }, users: results })
          const { email, id } = results[0] // Para capturar o email e id

          // 3 Informações: informações que quero enviar para o token, a palavra chave, e o tempo em segundos de expiração
          const token = jwt.sign({email, id}, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24})

          console.log(token)

          resolve({ token: token })
        })
      })
    }    
  }
}

module.exports = auth
