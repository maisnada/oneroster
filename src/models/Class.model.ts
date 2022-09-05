import { classType } from "src/enums/ClassType.enum";
import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";
import { GUIDRef } from "./GUIDRef.model";

export class Class extends Base {

    title: string;
    classCode: string;
    classType: classType;
    location: string;
    grades: string;
    subjects: string;
    course: GUIDRef;
    school: GUIDRef;
    terms: GUIDRef;
    subjectCodes: string;
    periods: string;
    resources: GUIDRef;

    constructor(
        sourcedId: string,
        status: StatusType,
        dateLastModified: Date,
        title: string,
        classCode: string,
        classType: classType,
        location: string,
        grades: string,
        subjects: string,
        course: GUIDRef,
        school: GUIDRef,
        terms: GUIDRef,
        subjectCodes: string,
        periods: string,
        resources: GUIDRef) {

        super(sourcedId, status, dateLastModified);

        this.title = title;
        this.classCode = classCode;
        this.classType = classType;
        this.location = location;
        this.grades = grades;
        this.subjects = subjects;
        this.course = course;
        this.school = school;
        this.terms = terms;
        this.subjectCodes = subjectCodes;
        this.periods = periods;
        this.resources = resources;
    }
}