import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'

import Rocket from './Rocket'

@Entity('rockets_configurations')
export default class RocketConfiguration {
  @PrimaryColumn('integer')
  id: number

  @Column('integer', { nullable: true })
  launch_library_id: number

  @Column('varchar')
  url: string

  @Column('varchar')
  name: string

  @Column('varchar')
  family: string

  @Column('varchar')
  full_name: string

  @Column('varchar')
  variant: string

  @OneToMany(() => Rocket, rocket => rocket.rocket_configuration)
  @JoinColumn({ name: 'rocket_configuration_id' })
  rockets: Rocket[]
}
