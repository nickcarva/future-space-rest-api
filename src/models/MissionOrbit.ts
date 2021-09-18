import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'

import Mission from './Mission'

@Entity('missions_orbits')
export default class MissionOrbit {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar')
  name: string

  @Column('varchar')
  abbrev: string

  @OneToMany(() => Mission, mission => mission.mission_orbit)
  @JoinColumn({ name: 'mission_orbit_id' })
  missions: Mission[]
}
