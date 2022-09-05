import { RoleType } from "src/enums/RoleType.enum";
import { GUIDRef } from "./GUIDRef.model";

export class Enrollment {

    user: GUIDRef;
    class: GUIDRef;
    school: GUIDRef;
    role: RoleType;
    primary: boolean;
    beginDate: Date;
    endDate: Date;

    constructor(user: GUIDRef, classes: GUIDRef, school: GUIDRef, role: RoleType, primary: boolean, beginDate: Date, endDate: Date) {

        this.user = user;
        this.class = classes;
        this.school = school;
        this.role = role;
        this.primary = primary;
        this.beginDate = beginDate;
        this.endDate = endDate;
    }

}