import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  JoinColumn,
  ManyToOne
} from 'typeorm'

import Launch from './Launch'
import PadLocation from './PadLocation'

@Entity('pads')
export default class Pad {
  @PrimaryColumn('integer')
  id: number

  @Column('varchar')
  url: string

  @Column('integer', { nullable: true })
  agency_id: number

  @Column('varchar')
  name: string

  @Column('varchar', { nullable: true })
  info_url: string

  @Column('varchar', { nullable: true })
  wiki_url: string

  @Column('varchar', { nullable: true })
  map_url: string

  @Column('varchar', { nullable: true })
  latitude: string

  @Column('varchar', { nullable: true })
  longitude: string

  @Column('varchar', { nullable: true })
  map_image: string

  @Column('integer', { nullable: true })
  total_launch_count: number

  @Column('integer', { nullable: true })
  pad_location_id: number

  @ManyToOne(() => PadLocation, location => location.pads)
  @JoinColumn({ name: 'pad_location_id' })
  pad_location: PadLocation

  @OneToMany(() => Launch, launch => launch.pad)
  @JoinColumn({ name: 'pad_id' })
  launches: Launch[]
}
