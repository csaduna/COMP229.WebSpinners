export class Ads {

    constructor(
        public _id?: string,
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

// For Adding:
// {
//     "size": { "l": 5, "w": 1, "uom": "INCHES" },
//     "item": "GLASSES",
//     "qty": 1,
//     "status": "AVAILABLE",
//     "desc": "PRE- LOVED ITEM"
// }