import { MigrationInterface, QueryRunner } from 'typeorm'

export class addMissionIdToLaunches1631932393386 implements MigrationInterface {
  name = 'addMissionIdToLaunches1631932393386'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."launches" ADD "mission_id" integer')
    await queryRunner.query('ALTER TABLE "public"."launches" ADD CONSTRAINT "FK_7cfbc0712dec10660fdf09cd5f0" FOREIGN KEY ("mission_id") REFERENCES "missions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."launches" DROP CONSTRAINT "FK_7cfbc0712dec10660fdf09cd5f0"')
    await queryRunner.query('ALTER TABLE "public"."launches" DROP COLUMN "mission_id"')
  }
}
