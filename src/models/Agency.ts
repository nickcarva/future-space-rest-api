import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn
} from 'typeorm'

import ProgramAgency from './ProgramAgency'

@Entity('agencies')
export default class Agency {
  @PrimaryColumn('integer')
  id: number

  @Column('varchar')
  url: string

  @Column('varchar')
  name: string

  @Column('varchar')
  type: string

  @OneToMany(() => ProgramAgency, program_agency => program_agency.agency, {
    onDelete: 'SET NULL'
  })
  programs_agencies: ProgramAgency[]
}
