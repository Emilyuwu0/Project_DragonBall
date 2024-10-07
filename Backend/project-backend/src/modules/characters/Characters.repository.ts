import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacterEntity } from 'src/entities/Characters.entity';
import { PlanetEntity } from 'src/entities/Planets.entity';
import { Repository } from 'typeorm';
import * as characters from '../../utils/Characters.json';
import { TransformationEntity } from 'src/entities/Transformations.entity';

@Injectable()
export class CharactersRepository {
  constructor(
    @InjectRepository(PlanetEntity)
    private readonly planetRepository: Repository<PlanetEntity>,
    @InjectRepository(CharacterEntity)
    private readonly characterDBRepository: Repository<CharacterEntity>,
    @InjectRepository(TransformationEntity)
    private readonly transformationRepository: Repository<TransformationEntity>,
  ) {}

  async seederCharacters() {
    const planets = await this.planetRepository.find();

    for (const element of characters) {
      const planet = planets.find((p) => p.name === element.originPlanet.name);

      if (planet) {
        const newCharacter = this.characterDBRepository.create({
          name: element.name,
          ki: element.ki,
          maxKi: element.maxKi,
          race: element.race,
          gender: element.gender,
          description: element.description,
          image: element.image,
          affiliation: element.affiliation,
          originPlanet: planet,
        });
        const savedCharacters =
          await this.characterDBRepository.save(newCharacter);

        for (const transformation of element.transformations) {
          const newTransformation = this.transformationRepository.create({
            name: transformation.name,
            image: transformation.image,
            ki: transformation.ki,
            character: savedCharacters,
          });
          await this.transformationRepository.save(newTransformation);
        }
      }
    }
    return {
      message: 'personajes guardados con exito',
    };
  }

  async getCharacters(page = 1, limit = 5) {
    const offSet = (page - 1) * limit;

    const characters = await this.characterDBRepository.find({
      skip: offSet,
      take: limit,
    });
    return characters;
  }
}
