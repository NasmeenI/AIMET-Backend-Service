import { 
  Controller, 
  Get, 
  Patch, 
} from '@nestjs/common';
import { ActiveFlagService } from './activeFlag.service';

@Controller('activeFlag')
export class ActiveFlagController {
  constructor(private activeFlagService: ActiveFlagService) {}

  @Get()
  getActiveFlag() {
    return this.activeFlagService.getActiveFlag();
  }

  @Patch()
  generateActiveFlag() {
    return this.activeFlagService.generateActiveFlag();
  }
}
