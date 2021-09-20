import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany
} from 'typeorm'

import LaunchProgram from './LaunchProgram'
import ProgramAgency from './ProgramAgency'

@Entity('programs')
export default class Program {
  @PrimaryColumn('integer')
  id: number

  @Column('varchar')
  url: string

  @Column('varchar')
  name: string

  @Column('varchar', { nullable: true })
  description: string

  @Column('varchar', { nullable: true })
  image_url: string

  @Column('timestamp', { nullable: true })
  start_date: Date

  @Column('timestamp', { nullable: true })
  end_date: Date

  @Column('varchar', { nullable: true })
  info_url: string

  @Column('varchar', { nullable: true })
  wiki_url: string

  @OneToMany(() => LaunchProgram, launch_program => launch_program.program, {
    onDelete: 'SET NULL'
  })
  launches_programs: LaunchProgram[]

  @OneToMany(() => ProgramAgency, program_agency => program_agency.program, {
    onDelete: 'SET NULL'
  })
  programs_agencies: ProgramAgency[]
}
