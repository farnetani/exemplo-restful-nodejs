const test = require('ava')
const { connection, errorHandler } = require('./setup')
const users = require('../users')({ connection, errorHandler })
const create = () => users.save('user@test.com', '123456')

// Para zerar as tabelas
test.beforeEach(t => connection.query('TRUNCATE TABLE users'))
test.after.always(t => connection.query('TRUNCATE TABLE users'))

// always = mesmo que um teste falhe, execute isso

test('Lista de usuarios', async t => {
  await create()
  const list = await users.all()
  t.is(list.users.length, 1)
  t.is(list.users[0].email, 'user@test.com')
})

/*
test('Criação de usuario', async t => {
  const result = await create()
  t.is(result.category.name, 'user@test.com')
})
*/

test('Criação de usuario', async t => {
  const result = await users.save('user@test.com', '123456')
  t.is(result.user.email, 'user@test.com')
})

test('Atualizacao de usuario', async t => {
  await create()
  const updated = await users.update(1, '111111')
  t.is(updated.affectedRows, 1)
})

test('Remoção de usuario', async t => {
  await create()
  const removed = await users.del(1)
  t.is(removed.affectedRows, 1)
})
