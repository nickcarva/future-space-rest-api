import { MigrationInterface, QueryRunner } from 'typeorm'

export class addPadLocationIdToPads1631937186936 implements MigrationInterface {
  name = 'addPadLocationIdToPads1631937186936'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."pads" ADD "pad_location_id" integer')
    await queryRunner.query('ALTER TABLE "public"."pads" ADD CONSTRAINT "FK_eccc9e5da8f6c760f12a677585b" FOREIGN KEY ("pad_location_id") REFERENCES "pads_locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."pads" DROP CONSTRAINT "FK_eccc9e5da8f6c760f12a677585b"')
    await queryRunner.query('ALTER TABLE "public"."pads" DROP COLUMN "pad_location_id"')
  }
}
