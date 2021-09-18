import { format, utcToZonedTime } from 'date-fns-tz'

import timeZone from '@utils/timeZone'

import Launch from '@models/Launch'

import launchesServicesProvidersView from './launches_services_providers_view'

export default {
  render (launch: Launch) {
    return {
      id: launch.id,

      url: launch.url,
      launch_library_id: launch.launch_library_id,
      slug: launch.slug,
      name: launch.name,

      net: launch.net
        ? format(launch.net, 'yyyy-MM-dd HH:mm:ss')
        : launch.net,
      window_end: launch.window_end
        ? format(launch.window_end, 'yyyy-MM-dd HH:mm:ss')
        : launch.window_end,
      window_start: launch.window_start
        ? format(launch.window_start, 'yyyy-MM-dd HH:mm:ss')
        : launch.window_start,

      inhold: launch.inhold,
      tbdtime: launch.tbdtime,
      tbddate: launch.tbddate,
      probability: launch.probability,
      holdreason: launch.holdreason,
      failreason: launch.failreason,
      hashtag: launch.hashtag,

      launch_service_provider: launch.launch_service_provider
        ? launchesServicesProvidersView.render(launch.launch_service_provider)
        : launch.launch_service_provider,

      webcast_live: launch.webcast_live,
      image: launch.image,
      infographic: launch.infographic,

      imported_t: format(utcToZonedTime(launch.imported_t, timeZone), 'dd/MM/yyyy HH:mm:ss', { timeZone }),
      status: launch.status
    }
  },

  renderMany (launches: Launch[]) {
    return launches.map(launch => this.render(launch))
  }
}
