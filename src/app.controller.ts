import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GUIDType } from './enums/GUIDType.enum';
import { SessionType } from './enums/SessionType.enum';
import { StatusType } from './enums/StatusType.enum';
import { GUID } from './helpers/GUID';
import { AcademicSession } from './models/AcademicSession.model';
import { GUIDRef } from './models/GUIDRef.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): AcademicSession {

    //console.log(GUID.get());

    //new Base(GUID.get(), StatusType.active, new Date(1987, 3, 15));

    //new GUIDRef("orgs/1020", "1020", GUIDType.org)

    let academicSession = new AcademicSession(GUID.get(), StatusType.active, new Date(2022, 8, 4), "2º Semestre", new Date(2022, 6, 1), new Date(2022, 11, 31), SessionType.semester, new GUIDRef("academicSessions", GUID.get(), GUIDType.academicSession), 2022);

    return academicSession;
  }
}
