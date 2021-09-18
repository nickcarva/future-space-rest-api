import { MigrationInterface, QueryRunner } from 'typeorm'

export class addMissionOrbitIdToMissions1631934134198 implements MigrationInterface {
  name = 'addMissionOrbitIdToMissions1631934134198'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."missions" ADD "mission_orbit_id" integer')
    await queryRunner.query('ALTER TABLE "public"."missions" ADD CONSTRAINT "FK_b92a0aa76a13ff5be9ec5da2358" FOREIGN KEY ("mission_orbit_id") REFERENCES "missions_orbits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "public"."missions" DROP CONSTRAINT "FK_b92a0aa76a13ff5be9ec5da2358"')
    await queryRunner.query('ALTER TABLE "public"."missions" DROP COLUMN "mission_orbit_id"')
  }
}
