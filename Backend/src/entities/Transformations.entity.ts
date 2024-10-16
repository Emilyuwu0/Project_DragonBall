import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CharacterEntity } from './Characters.entity';

@Entity({ name: 'transformations' })
export class TransformationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  image: string;

  @Column('varchar')
  ki: string;

  @ManyToOne(() => CharacterEntity, (character) => character.transformations)
  character: CharacterEntity;
}
