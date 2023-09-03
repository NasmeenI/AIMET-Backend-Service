import { 
  Body,
  Controller, 
  Get, 
  Param, 
  Post, 
} from '@nestjs/common';
import { HistoryFlagService } from './historyFlag.service';
import { CreateHistoryFlagDto } from './tools';

@Controller('historyFlag')
export class HistoryFlagController {
  constructor(private historyFlagService: HistoryFlagService) {}

  @Get(':id')
  getHistoryFlagById( @Param('id') historyFlagId: string ) {
    return this.historyFlagService.getHistoryFlagById(historyFlagId);
  }

  @Post()
  craeteHistoryFlag( @Body() dto: CreateHistoryFlagDto ) {
    return this.historyFlagService.craeteHistoryFlag(dto);
  }
}
