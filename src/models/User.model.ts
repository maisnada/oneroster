import { RoleType } from "src/enums/RoleType.enum";
import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";
import { GUIDRef } from "./GUIDRef.model";

export class User extends Base {

    username: string;
    userIds: string;
    enabledUser: boolean;
    givenName: string;
    familyName: string;
    middleName: string;
    role: RoleType;
    identifier: string;
    email: string;
    sms: string;
    phone: string;
    agents: GUIDRef[];
    orgs: GUIDRef[];
    grades: string;
    password: string;

    constructor(
        sourcedId: string,
        status: StatusType,
        dateLastModified: Date,
        username: string,
        userIds: string,
        enabledUser: boolean,
        givenName: string,
        familyName: string,
        middleName: string,
        role: RoleType,
        identifier: string,
        email: string,
        sms: string,
        phone: string,
        agents: GUIDRef[],
        orgs: GUIDRef[],
        grades: string,
        password: string
    ) {

        super(sourcedId, status, dateLastModified);

        this.username = username;
        this.userIds = userIds;
        this.enabledUser = enabledUser;
        this.givenName = givenName;
        this.familyName = familyName;
        this.middleName = middleName;
        this.role = role;
        this.identifier = identifier;
        this.email = email;
        this.sms = sms;
        this.phone = phone;
        this.agents = agents;
        this.orgs = orgs;
        this.grades = grades;
        this.password = password;
    }
}