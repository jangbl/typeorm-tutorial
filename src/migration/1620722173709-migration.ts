import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1620722173709 implements MigrationInterface {
    name = 'migration1620722173709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "email" character varying NOT NULL,
                "firstName" character varying NOT NULL,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "tag" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "UQ_6a9775008add570dc3e5a0bab7b" UNIQUE ("name"),
                CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "video" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                "channelId" integer,
                CONSTRAINT "PK_1a2f3856250765d72e7e1636c8e" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "channel" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "userId" integer,
                CONSTRAINT "REL_823bae55bd81b3be6e05cff438" UNIQUE ("userId"),
                CONSTRAINT "PK_590f33ee6ee7d76437acf362e39" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "video_tags_tag" (
                "videoId" integer NOT NULL,
                "tagId" integer NOT NULL,
                CONSTRAINT "PK_dc53e5b90285cf3928bb947412c" PRIMARY KEY ("videoId", "tagId")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_4e03ab28eb389a49b5179ac600" ON "video_tags_tag" ("videoId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_cfacd951e1dee14c179c727205" ON "video_tags_tag" ("tagId")
        `);
        await queryRunner.query(`
            ALTER TABLE "video"
            ADD CONSTRAINT "FK_2edd2d5b91d15d5262356ab2a5b" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "channel"
            ADD CONSTRAINT "FK_823bae55bd81b3be6e05cff4383" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "video_tags_tag"
            ADD CONSTRAINT "FK_4e03ab28eb389a49b5179ac6002" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "video_tags_tag"
            ADD CONSTRAINT "FK_cfacd951e1dee14c179c7272059" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "video_tags_tag" DROP CONSTRAINT "FK_cfacd951e1dee14c179c7272059"
        `);
        await queryRunner.query(`
            ALTER TABLE "video_tags_tag" DROP CONSTRAINT "FK_4e03ab28eb389a49b5179ac6002"
        `);
        await queryRunner.query(`
            ALTER TABLE "channel" DROP CONSTRAINT "FK_823bae55bd81b3be6e05cff4383"
        `);
        await queryRunner.query(`
            ALTER TABLE "video" DROP CONSTRAINT "FK_2edd2d5b91d15d5262356ab2a5b"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_cfacd951e1dee14c179c727205"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_4e03ab28eb389a49b5179ac600"
        `);
        await queryRunner.query(`
            DROP TABLE "video_tags_tag"
        `);
        await queryRunner.query(`
            DROP TABLE "channel"
        `);
        await queryRunner.query(`
            DROP TABLE "video"
        `);
        await queryRunner.query(`
            DROP TABLE "tag"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
