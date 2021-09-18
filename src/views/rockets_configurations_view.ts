import RocketConfiguration from '@models/RocketConfiguration'

export default {
  render (configuration: RocketConfiguration) {
    return {
      id: configuration.id,

      launch_library_id: configuration.launch_library_id,
      url: configuration.url,
      name: configuration.name,
      family: configuration.family,
      full_name: configuration.full_name,
      variant: configuration.variant
    }
  },

  renderMany (configurations: RocketConfiguration[]) {
    return configurations.map(configuration => this.render(configuration))
  }
}
