interface OfferData {
    _id: String
    title: String
    id_company : Number
    srcImgCompany : String 
    company : String 
    location : String 
    start_date : Date
    created_date : Date
    sector : String
    type : String
    description : String
    remuneration : Number
    duration : String
    softSkills : String[]
    domains : String[]
    matchingScore: Number
}

export class Offer {
    id: String;
    title: String = new String();
    company : String = new String();
    id_company : Number;
    srcImgCompany : String = new String();
    location : String = new String();
    start_date : Date = new Date();
    created_date : Date = new Date();
    sector : String = new String();
    type : String = new String();
    description : String = new String();
    remuneration : Number;
    duration : String = new String();
    softSkills : String[];
    domains : String[];
    matchingScore: Number;

    fromHashMap(data: OfferData) {
        this.id = String(data._id);
        this.title = String(data.title);
        this.id_company = Number(data.id_company);
        this.srcImgCompany = String(data.srcImgCompany);
        this.company = String(data.company);
        this.location = String(data.location);
        this.start_date = data.start_date;
        this.created_date = data.created_date;
        this.sector = String(data.sector);
        this.type = String(data.type);
        this.description = String(data.description);
        this.remuneration = Number(data.remuneration);
        this.duration = String(data.duration);
        this.softSkills = data.softSkills
        this.domains = data.domains
        this.matchingScore = Number(data.matchingScore);        
    }
}