import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActiveFlagService {
  constructor(private prisma: PrismaService) {}

  async getActiveFlag() {
    const historyFlag = await this.prisma.historyFlag.findUnique({ 
      where: { historyFlagId: "64e726a09dd04e001d66ba39" },
      include: { flags: true, },
    })

    historyFlag.flags.sort((a, b) => b.priority - a.priority);
    return historyFlag;
  }
 
  async generateActiveFlag() {
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
