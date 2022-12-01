const express = require('express')
const corsMiddleware = require('cors')
const PORT = process.env.PORT || 3001
const AppRouter = require('./routes/AppRouter')

const app = express()
app.use(corsMiddleware())
app.use(express.json())

app.use('/api', AppRouter)
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})