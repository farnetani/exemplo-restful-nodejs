const jwt = require('jsonwebtoken')

const jwtMiddleware = (deps) => {

  return async(req, res, next) => {

    // console.log(req.href())

    if (!deps.exclusions.includes(req.href())) {

      const token = req.headers['x-access-token']

      if (!token) {
        res.send(403, {
          error: 'Token não fornecido'
        })
        return false
      }

      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
          res.send(403, {
            error: 'Falha ao auntenticar o token'
          })
        } else {
          req.decoded = decoded
        }
      })
    }
    // Caso contrário o next será executado e nenhuma verificação de token será feita.
    next()
  }
}

module.exports = jwtMiddleware
