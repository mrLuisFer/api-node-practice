const express = require('express')
const app = express()
const morgan = require('morgan')

const expressRoutes = require('./routes/expressRoutes')

const pathJoin = require('./utils/pathJoin')

app.set('view engine', 'ejs')
// Middlewares
app.use(express.json())
app.use(express.static(pathJoin('../public')))
app.use(morgan('dev'))

app.use('/favicon.ico', express.static('/images/favicon.ico'));

	// APP Routes
app.use(expressRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log(`Server is on port:${PORT}`)
