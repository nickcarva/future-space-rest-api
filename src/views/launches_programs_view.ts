import Program from '@models/Program'
import LaunchProgram from '@models/LaunchProgram'

import programsView from './programs_view'

export default {
  renderProgram (program: Program) {
    const formattedProgram = programsView.render(program)

    return formattedProgram
  },

  renderManyPrograms (launches_programs: LaunchProgram[]) {
    return launches_programs.map(launch_program => this.renderProgram(launch_program.program))
  }
}
