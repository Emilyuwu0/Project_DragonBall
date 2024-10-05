import { Module } from '@nestjs/common';
import { PlanetsController } from './Planets.controller';
import { PlanetsService } from './Planets.service';
import { PlanetsRepository } from './Planets.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanetEntity } from 'src/entities/Planets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanetEntity])],
  controllers: [PlanetsController],
  providers: [PlanetsService, PlanetsRepository],
})
export class PlanetsModule {}
