import express from 'express'
import { routers } from './src/routers/index';
import cors from 'cors'

const app: express.Application = express()

const port = 5000

app.use(cors())

app.use(routers)

app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})