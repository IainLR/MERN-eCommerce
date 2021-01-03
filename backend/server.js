const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})
// all products
app.get('/api/products', (req, res) => {
  res.json(products)
})
// single product by :id
app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server running on port 5000'))
