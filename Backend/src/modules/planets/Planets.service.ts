import { Injectable } from '@nestjs/common';
import { PlanetsRepository } from './Planets.repository';

@Injectable()
export class PlanetsService {
  constructor(private readonly planetRepository: PlanetsRepository) {}
  seedPlanets() {
    return this.planetRepository.seedPlanets();
  }

  getPlanets() {
    return this.planetRepository.getPlanets();
  }
}
