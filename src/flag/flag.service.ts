import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFlagDto, EditFlagDto } from './tools';

@Injectable()
export class FlagService {
  constructor(private prisma: PrismaService) {}

  getFlags() {
    return this.prisma.flag.findMany()
  }

  getFlagById(flagId: string) {
   return this.prisma.flag.findFirst({
     where: { flagId: flagId }
   })
  }
  
  async craeteFlag(dto: CreateFlagDto) {
    return await this.prisma.flag.create({
      data: { ...dto }
    })
  }

  async editFlagByName(name: string, dto: EditFlagDto) {
    // get flag by id 
    const flag = await this.prisma.flag.findUnique({
      where: { name: name }
    })

    // check if there is no flag
    if(!flag)
      throw new ForbiddenException('Access to resources denied');
    
    return this.prisma.flag.update({
      where: { name: name },
      data: { ...dto },
    });
  }

  async deleteFlagById(flagId: string) {
    // get flag by id 
    const flag = await this.prisma.flag.findUnique({
      where: { flagId: flagId }
    })

    // check if there is no flag
    if(!flag)
      throw new ForbiddenException('Access to resources denied');

    await this.prisma.flag.delete({
      where: { flagId: flagId },
    });

    return { msg : "Delete Flag succesful" }
  }
}
