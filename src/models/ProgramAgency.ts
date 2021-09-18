import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import Program from './Program'
import Agency from './Agency'

@Entity('programs_agencies')
export default class ProgramAgency {
  @PrimaryColumn('integer')
  program_id: string

  @PrimaryColumn('integer')
  agency_id: number

  @ManyToOne(() => Program, program => program.programs_agencies, {
    primary: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'program_id' })
  program: Program

  @ManyToOne(() => Agency, agency => agency.programs_agencies, {
    primary: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'agency_id' })
  agency: Agency
}
