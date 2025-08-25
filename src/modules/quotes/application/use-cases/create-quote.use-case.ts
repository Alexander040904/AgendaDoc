import { Injectable } from '@nestjs/common';
import { Quote } from '../../domain/entities/quote';
import { QuoteRepositoryPort } from '../../domain/interfaces/quote-repository.interface';
import { CreateQuoteDto } from '../dto/create-quote.dto';

@Injectable()
export class CreateQuoteUseCase {
  constructor(private readonly quoteRepository: QuoteRepositoryPort) {}

  /**
   * Ejecuta la creación de la cita
   * @param dto DTO con los datos necesarios
   * @returns La cita creada o null
   */
  async execute(dto: CreateQuoteDto): Promise<Quote | null> {
    const quote = new Quote({
      id: 0, 
      doctorId: dto.doctorId,
      patientId: dto.patientId,
      date: new Date(dto.date),
      status: dto.status,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await this.quoteRepository.create(quote);
  }
}
