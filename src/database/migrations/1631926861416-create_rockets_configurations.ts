import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createRocketsConfigurations1631926861416 implements MigrationInterface {
  private rocketsConfigurationsTable = new Table({
    name: 'rockets_configurations',
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
        name: 'url',
        type: 'varchar'
      },
      {
        name: 'name',
        type: 'varchar'
      },
      {
        name: 'family',
        type: 'varchar'
      },
      {
        name: 'full_name',
        type: 'varchar'
      },
      {
        name: 'variant',
        type: 'varchar'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.rocketsConfigurationsTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.rocketsConfigurationsTable)
  }
}
