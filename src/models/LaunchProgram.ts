import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import Launch from './Launch'
import Program from './Program'

@Entity('launches_programs')
export default class LaunchProgram {
  @PrimaryColumn('uuid')
  launch_id: string

  @PrimaryColumn('integer')
  program_id: number

  @ManyToOne(() => Launch, launch => launch.launches_programs, {
    primary: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'launch_id' })
  launch: Launch

  @ManyToOne(() => Program, program => program.launches_programs, {
    primary: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'program_id' })
  program: Program
}
