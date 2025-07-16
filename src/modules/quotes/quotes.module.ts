import { Module } from '@nestjs/common';
import { QuotesController } from './infrastructure/controllers/quotes.controller';

@Module({
  controllers: [QuotesController]
})
export class QuotesModule {}
