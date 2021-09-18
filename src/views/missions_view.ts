import Mission from '@models/Mission'

import missionsOrbitsView from './missions_orbits_view'

export default {
  render (mission: Mission) {
    return {
      id: mission.id,

      launch_library_id: mission.launch_library_id,
      name: mission.name,
      description: mission.description,
      launch_designator: mission.launch_designator,
      type: mission.type,

      orbit: mission.mission_orbit
        ? missionsOrbitsView.render(mission.mission_orbit)
        : mission.mission_orbit
    }
  },

  renderMany (missions: Mission[]) {
    return missions.map(mission => this.render(mission))
  }
}
