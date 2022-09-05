import { Controller, Get } from "@nestjs/common";
import { GUIDType } from "./enums/GUIDType.enum";
import { SessionType } from "./enums/SessionType.enum";
import { StatusType } from "./enums/StatusType.enum";
import { GUID } from "./helpers/GUID";
import { AcademicSession } from "./models/AcademicSession.model";
import { GUIDRef } from "./models/GUIDRef.model";

@Controller('academicSessions')
export class AcademicSessionController {

    @Get('/')
    findAll(): AcademicSession[] {

        let data = [];

        let sourcedId = GUID.get();

        let academicSession = new AcademicSession(
            sourcedId,
            StatusType.active,
            new Date(2022, 8, 4),
            "2022.2",
            new Date(2022, 6, 1),
            new Date(2022, 11, 31),
            SessionType.semester,
            new GUIDRef("academicSessions", sourcedId, GUIDType.academicSession),
            2022);

        data.push(academicSession);

        return data;
    }
}