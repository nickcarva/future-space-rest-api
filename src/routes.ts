import { Router } from 'express'

import LaunchesController from '@controllers/LaunchesController'

const routes = Router()

routes.get('/', LaunchesController.runningMessage)

routes.get('/launchers/:launch_id', LaunchesController.show)
routes.put('/launchers/:launch_id', LaunchesController.update)
routes.delete('/launchers/:launch_id', LaunchesController.delete)
routes.get('/launchers', LaunchesController.index)

export default routes
