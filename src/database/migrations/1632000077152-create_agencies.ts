import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createAgencies1632000077152 implements MigrationInterface {
  private agenciesTable = new Table({
    name: 'agencies',
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
        name: 'type',
        type: 'varchar'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.agenciesTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.agenciesTable)
  }
}
