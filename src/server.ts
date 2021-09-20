import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import chalk from 'chalk'

import 'express-async-errors'

import 'reflect-metadata'
import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'

import './schedules'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use(errorHandler)

app.listen(3333, () => {
  console.log(chalk.bgGreen.black('Server is running on PORT 3333'))
})
