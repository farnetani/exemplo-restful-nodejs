const db = require('../services/mysql')

const routes = (server) => {
  server.get('categoria', async (req, res, next) => {
    // console.log(db.categories())
    try {
      res.send(await db.categories().all())
    } catch (error) {
      res.send(error)
    }
    next()
    // Promisses
    // db.categories().all().then(categories => {
    //   res.send(categories)
    //
    // }).catch(error => {
    //   res.send(error)
    //
    // })
  })

  server.post('categoria', async (req, res, next) => {
    // console.log(req) // Para debugar
    const { name } = req.params
    // var name = req.params.name
    // var id = req.params.id
    // Object destructure
    // const { name, id } = req.params //ele vai extrair deste params estas propriedades

    try {
      res.send(await db.categories().save(name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.put('categoria', async (req, res, next) => {
    const { id, name } = req.params
    try {
      res.send(await db.categories().update(id, name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.del('categoria', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.categories().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.get('/', (req, res, next) => {
    res.send('Enjoy the silencex...')
    next()
  })
}

module.exports = routes
