import { Injectable, NotFoundException } from '@nestjs/common';
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
        const characterImageFileName = element.image.split('/').pop();

        const newCharacter = this.characterDBRepository.create({
          name: element.name,
          ki: element.ki,
          maxKi: element.maxKi,
          race: element.race,
          gender: element.gender,
          description: element.description,
          image: characterImageFileName,
          affiliation: element.affiliation,
          originPlanet: planet,
        });
        const savedCharacters =
          await this.characterDBRepository.save(newCharacter);

        for (const transformation of element.transformations) {
          const transformationImageFileName = transformation.image
            .split('/')
            .pop();
          const newTransformation = this.transformationRepository.create({
            name: transformation.name,
            image: transformationImageFileName,
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

    const [FoundCharacters, total] =
      await this.characterDBRepository.findAndCount({
        skip: offSet,
        take: limit,
      });

    const transformaciones = await this.transformationRepository.find({
      relations: ['character'],
    });

    if (!transformaciones)
      throw new NotFoundException('no hay transformaciones');

    const characters = FoundCharacters.map((element) => {
      const characterTransformations = transformaciones.filter(
        (transformation) => {
          return transformation.character?.id === element.id; //
        },
      );
      return {
        id: element.id,
        name: element.name,
        image: `/assets/pj/${element.image}`,
        ki: element.ki,
        maxKi: element.maxKi,
        race: element.race,
        gender: element.gender,
        description: element.description,
        affiliation: element.affiliation,
        transformations: characterTransformations.map((transformation) => ({
          id: transformation.id,
          name: transformation.name,
          ki: transformation.ki,
          image: transformation.image,
        })),
      };
    });

    return {
      items: characters,
      meta: {
        totalItems: total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        limit: limit,
      },
    };
  }

  async allCharacters() {
    const FoundCharacters = await this.characterDBRepository.find();

    if (!FoundCharacters)
      throw new NotFoundException('Ejecuta el Get Characters/seeder');

    const transformations = await this.transformationRepository.find({
      relations: ['character'],
    });

    if (!transformations)
      throw new NotFoundException('no hay transformaciones');

    const characters = FoundCharacters.map((element) => {
      const characterTransformations = transformations.filter(
        (transformation) => {
          return transformation.character?.id === element.id; //
        },
      );
      return {
        id: element.id,
        name: element.name,
        image: element.image,
        ki: element.ki,
        maxKi: element.maxKi,
        race: element.race,
        gender: element.gender,
        description: element.description,
        affiliation: element.affiliation,
        transformations: characterTransformations.map((transformation) => ({
          id: transformation.id,
          name: transformation.name,
          ki: transformation.ki,
          image: transformation.image,
        })),
      };
    });

    return characters;
  }
}
