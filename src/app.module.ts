import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AcademicSessionController } from './AcademicSessionController.controller';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, AcademicSessionController],
  providers: [AppService],
})
export class AppModule { }
