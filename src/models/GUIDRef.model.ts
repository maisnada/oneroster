import { GUIDType } from "src/enums/GUIDType.enum";

export class GUIDRef {

    href: string;
    sourcedId: string;
    type: GUIDType;

    constructor(href: string, sourcedId: string, type: GUIDType) {

        this.href = `${process.env.BASE_URL}/${href}/${sourcedId}`;
        this.sourcedId = sourcedId;
        this.type = type;
    }
}



