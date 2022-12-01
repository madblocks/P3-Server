const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))

app.get('/', (req, res) => res.json({message: 'Server Up'}))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
