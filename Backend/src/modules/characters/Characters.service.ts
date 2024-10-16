import { Injectable } from '@nestjs/common';
import { CharactersRepository } from './Characters.repository';

@Injectable()
export class CharactersService {
  constructor(private readonly charactersRepository: CharactersRepository) {}
  seederCharacters() {
    return this.charactersRepository.seederCharacters();
  }

  getCharacters(page, limit) {
    return this.charactersRepository.getCharacters(page, limit);
  }

  allCharacters() {
    return this.charactersRepository.allCharacters();
  }
}
