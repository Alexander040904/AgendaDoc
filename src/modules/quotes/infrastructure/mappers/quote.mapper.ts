import { Quote as PrismaQuote } from '@prisma/client';
import { Quote } from '../../domain/entities/quote';

export class QuoteMapper {
  static toEntity(prismaQuote: PrismaQuote): Quote {
    return new Quote({
      id: prismaQuote.id,
      doctorId: prismaQuote.doctorId,
      patientId: prismaQuote.patientId,
      date: prismaQuote.date,
      status: prismaQuote.status,
      createdAt: prismaQuote.createdAt,
      updatedAt: prismaQuote.updatedAt ?? undefined,
    });
  }

  static toPersistence(quote: Partial<Quote>): any {
    return {
      ...(quote.doctorId !== undefined && { doctorId: quote.doctorId }),
      ...(quote.patientId !== undefined && { patientId: quote.patientId }),
      ...(quote.date !== undefined && { date: quote.date }),
      ...(quote.status !== undefined && { status: quote.status }),
      ...(quote.createdAt !== undefined && { createdAt: quote.createdAt }),
      ...(quote.updatedAt !== undefined && { updatedAt: quote.updatedAt }),
    };
  }
}
