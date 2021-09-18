import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createLaunchesServicesProviders1631916750341 implements MigrationInterface {
  private launchesServicesProvidersTable = new Table({
    name: 'launches_services_providers',
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
    await queryRunner.createTable(this.launchesServicesProvidersTable)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.launchesServicesProvidersTable)
  }
}
