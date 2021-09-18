import PadLocation from '@models/PadLocation'

export default {
  render (location: PadLocation) {
    return {
      id: location.id,

      url: location.url,
      name: location.name,
      country_code: location.country_code,
      map_image: location.map_image,
      total_launch_count: location.total_launch_count,
      total_landing_count: location.total_landing_count
    }
  },

  renderMany (locations: PadLocation[]) {
    return locations.map(location => this.render(location))
  }
}
