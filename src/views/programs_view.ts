import { format } from 'date-fns-tz'

import Program from '@models/Program'

import programsAgenciesView from './programs_agencies_view'

export default {
  render (program: Program) {
    return {
      id: program.id,

      url: program.url,
      name: program.name,
      description: program.description,
      image_url: program.image_url,

      start_date: program.start_date
        ? format(program.start_date, 'yyyy-MM-dd HH:mm:ss')
        : program.start_date,
      end_date: program.end_date
        ? format(program.end_date, 'yyyy-MM-dd HH:mm:ss')
        : program.end_date,

      info_url: program.info_url,
      wiki_url: program.wiki_url,

      agencies: program.programs_agencies && program.programs_agencies.length > 0
        ? programsAgenciesView.renderManyAgencies(program.programs_agencies)
        : []
    }
  },

  renderMany (programs: Program[]) {
    return programs.map(program => this.render(program))
  }
}
