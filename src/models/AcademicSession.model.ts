import { Base } from "./Base.model";
import { SessionType } from "src/enums/SessionType.enum";
import { StatusType } from "src/enums/StatusType.enum";
import { GUIDRef } from "./GUIDRef.model";

export class AcademicSession extends Base {

    title: string;
    startDate: Date;
    endDate: Date;
    type: SessionType;
    parent: GUIDRef;
    children: GUIDRef[];
    schoolYear: number;

    constructor(
        sourcedId: string,
        status: StatusType,
        dateLastModified: Date,
        title: string,
        startDate: Date,
        endDate: Date,
        type: SessionType,
        parent: GUIDRef,
        schoolYear: number) {

        super(sourcedId, status, dateLastModified);

        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.parent = parent;
        this.schoolYear = schoolYear;
    }

    addChildren(guidRef: GUIDRef): void {

        this.children.push(guidRef);
    }
}