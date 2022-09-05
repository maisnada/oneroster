import { v4 as uuid } from 'uuid';

export class GUID {

    static get(): string {

        return uuid();
    }
}

