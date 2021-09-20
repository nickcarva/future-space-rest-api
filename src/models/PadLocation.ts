import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'

import Pad from './Pad'

@Entity('pads_locations')
export default class PadLocation {
  @PrimaryColumn('integer')
  id: number

  @Column('varchar')
  url: string

  @Column('varchar')
  name: string

  @Column('varchar', { nullable: true })
  country_code: string

  @Column('varchar', { nullable: true })
  map_image: string

  @Column('integer', { nullable: true })
  total_launch_count: number

  @Column('integer', { nullable: true })
  total_landing_count: number

  @OneToMany(() => Pad, pad => pad.pad_location)
  @JoinColumn({ name: 'pad_location_id' })
  pads: Pad[]
}
