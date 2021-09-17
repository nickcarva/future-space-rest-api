import 'dotenv/config'

import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({})
})

app.listen(3333, () => console.log("Server is running on PORT 3333"))