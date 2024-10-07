import { Controller, Get } from '@nestjs/common';
import { CharactersService } from './Characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get('seeder')
  seederCharacters() {
    return this.charactersService.seederCharacters();
  }

  @Get()
  getCharacters() {
    return this.charactersService.getCharacters();
  }
}
