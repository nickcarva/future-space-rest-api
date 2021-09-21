/* eslint-disable promise/param-names */
import schedule from 'node-schedule'
import chalk from 'chalk'

import { launchesApi } from '@config/launchesApi'

import { saveLaunchesFromImport } from '@controllers/LaunchesController'

schedule.scheduleJob('30 6 * * *', async () => {
  console.log(chalk.green('Launches imports started...'))
  console.log(chalk.whiteBright(new Date()))
  console.log(chalk.gray('-=-=-=-=-=-=-=-=-=-=-='))

  const LAUNCHES_PER_PAGE = 100
  const MAX_IMPORTS = 2000

  let importedLaunchesCount = 0
  let nextQueryData: string

  while (true) {
    if ((importedLaunchesCount + LAUNCHES_PER_PAGE) > MAX_IMPORTS) break

    const query = nextQueryData || `?limit=${LAUNCHES_PER_PAGE}&offset=0`

    const data = await launchesApi.get(query)
      .then(res => res.data)
      .catch(err => {
        console.log(chalk.bgRed.white.bold(`Launches imports error: ${query}`))
        console.log({
          status: err.response.status,
          statusText: err.response.statusText,
          data: err.response.data
        })

        return {
          error: true
        }
      })

    const nextUrl = data.next

    if (data.error || !nextUrl) break

    await saveLaunchesFromImport(data.results)

    nextQueryData = `?${nextUrl.split('?')[1]}`

    importedLaunchesCount += LAUNCHES_PER_PAGE

    console.log(chalk.bgGreen.black(`Imports count: ${importedLaunchesCount}`))

    // wait 300 seconds -> 5 minutes
    await new Promise(res => setTimeout(res, 300000))
  }

  // Without any errors: about 100 minutes to finish

  console.log(chalk.gray('-=-=-=-=-=-=-=-=-=-=-='))
  console.log(chalk.whiteBright(new Date()))
  console.log(chalk.green('Launches imports ended.'))
})
