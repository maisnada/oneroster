import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";

export class Category extends Base {

    title: string;

    constructor(sourcedId: string, status: StatusType, dateLastModified: Date, title: string) {

        super(sourcedId, status, dateLastModified);

        this.title = title;
    }
}