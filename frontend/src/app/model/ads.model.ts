export class Ads {

    constructor(
        public id?: number,
        public item?: string,
        public qty?: number,
        public status?: string,
        public desc?: string,
        public size?: Size       
    ) {}
    
}

export class Size {
    constructor(
        public l?: number,
        public w?: number,
        public uom?: string
    ){}
}