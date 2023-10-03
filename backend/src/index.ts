import express from 'express'
import loader from './loader'

const port = 3001

const startServer = () => {
  const app = express()

  const server = app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`)
  })

  loader(app)

  process.on('SIGINT', () => {
    server.close(() => process.exit(0))
  })
}

startServer()
