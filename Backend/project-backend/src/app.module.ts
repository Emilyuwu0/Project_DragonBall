import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeOrmConfig from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersModule } from './modules/characters/Characters.module';
import { PlanetsModule } from './modules/planets/Planets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) =>
        ConfigService.get('typeorm'),
    }),
    CharactersModule,
    PlanetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
