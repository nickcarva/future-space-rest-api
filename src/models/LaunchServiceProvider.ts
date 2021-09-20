import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'

import Launch from './Launch'

@Entity('launches_services_providers')
export default class LaunchServiceProvider {
  @PrimaryColumn('integer')
  id: number

  @Column('varchar')
  url: string

  @Column('varchar')
  name: string

  @Column('varchar', { nullable: true })
  type: string

  @OneToMany(() => Launch, launch => launch.launch_service_provider)
  @JoinColumn({ name: 'launch_service_provider_id' })
  launches: Launch[]
}
