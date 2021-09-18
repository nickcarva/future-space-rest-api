import Pad from '@models/Pad'

import padsLocationsView from './pads_locations_view'

export default {
  render (pad: Pad) {
    return {
      id: pad.id,

      url: pad.url,
      agency_id: pad.agency_id,
      name: pad.name,
      info_url: pad.info_url,
      wiki_url: pad.wiki_url,
      map_url: pad.map_url,

      latitude: pad.latitude,
      longitude: pad.longitude,

      location: pad.pad_location
        ? padsLocationsView.render(pad.pad_location)
        : pad.pad_location,

      map_image: pad.map_image,
      total_launch_count: pad.total_launch_count
    }
  },

  renderMany (pads: Pad[]) {
    return pads.map(pad => this.render(pad))
  }
}
