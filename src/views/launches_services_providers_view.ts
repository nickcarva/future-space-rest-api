import LaunchServiceProvider from '@models/LaunchServiceProvider'

export default {
  render (provider: LaunchServiceProvider) {
    return {
      id: provider.id,

      url: provider.url,
      name: provider.name,
      type: provider.type
    }
  },

  renderMany (providers: LaunchServiceProvider[]) {
    return providers.map(provider => this.render(provider))
  }
}
