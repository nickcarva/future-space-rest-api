import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createPadsLocations1631935994975 implements MigrationInterface {
  private padsLocationsTable = new Table({
    name: 'pads_locations',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'url',
        type: 'varchar'
      },
      {
        name: 'name',
        type: 'varchar'
      },
      {
        name: 'country_code',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'map_image',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'total_launch_count',
        type: 'integer',
        isNullable: true
      },
      {
        name: 'total_landing_count',
        type: 'integer',
        isNullable: true
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.padsLocationsTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.padsLocationsTable)
  }
}
