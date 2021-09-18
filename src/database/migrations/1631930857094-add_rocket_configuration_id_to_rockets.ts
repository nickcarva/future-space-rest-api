import { MigrationInterface, QueryRunner } from 'typeorm'

export class addRocketConfigurationIdToRockets1631930857094 implements MigrationInterface {
  name = 'addRocketConfigurationIdToRockets1631930857094'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."rockets" ADD "rocket_configuration_id" integer')
    await queryRunner.query('ALTER TABLE "public"."rockets" ADD CONSTRAINT "FK_0faaadbd423fdfd315d4fbd54e0" FOREIGN KEY ("rocket_configuration_id") REFERENCES "rockets_configurations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."rockets" DROP CONSTRAINT "FK_0faaadbd423fdfd315d4fbd54e0"')
    await queryRunner.query('ALTER TABLE "public"."rockets" DROP COLUMN "rocket_configuration_id"')
  }
}
