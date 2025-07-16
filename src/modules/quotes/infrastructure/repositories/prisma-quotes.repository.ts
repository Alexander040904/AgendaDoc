import { Injectable } from '@nestjs/common';
import { QuoteRepositoryPort } from '../../domain/interfaces/quote-repository.interface';
import { Quote } from '../../domain/entities/quote';
import { PrismaService } from 'src/core/databases/prisma.service';
import { QuoteMapper } from 'src/modules/quotes/infrastructure/mappers/quote.mapper';

@Injectable()
export class PrismaQuoteRepository implements QuoteRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(quote: Quote): Promise<Quote | null> {
    const result = await this.prisma.quote.create({
      data: {
        doctorId: quote.doctorId,
        patientId: quote.patientId,
        date: quote.date,
        status: quote.status,
      },
    });

    return QuoteMapper.toEntity(result);
  }

  async updatePartial(id: number, quote: Partial<Quote>): Promise<Quote | null> {
    const result = await this.prisma.quote.update({
      where: { id },
      data: {
        status: quote.status,
      },
    });

    return QuoteMapper.toEntity(result);
  }
}
