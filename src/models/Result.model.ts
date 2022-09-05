import { ScoreStatusType } from "src/enums/ScoreStatusType.enum";
import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";
import { GUIDRef } from "./GUIDRef.model";

export class Result extends Base {

    lineItem: GUIDRef;
    student: GUIDRef;
    scoreStatus: ScoreStatusType;
    score: bigint;
    scoreDate: Date;
    comment: string;

    constructor(
        sourcedId: string,
        status: StatusType,
        dateLastModified: Date,
        lineItem: GUIDRef,
        student: GUIDRef,
        scoreStatus: ScoreStatusType,
        score: bigint,
        scoreDate: Date,
        comment: string
    ) {

        super(sourcedId, status, dateLastModified);

        this.lineItem = lineItem;
        this.student = student;
        this.scoreStatus = scoreStatus;
        this.score = score;
        this.scoreDate = scoreDate;
        this.comment = comment;
    }
}