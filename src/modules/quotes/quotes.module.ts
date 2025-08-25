import { Module } from '@nestjs/common';
import { QuotesController } from './infrastructure/controllers/quotes.controller';
import { PrismaService } from 'src/core/databases/prisma.service';
import { CreateQuoteUseCase } from './application/use-cases/create-quote.use-case';
import { UpdateQuoteUseCase } from './application/use-cases/update-quote.use-case';
import { QuoteRepositoryPort } from './domain/interfaces/quote-repository.interface';
import { PrismaQuoteRepository } from './infrastructure/repositories/prisma-quotes.repository';

@Module({
  providers:[
    PrismaService,
    CreateQuoteUseCase,
    UpdateQuoteUseCase,

    {provide:QuoteRepositoryPort,
    useClass:PrismaQuoteRepository,
    },
  ],

  exports:[CreateQuoteUseCase],
  controllers: [QuotesController]
})
export class QuotesModule {}
