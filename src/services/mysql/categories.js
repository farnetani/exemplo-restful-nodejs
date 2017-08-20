const categories = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps // object destructor
        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            errorHandler(error, 'Falha ao listar as categorias', reject)
            return false // para não chegar no resolve e para não termos que usar else
          }
    // resolve({ pagination: { page: 1, results: results.length }, categories: results })
          resolve({ categories: results })
        })
      })
    },
    save: (name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps // object destructor
        connection.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao salvar a categoria ${name}`, reject)
            return false // para não chegar no resolve e para não termos que usar else
          }
    // resolve({ pagination: { page: 1, results: results.length }, categories: results })
          resolve({ categories: name, id: results.insertId })  // insertId = pega o ultimo id
        })
      })
    },
    update: (id, name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps // object destructor
        connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao atualizar a categoria ${name}`, reject)
            return false // para não chegar no resolve e para não termos que usar else
          }
          resolve({ categories: name, id: id })
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps // object destructor
        connection.query('DELETE FROM categories WHERE id = ?', [id], (error, results) => {
          if (error) {
            errorHandler(error, `Falha ao tentar excluir a categoria de ID = ${id}`, reject)
            return false // para não chegar no resolve e para não termos que usar else
          }
          resolve({ message: 'Categoria excluída com sucesso!' })
        })
      })
    }
  }
}

module.exports = categories
