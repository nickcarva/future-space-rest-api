import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createRockets1631925853987 implements MigrationInterface {
  private rocketsTable = new Table({
    name: 'rockets',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.rocketsTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.rocketsTable)
  }
}
