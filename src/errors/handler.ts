import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'
import chalk from 'chalk'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = async (error, request, response, next) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {}

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return response.status(400).json({ message: 'Falha na validação', errors })
  }

  console.log(chalk.bgRed.white.bold('An error ocurred:'))
  console.error(error)
  console.log(chalk.gray('-=-=-=-=-=-=-=-=-=-=-='))

  return response.status(500).json({ message: 'Internal server error' })
}

export default errorHandler
