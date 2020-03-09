interface OfferData {
    _id: String
    title: String
    id_company: String
    srcImgCompany: String
    company: String
    location: String
    start_date: String
    created_date: String
    sector: String
    type: String
    description: String
    remuneration: Number
    duration: String
    softSkills: String[]
    domains: String[]
    matchingScore: any
}

export class Offer {
    id: String;
    title: String = new String();
    company: String = new String();
    id_company: String = new String();
    srcImgCompany: String = new String();
    location: String = new String();
    start_date: String = new String();
    created_date: String = new String();
    sector: String = new String();
    type: String = new String();
    description: String = new String();
    remuneration: Number;
    duration: String = new String();
    softSkills: String[];
    domains: String[];
    matchingScore: any;

    fromHashMap(data: OfferData) {
        this.id = String(data._id);
        this.title = String(data.title);
        this.id_company = String(data.id_company);
        this.srcImgCompany = String(data.srcImgCompany);
        this.company = String(data.company);
        this.location = String(data.location);
        this.start_date = String(data.start_date);
        this.created_date = String(data.created_date);
        this.sector = String(data.sector);
        this.type = String(data.type);
        this.description = String(data.description);
        this.remuneration = Number(data.remuneration);
        this.duration = String(data.duration);
        this.softSkills = data.softSkills
        this.domains = data.domains
        this.matchingScore = data.matchingScore;
    }
}