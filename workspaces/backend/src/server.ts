import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import { setupRoutes } from '../routes'
import path from 'path'

dotenv.config({
  path: path.join(__dirname, '..', '.env.local'),
})

const PORT = process.env.PORT || 5001

const app = express()
const server = http.createServer(app)

setupRoutes(app)

server.listen(PORT, () => {
  console.log('Server started on port %d', PORT)
})
