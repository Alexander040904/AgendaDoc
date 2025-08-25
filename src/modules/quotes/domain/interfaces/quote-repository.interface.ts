import { Quote } from '../entities/quote';

export abstract class QuoteRepositoryPort {
  abstract create(quote: Quote): Promise<Quote | null>;
  abstract updatePartial(id: number, quote: Partial<Quote>): Promise<Quote | null>;
}
