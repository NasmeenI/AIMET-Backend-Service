import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHistoryFlagDto } from './tools';

@Injectable()
export class HistoryFlagService {
  constructor(private prisma: PrismaService) {}

  async getHistoryFlagById(historyFlagId: string) {
    const historyFlag = await this.prisma.historyFlag.findUnique({ 
      where: { historyFlagId: historyFlagId },
      include: { flags: true },
    })

    historyFlag.flags.sort((a, b) => b.priority - a.priority);
    return historyFlag;
  }

  async craeteHistoryFlag(dto: CreateHistoryFlagDto) {
    const flags = await this.prisma.flag.findMany();
    flags.sort((a, b) => b.priority - a.priority);
    const historyFlag = flags.slice(0, Math.min(50, flags.length));

    this.clearActiveFlag();
    historyFlag.forEach(async flag => {
      await this.prisma.historyFlag.update({
        where: { historyFlagId: "64e726a09dd04e001d66ba39" },
        data: {
          flags: {
            connect: { flagId: flag.flagId },
          },
        },
      });
    })
    return { msg: "Generate activeFlag successful" }
  }

  async clearActiveFlag() {
    await this.prisma.historyFlag.update({
      where: { historyFlagId: "64e236f2edf83416f7a7983f" },
      data: {
        flags: {
          set: [],
        },
      },
    });
  }
}
