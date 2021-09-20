import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createMissions1631930906443 implements MigrationInterface {
  private missionsTable = new Table({
    name: 'missions',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: false
      },
      {
        name: 'launch_library_id',
        type: 'integer',
        isNullable: true
      },
      {
        name: 'name',
        type: 'varchar'
      },
      {
        name: 'description',
        type: 'varchar'
      },
      {
        name: 'launch_designator',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'type',
        type: 'varchar',
        isNullable: true
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.missionsTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.missionsTable)
  }
}
