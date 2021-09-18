import { MigrationInterface, QueryRunner } from 'typeorm'

export class addLaunchServiceProvideIdToLaunches1631918884541 implements MigrationInterface {
  name = 'addLaunchServiceProvideIdToLaunches1631918884541'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."launches" ADD "launch_service_provider_id" integer')
    await queryRunner.query('ALTER TABLE "public"."launches" ADD CONSTRAINT "FK_5cc7be6844e5344d18aeb348900" FOREIGN KEY ("launch_service_provider_id") REFERENCES "launches_services_providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."launches" DROP CONSTRAINT "FK_5cc7be6844e5344d18aeb348900"')
    await queryRunner.query('ALTER TABLE "public"."launches" DROP COLUMN "launch_service_provider_id"')
  }
}
