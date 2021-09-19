import Agency from '@models/Agency'
import ProgramAgency from '@models/ProgramAgency'

export default {
  renderAgency (agency: Agency) {
    return {
      id: agency.id,

      url: agency.url,
      name: agency.name,
      type: agency.type
    }
  },

  renderManyAgencies (programs_agencies: ProgramAgency[]) {
    return programs_agencies.map(program_agency => this.render(program_agency.agency))
  }
}
