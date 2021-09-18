import { MigrationInterface, QueryRunner } from 'typeorm'

export class addRocketIdToLaunches1631926708044 implements MigrationInterface {
  name = 'addRocketIdToLaunches1631926708044'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."launches" ADD "rocket_id" integer')
    await queryRunner.query('ALTER TABLE "public"."launches" ADD CONSTRAINT "FK_5892dadd81305bf58074114626a" FOREIGN KEY ("rocket_id") REFERENCES "rockets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."launches" DROP CONSTRAINT "FK_5892dadd81305bf58074114626a"')
    await queryRunner.query('ALTER TABLE "public"."launches" DROP COLUMN "rocket_id"')
  }
}
