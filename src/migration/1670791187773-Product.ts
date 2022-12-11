import { MigrationInterface, QueryRunner } from 'typeorm';

export class Product1670791187773 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE products(id integer,name text,dias_para_vencimento integer,PRIMARY KEY (id));',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE products');
  }
}
