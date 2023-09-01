import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FlagModule } from './flag/flag.module';
import { ActiveFlagModule } from './activeFlag/activeFlag.module';

@Module({
  imports: [
    PrismaModule,
    FlagModule,
    ActiveFlagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

