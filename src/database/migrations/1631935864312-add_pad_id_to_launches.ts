import { MigrationInterface, QueryRunner } from 'typeorm'

export class addPadIdToLaunches1631935864312 implements MigrationInterface {
  name = 'addPadIdToLaunches1631935864312'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."launches" ADD "pad_id" integer')
    await queryRunner.query('ALTER TABLE "public"."launches" ADD CONSTRAINT "FK_eb8bc14b73d139b905eb1770822" FOREIGN KEY ("pad_id") REFERENCES "pads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."launches" DROP CONSTRAINT "FK_eb8bc14b73d139b905eb1770822"')
    await queryRunner.query('ALTER TABLE "public"."launches" DROP COLUMN "pad_id"')
  }
}
