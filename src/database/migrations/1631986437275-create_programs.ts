import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createPrograms1631986437275 implements MigrationInterface {
  private programsTable = new Table({
    name: 'programs',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: false
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
        name: 'description',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'image_url',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'start_date',
        type: 'timestamp',
        isNullable: true
      },
      {
        name: 'end_date',
        type: 'timestamp',
        isNullable: true
      },
      {
        name: 'info_url',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'wiki_url',
        type: 'varchar',
        isNullable: true
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.programsTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.programsTable)
  }
}
