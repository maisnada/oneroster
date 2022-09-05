import { ImportanceType } from "src/enums/ImportanceType.enum";
import { RoleType } from "src/enums/RoleType.enum";
import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";

export class Resource extends Base {

    title: string;
    roles: RoleType;
    importance: ImportanceType;
    vendorResourceId: string;
    vendorId: string;
    applicationId: string;

    constructor(
        sourcedId: string,
        status: StatusType,
        dateLastModified: Date,
        title: string,
        roles: RoleType,
        importance: ImportanceType,
        vendorResourceId: string,
        vendorId: string,
        applicationId: string
    ) {

        super(sourcedId, status, dateLastModified);

        this.title = title;
        this.roles = roles;
        this.importance = importance;
        this.vendorResourceId = vendorResourceId;
        this.vendorId = vendorId;
        this.applicationId = applicationId;
    }
}