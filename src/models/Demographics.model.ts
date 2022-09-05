import { GenderType } from "src/enums/GenderType.enum";
import { StatusType } from "src/enums/StatusType.enum";
import { Base } from "./Base.model";

export class Demographics extends Base {

    birthDate: Date;
    sex: GenderType;
    americanIndianOrAlaskaNative: boolean;
    asian: boolean;
    blackOrAfricanAmerican: boolean;
    nativeHawaiianOrOtherPacificIslander: boolean;
    white: boolean;
    demographicRaceTwoOrMoreRaces: boolean;
    hispanicOrLatinoEthnicity: boolean;
    countryOfBirthCode: string;
    stateOfBirthAbbreviation: string;
    cityOfBirth: string;
    publicSchoolResidenceStatus: string;

    constructor(
        sourcedId: string,
        status: StatusType,
        dateLastModified: Date,
        birthDate: Date,
        sex: GenderType,
        americanIndianOrAlaskaNative: boolean,
        asian: boolean,
        blackOrAfricanAmerican: boolean,
        nativeHawaiianOrOtherPacificIslander: boolean,
        white: boolean,
        demographicRaceTwoOrMoreRaces: boolean,
        hispanicOrLatinoEthnicity: boolean,
        countryOfBirthCode: string,
        stateOfBirthAbbreviation: string,
        cityOfBirth: string,
        publicSchoolResidenceStatus: string
    ) {

        super(sourcedId, status, dateLastModified);

        this.birthDate = birthDate;
        this.sex = sex;
        this.americanIndianOrAlaskaNative = americanIndianOrAlaskaNative;
        this.asian = asian;
        this.blackOrAfricanAmerican = blackOrAfricanAmerican;
        this.nativeHawaiianOrOtherPacificIslander = nativeHawaiianOrOtherPacificIslander;
        this.white = white;
        this.demographicRaceTwoOrMoreRaces = demographicRaceTwoOrMoreRaces;
        this.hispanicOrLatinoEthnicity = hispanicOrLatinoEthnicity;
        this.countryOfBirthCode = countryOfBirthCode;
        this.stateOfBirthAbbreviation = stateOfBirthAbbreviation;
        this.cityOfBirth = cityOfBirth;
        this.publicSchoolResidenceStatus = publicSchoolResidenceStatus;

    }
}