import { Controller, Get, Query } from '@nestjs/common';
import { CharactersService } from './Characters.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Characters')
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get('seeder')
  seederCharacters() {
    return this.charactersService.seederCharacters();
  }

  @Get('paginado')
  getCharacters(@Query('page') page: number, @Query('limit') limit: number) {
    return this.charactersService.getCharacters(page, limit);
  }

  @Get()
  allCharacters() {
    return this.charactersService.allCharacters();
  }
}
