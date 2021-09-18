import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createLaunchesPrograms1631994133442 implements MigrationInterface {
  private launchesProgramsTable = new Table({
    name: 'launches_programs',
    columns: [
      {
        name: 'launch_id',
        type: 'uuid',
        isPrimary: true,
        isGenerated: false
      },
      {
        name: 'program_id',
        type: 'integer',
        unsigned: true,
        isPrimary: true,
        isGenerated: false
      }
    ],
    foreignKeys: [
      {
        name: 'fk_LaunchProgram',
        columnNames: ['launch_id'],
        referencedTableName: 'launches',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      {
        name: 'fk_ProgramLaunch',
        columnNames: ['program_id'],
        referencedTableName: 'programs',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.launchesProgramsTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.launchesProgramsTable)
  }
}
