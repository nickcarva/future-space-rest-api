import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'

import Launch from './Launch'

@Entity('launches_services_providers')
export default class LaunchServiceProvider {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar')
  url: string

  @Column('varchar')
  name: string

  @Column('varchar')
  type: string

  @OneToMany(() => Launch, launch => launch.launch_service_provider)
  @JoinColumn({ name: 'launch_service_provider_id' })
  launches: Launch[]
}
