import { StatusType } from "src/enums/StatusType.enum";
import { TSMap } from "typescript-map"

export abstract class Base {

    sourcedId: string;
    status: StatusType;
    dateLastModified: Date;
    metadata: TSMap<string, string | number>;

    constructor(sourcedId: string, status: StatusType, dateLastModified: Date) {

        this.sourcedId = sourcedId;
        this.status = status;
        this.dateLastModified = dateLastModified;

        this.metadata = new TSMap<string, string | number>([
            ["classification", "private"],
            ["year", 2022]
        ]);
    }

}