import { RoleType } from "src/enums/RoleType.enum";
import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";
import { GUIDRef } from "./GUIDRef.model";

export class Enrollment extends Base {

    user: GUIDRef;
    class: GUIDRef;
    school: GUIDRef;
    role: RoleType;
    primary: boolean;
    beginDate: Date;
    endDate: Date;

    constructor(
        sourcedId: string,
        status: StatusType,
        dateLastModified: Date,
        user: GUIDRef,
        classe: GUIDRef,
        school: GUIDRef,
        role: RoleType,
        primary: boolean,
        beginDate: Date,
        endDate: Date) {

        super(sourcedId, status, dateLastModified);

        this.user = user;
        this.class = classe;
        this.school = school;
        this.role = role;
        this.primary = primary;
        this.beginDate = beginDate;
        this.endDate = endDate;
    }

}