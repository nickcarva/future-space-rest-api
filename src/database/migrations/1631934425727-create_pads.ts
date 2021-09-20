import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createPads1631934425727 implements MigrationInterface {
  private padsTable = new Table({
    name: 'pads',
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
        name: 'agency_id',
        type: 'integer',
        isNullable: true
      },
      {
        name: 'name',
        type: 'varchar'
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
      },
      {
        name: 'map_url',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'latitude',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'longitude',
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
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.padsTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.padsTable)
  }
}
