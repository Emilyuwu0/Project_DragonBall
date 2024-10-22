import { Controller, Get } from '@nestjs/common';
import { PlanetsService } from './Planets.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Planets')
@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get('seeder')
  seedPlanets() {
    return this.planetsService.seedPlanets();
  }

  @Get()
  getPlanets() {
    return this.planetsService.getPlanets();
  }
}
