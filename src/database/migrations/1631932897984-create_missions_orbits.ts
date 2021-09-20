import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createMissionsOrbits1631932897984 implements MigrationInterface {
  private missionsOrbitsTable = new Table({
    name: 'missions_orbits',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: false
      },
      {
        name: 'name',
        type: 'varchar'
      },
      {
        name: 'abbrev',
        type: 'varchar'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.missionsOrbitsTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.missionsOrbitsTable)
  }
}
