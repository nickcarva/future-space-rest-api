import Rocket from '@models/Rocket'

import rocketsConfigurationsView from './rockets_configurations_view'

export default {
  render (rocket: Rocket) {
    return {
      id: rocket.id,

      configuration: rocket.rocket_configuration
        ? rocketsConfigurationsView.render(rocket.rocket_configuration)
        : rocket.rocket_configuration
    }
  },

  renderMany (rockets: Rocket[]) {
    return rockets.map(rocket => this.render(rocket))
  }
}
