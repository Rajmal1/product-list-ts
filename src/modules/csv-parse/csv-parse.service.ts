import { Injectable } from '@nestjs/common';
import { Products } from '../product/product.entity';
import { createReadStream } from 'fs';
import { resolve } from 'path';
const csvPath = process.env.CSV_PATH;

@Injectable()
export class CsvParseService {
  async parseCsv() {
    let csvFile: Express.Multer.File;
    csvFile.path = resolve(__dirname, '../../', csvPath);

    console.log(1111);

    return csvFile.buffer;
  }
}
