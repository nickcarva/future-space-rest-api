import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne
} from 'typeorm'

import Launch from './Launch'
import MissionOrbit from './MissionOrbit'

@Entity('missions')
export default class Mission {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('integer')
  launch_library_id: number

  @Column('varchar')
  name: string

  @Column('varchar')
  description: string

  @Column('varchar')
  launch_designator: string

  @Column('varchar')
  type: string

  @Column('integer', { nullable: true })
  mission_orbit_id: number

  @ManyToOne(() => MissionOrbit, orbit => orbit.missions)
  @JoinColumn({ name: 'mission_orbit_id' })
  mission_orbit: MissionOrbit

  @OneToMany(() => Launch, launch => launch.mission)
  @JoinColumn({ name: 'mission_id' })
  launches: Launch[]
}
