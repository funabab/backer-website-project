import { Router } from 'express'

const ApiRoute = Router()

ApiRoute.get('/', (_req, res) => {
  res.send('Greetings')
})

export default ApiRoute
