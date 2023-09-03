import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FlagModule } from './flag/flag.module';
import { HistoryFlagModule } from './historyFlag/historyFlag.module';

@Module({
  imports: [
    PrismaModule,
    FlagModule,
    HistoryFlagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

