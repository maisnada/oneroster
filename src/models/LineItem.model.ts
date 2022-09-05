import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";
import { GUIDRef } from "./GUIDRef.model";

export class LineItem extends Base {

    title: string;
    description: string;
    assignDate: Date;
    dueDate: Date;
    class: GUIDRef;
    category: GUIDRef;
    gradingPeriod: GUIDRef;
    resultValueMin: bigint;
    resultValueMax: bigint;

    constructor(
        sourcedId: string,
        status: StatusType,
        dateLastModified: Date,
        title: string,
        description: string,
        assignDate: Date,
        dueDate: Date,
        classe: GUIDRef,
        category: GUIDRef,
        gradingPeriod: GUIDRef,
        resultValueMin: bigint,
        resultValueMax: bigint
    ) {

        super(sourcedId, status, dateLastModified);

        this.title = title;
        this.description = description;
        this.assignDate = assignDate;
        this.dueDate = dueDate;
        this.class = classe;
        this.category = category;
        this.gradingPeriod = gradingPeriod;
        this.resultValueMin = resultValueMin;
        this.resultValueMax = resultValueMax;
    }
}