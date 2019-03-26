export interface ISurvey {
    id?: number;
}

export class Survey implements ISurvey {
    constructor(public id?: number) {}
}
