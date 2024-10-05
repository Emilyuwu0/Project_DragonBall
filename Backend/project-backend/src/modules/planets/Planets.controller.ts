import { Controller, Get } from '@nestjs/common';
import { PlanetsService } from './Planets.service';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get('seeder')
  seedPlanets() {
    return this.planetsService.seedPlanets();
  }
}
