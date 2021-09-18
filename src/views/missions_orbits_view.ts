import MissionOrbit from '@models/MissionOrbit'

export default {
  render (orbit: MissionOrbit) {
    return {
      id: orbit.id,

      name: orbit.name,
      abbrev: orbit.abbrev
    }
  },

  renderMany (orbits: MissionOrbit[]) {
    return orbits.map(orbit => this.render(orbit))
  }
}
