import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createProgramsAgencies1632000544232 implements MigrationInterface {
  private programAgenciesTable = new Table({
    name: 'programs_agencies',
    columns: [
      {
        name: 'program_id',
        type: 'integer',
        unsigned: true,
        isPrimary: true,
        isGenerated: false
      },
      {
        name: 'agency_id',
        type: 'integer',
        unsigned: true,
        isPrimary: true,
        isGenerated: false
      }
    ],
    foreignKeys: [
      {
        name: 'fk_ProgramAgency',
        columnNames: ['program_id'],
        referencedTableName: 'programs',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      {
        name: 'fk_AgencyProgram',
        columnNames: ['agency_id'],
        referencedTableName: 'agencies',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.programAgenciesTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.programAgenciesTable)
  }
}
