const test = require('ava')
const { connection, errorHandler } = require('./setup')
const users = require('../users')({ connection, errorHandler })
const auth = require('../auth')({ connection, errorHandler })
const create = () => users.save('user@test.com', '123456')

// Para zerar as tabelas
test.beforeEach(t => connection.query('TRUNCATE TABLE users'))
test.after.always(t => connection.query('TRUNCATE TABLE users'))

// always = mesmo que um teste falhe, execute isso

test('Login de usuário - sucesso', async t => {
  await create()
  const result = await auth.authenticate('user@test.com', '123456')
  t.not(result.token, null)
  t.not(result.token.length, 0)
})

test('Login de usuário - falha', async t => {
  await create()
  const promise = auth.authenticate('user@test.com', 'senhaerrada')

  const error = await t.throws(promise) // O throws servirá para capturar o reject
  t.is(error.error, 'Falha ao localizar o usuário!')
})
