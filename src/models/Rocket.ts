import {
  Entity,
  PrimaryColumn,
  OneToMany,
  JoinColumn,
  Column,
  ManyToOne
} from 'typeorm'

import Launch from './Launch'
import RocketConfiguration from './RocketConfiguration'

@Entity('rockets')
export default class Rocket {
  @PrimaryColumn('integer')
  id: number

  @Column('integer', { nullable: true })
  rocket_configuration_id: number

  @ManyToOne(() => RocketConfiguration, configuration => configuration.rockets)
  @JoinColumn({ name: 'rocket_configuration_id' })
  rocket_configuration: RocketConfiguration

  @OneToMany(() => Launch, launch => launch.rocket)
  @JoinColumn({ name: 'rocket_id' })
  launches: Launch[]
}
