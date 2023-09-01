import { Module } from '@nestjs/common';
import { ActiveFlagController } from './activeFlag.controller';
import { ActiveFlagService } from './activeFlag.service';

@Module({
  controllers: [ActiveFlagController],
  providers: [ActiveFlagService]
})
export class ActiveFlagModule {}
