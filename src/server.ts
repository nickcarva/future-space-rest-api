import 'dotenv/config'

import express from 'express'
import chalk from 'chalk'

import 'reflect-metadata'
import './database/connection'

import './schedules'

const app = express()

app.get('/', (request, response) => {
  return response.json({})
})

app.listen(3333, () => {
  console.log(chalk.bgGreen.black('Server is running on PORT 3333'))
})
