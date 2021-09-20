import { Router } from 'express'

import LaunchesController from '@controllers/LaunchesController'
import ApiKeysController from '@controllers/ApiKeysController'

const routes = Router()

routes.get('/', LaunchesController.runningMessage)

routes.get(
  '/launchers/:launch_id',
  ApiKeysController.keyValidator,
  LaunchesController.show
)
routes.put(
  '/launchers/:launch_id',
  ApiKeysController.keyValidator,
  LaunchesController.update
)
routes.delete(
  '/launchers/:launch_id',
  ApiKeysController.keyValidator,
  LaunchesController.delete
)
routes.get(
  '/launchers',
  ApiKeysController.keyValidator,
  LaunchesController.index
)

export default routes
