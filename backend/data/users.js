import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Test Admin',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mister Doe',
    email: 'JDoe@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sara Smith',
    email: 'Sara@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
