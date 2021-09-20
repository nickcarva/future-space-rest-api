import { NextFunction, Request, Response } from 'express'

export default {
  async keyValidator (request: Request, response: Response, next: NextFunction) {
    const key = request.header('api-key')

    if (!key || key !== process.env.API_KEY) {
      return response.status(401).json({ message: 'Access denied' })
    }

    next()
  }
}
