const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(
  "mongodb+srv://esterdev:esterdev@omnistack-cjkv9.mongodb.net/semana09?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json())
app.use(routes)

app.listen(3333)