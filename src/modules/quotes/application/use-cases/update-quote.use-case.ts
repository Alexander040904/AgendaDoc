import { Injectable } from '@nestjs/common';
import { Quote } from '../../domain/entities/quote';
import { QuoteRepositoryPort } from '../../domain/interfaces/quote-repository.interface';
import { UpdateQuoteDto } from '../dto/update-quote.dto';

@Injectable()
export class UpdateQuoteUseCase {
  constructor(private readonly quoteRepository: QuoteRepositoryPort) {}

  async execute(id: number, dto: UpdateQuoteDto): Promise<Quote | null> {
    const partialUpdate: Partial<Quote> = {
      doctorId: dto.doctorId,
      patientId: dto.patientId,
      date: dto.date ? new Date(dto.date) : undefined,
      status: dto.status,
      updatedAt: new Date(),
    };
    return await this.quoteRepository.updatePartial(id, partialUpdate);
  }
}
