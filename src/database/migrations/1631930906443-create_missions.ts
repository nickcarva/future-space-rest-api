import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createMissions1631930906443 implements MigrationInterface {
  private missionsTable = new Table({
    name: 'missions',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'launch_library_id',
        type: 'integer'
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
        type: 'varchar'
      },
      {
        name: 'type',
        type: 'varchar'
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
