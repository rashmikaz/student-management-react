export class ProgramModel {

    program_name: string;
    duration: string;
    cost: string;
    sutable: string;


    constructor(program_name: string, duration: string, cost: string, sutable: string) {
        this.program_name = program_name;
        this.duration = duration;
        this.cost = cost;
        this.sutable = sutable;
    }
}