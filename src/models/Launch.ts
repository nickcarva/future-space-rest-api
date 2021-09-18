import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm'

import LaunchServiceProvider from './LaunchServiceProvider'
import Mission from './Mission'
import Pad from './Pad'
import Rocket from './Rocket'
import LaunchProgram from './LaunchProgram'

export type StatusType = 'draft' | 'trash' | 'published'

@Entity('launches')
export default class Launch {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  url: string

  @Column('integer', { nullable: true })
  launch_library_id: number

  @Column('varchar')
  slug: string

  @Column('varchar')
  name: string

  @Column('timestamp', { nullable: true })
  net: Date

  @Column('timestamp', { nullable: true })
  window_start: Date

  @Column('timestamp', { nullable: true })
  window_end: Date

  @Column('boolean', { nullable: true })
  inhold: boolean

  @Column('boolean', { nullable: true })
  tbdtime: boolean

  @Column('boolean', { nullable: true })
  tbddate: boolean

  @Column('integer', { nullable: true })
  probability: number

  @Column('varchar', { nullable: true })
  holdreason: string

  @Column('varchar', { nullable: true })
  failreason: string

  @Column('varchar', { nullable: true })
  hashtag: string

  @Column('boolean', { nullable: true })
  webcast_live: boolean

  @Column('varchar', { nullable: true })
  image: string

  @Column('varchar', { nullable: true })
  infographic: string

  @Column('time with time zone')
  imported_t: Date

  @Column({
    type: 'enum',
    enum: ['draft', 'trash', 'published'],
    enumName: 'launchStatus',
    default: 'draft'
  })
  status: StatusType

  @Column('integer', { nullable: true })
  launch_service_provider_id: number

  @ManyToOne(() => LaunchServiceProvider, providers => providers.launches)
  @JoinColumn({ name: 'launch_service_provider_id' })
  launch_service_provider: LaunchServiceProvider

  @Column('integer', { nullable: true })
  rocket_id: number

  @ManyToOne(() => Rocket, rocket => rocket.launches)
  @JoinColumn({ name: 'rocket_id' })
  rocket: Rocket

  @Column('integer', { nullable: true })
  mission_id: number

  @ManyToOne(() => Mission, mission => mission.launches)
  @JoinColumn({ name: 'mission_id' })
  mission: Mission

  @Column('integer', { nullable: true })
  pad_id: number

  @ManyToOne(() => Pad, pad => pad.launches)
  @JoinColumn({ name: 'pad_id' })
  pad: Pad

  @OneToMany(() => LaunchProgram, launch_program => launch_program.launch, {
    onDelete: 'SET NULL'
  })
  launches_programs: LaunchProgram[]
}
