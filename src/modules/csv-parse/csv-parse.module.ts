import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer';
import { CsvParseService } from './csv-parse.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './static/produtos.csv',
      }),
    }),
  ],
  providers: [CsvParseService],
})
export class CsvParseModule {}
