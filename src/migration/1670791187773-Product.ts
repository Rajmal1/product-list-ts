import { CsvParseService } from 'src/modules/csv-parse/csv-parse.service';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { resolve } from 'path';
const csvPath = process.env.CSV_PATH;
import { parse } from 'papaparse';
import { readFileSync } from 'fs';

export class Product1670791187773 implements MigrationInterface {
  constructor(private readonly csvParser: CsvParseService) {}

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE products(id SERIAL,name varchar(30),dias_para_vencimento integer,PRIMARY KEY (id));',
    );

    const csvFile = readFileSync(
      resolve(__dirname, '../../', csvPath),
      'utf-8',
    );

    parse(csvFile, {
      header: true,
      skipEmptyLines: true,
      step: async (results) => {
        await queryRunner.query(
          `INSERT INTO products(name, dias_para_vencimento)VALUES ('${results.data.name.replace(
            "'",
            '',
          )}', ${results.data.dias_para_vencimento});`,
        );
      },
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE products');
  }
}
