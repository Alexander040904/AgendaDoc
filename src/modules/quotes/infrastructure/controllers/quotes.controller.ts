import {Body,Controller,Post,Patch,Param,ParseIntPipe,} from '@nestjs/common';
import { CreateQuoteUseCase } from '../../application/use-cases/create-quote.use-case';
import { UpdateQuoteUseCase } from '../../application/use-cases/update-quote.use-case';
import { CreateQuoteDto } from '../../application/dto/create-quote.dto';
import { UpdateQuoteDto } from '../../application/dto/update-quote.dto';
import { Public } from 'src/core/decorators/public.decorator';

@Controller('quotes')
export class QuotesController {
  constructor(
    private readonly createQuoteUseCase: CreateQuoteUseCase,
    private readonly updateQuoteUseCase: UpdateQuoteUseCase,
  ) { }

  @Public()
  @Post('register')
  async register(@Body() quoteData: CreateQuoteDto) {
    const quote = await this.createQuoteUseCase.execute(quoteData);
    return quote;
  }

  @Public()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UpdateQuoteDto,
  ) {
    const updated = await this.updateQuoteUseCase.execute(id, updateData);
    return updated;
  }
}
