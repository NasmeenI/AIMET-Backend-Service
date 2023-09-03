import { Module } from '@nestjs/common';
import { HistoryFlagController } from './historyFlag.controller';
import { HistoryFlagService } from './historyFlag.service';

@Module({
  controllers: [HistoryFlagController],
  providers: [HistoryFlagService]
})
export class HistoryFlagModule {}
