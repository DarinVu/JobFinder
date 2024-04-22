export class Job{

    constructor(
        public position: string,
        public company: string,
        public location: string,
        public description: string,
        public requirements: Object[],
        public contact: string
    ) {}

    
}