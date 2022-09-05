import { OrgType } from "src/enums/OrgType.enum";
import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";
import { GUIDRef } from "./GUIDRef.model";

export class Org extends Base {

    name: string;
    type: OrgType;
    identifier: string;
    parent: GUIDRef;
    children: GUIDRef;

    constructor(sourcedId: string, status: StatusType, dateLastModified: Date, name: string, type: OrgType, identifier: string, parent: GUIDRef, children: GUIDRef) {

        super(sourcedId, status, dateLastModified);

        this.name = name;
        this.type = type;
        this.identifier = identifier;
        this.parent = parent;
        this.children = children;
    }
}