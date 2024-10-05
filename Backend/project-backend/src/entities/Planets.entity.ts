import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CharacterEntity } from './Characters.entity';

@Entity({ name: 'Planets' })
export class PlanetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true })
  name: string;

  @Column('boolean')
  isDestroyed: boolean;

  @Column('text')
  description: string;

  @Column('varchar', { nullable: true })
  image: string;

  @OneToMany(() => CharacterEntity, (character) => character.originPlanet)
  characters: CharacterEntity[];
}
