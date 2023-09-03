import { 
  Body, 
  Controller, 
  Delete, 
  Get, 
  HttpCode, 
  HttpStatus, 
  Param, 
  Patch, 
  Post 
} from '@nestjs/common';
import { FlagService } from './flag.service';
import { CreateFlagDto, EditFlagDto } from './tools';

@Controller('flag')
export class FlagController {
  constructor(private flagService: FlagService) {}

  @Get()
  getFlag() {
    return this.flagService.getFlags();
  }

  @Get(':id')
  getFlagById( @Param('id') flagId: string ) {
    return this.flagService.getFlagById(flagId);
  }
  
  @Post()
  craeteFlag( @Body() dto: CreateFlagDto ) {
    return this.flagService.craeteFlag(dto);
  }

  @Patch(':name')
  editFlagByName(
    @Param('name') name: string,
    @Body() dto: EditFlagDto,
  ) {
    return this.flagService.editFlagByName(name, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteFlagById( @Param('id') flagId: string, ) {
    return this.flagService.deleteFlagById(flagId);
  }
}
