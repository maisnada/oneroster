import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";
import { GUIDRef } from "./GUIDRef.model";

export class Course extends Base {

    title: string;
    schoolYear: GUIDRef;
    courseCode: string;
    grades: string;
    subjects: string;
    org: GUIDRef;
    subjectCodes: string;
    resources: GUIDRef;

    constructor(
        sourcedId: string,
        status: StatusType,
        dateLastModified: Date,
        title: string,
        schoolYear: GUIDRef,
        courseCode: string,
        grades: string,
        subjects: string,
        org: GUIDRef,
        subjectCodes: string,
        resources: GUIDRef) {

        super(sourcedId, status, dateLastModified);

        this.title = title;
        this.schoolYear = schoolYear;
        this.courseCode = courseCode;
        this.grades = grades;
        this.subjects = subjects;
        this.org = org;
        this.subjectCodes = subjectCodes;
        this.resources = resources;
    }
}