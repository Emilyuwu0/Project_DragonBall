import { Controller, Get, Query } from '@nestjs/common';
import { CharactersService } from './Characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get('seeder')
  seederCharacters() {
    return this.charactersService.seederCharacters();
  }

  @Get()
  getCharacters(@Query('page') page: number, @Query('limit') limit: number) {
    return this.charactersService.getCharacters(page, limit);
  }
}
