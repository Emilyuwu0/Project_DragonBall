import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlanetEntity } from './Planets.entity';
import { TransformationEntity } from './Transformations.entity';

@Entity({ name: 'characters' })
export class CharacterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 30 })
  name: string;

  @Column('varchar')
  ki: string;

  @Column('varchar')
  maxKi: string;

  @Column('varchar')
  race: string;

  @Column('varchar')
  gender: string;

  @Column('text')
  description: string;

  @Column('varchar')
  image: string;

  @Column('varchar')
  affiliation: string;

  @ManyToOne(() => PlanetEntity, (planet) => planet.characters)
  originPlanet: PlanetEntity;

  @OneToMany(
    () => TransformationEntity,
    (transformation) => transformation.character,
  )
  transformations: TransformationEntity[];
}
