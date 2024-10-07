import { Module } from '@nestjs/common';
import { CharactersController } from './Characters.controller';
import { CharactersService } from './Characters.service';
import { CharactersRepository } from './Characters.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterEntity } from 'src/entities/Characters.entity';
import { PlanetEntity } from 'src/entities/Planets.entity';
import { TransformationEntity } from 'src/entities/Transformations.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CharacterEntity]),
    TypeOrmModule.forFeature([PlanetEntity]),
    TypeOrmModule.forFeature([TransformationEntity]),
  ],
  controllers: [CharactersController],
  providers: [CharactersService, CharactersRepository],
})
export class CharactersModule {}
