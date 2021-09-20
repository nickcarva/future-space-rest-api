import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createLaunches1631906339147 implements MigrationInterface {
  private launchesTable = new Table({
    name: 'launches',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        isGenerated: false
      },
      {
        name: 'url',
        type: 'varchar'
      },
      {
        name: 'launch_library_id',
        type: 'integer',
        isNullable: true
      },
      {
        name: 'slug',
        type: 'varchar'
      },
      {
        name: 'name',
        type: 'varchar'
      },
      {
        name: 'net',
        type: 'timestamp',
        isNullable: true
      },
      {
        name: 'window_start',
        type: 'timestamp',
        isNullable: true
      },
      {
        name: 'window_end',
        type: 'timestamp',
        isNullable: true
      },
      {
        name: 'inhold',
        type: 'boolean',
        isNullable: true
      },
      {
        name: 'tbdtime',
        type: 'boolean',
        isNullable: true
      },
      {
        name: 'tbddate',
        type: 'boolean',
        isNullable: true
      },
      {
        name: 'probability',
        type: 'integer',
        isNullable: true
      },
      {
        name: 'holdreason',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'failreason',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'hashtag',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'webcast_live',
        type: 'boolean',
        isNullable: true
      },
      {
        name: 'image',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'infographic',
        type: 'varchar',
        isNullable: true
      },
      {
        name: 'imported_t',
        type: 'timestamp with time zone',
        default: 'now()'
      },
      {
        name: 'status',
        type: 'enum',
        enum: ['draft', 'trash', 'published'],
        enumName: 'launchStatus',
        default: "'draft'"
      }
    ]
  })

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.launchesTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.launchesTable)
  }
}
