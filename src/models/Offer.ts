interface OfferData {
    id: Number
    title: String
    srcImgCompany : String 
    company : String 
    location : String 
    date : Date 
    domain : String
    type : String
}

export class Offer {
    id: Number;
    title: String = new String();
    srcImgCompany : String = new String();
    company : String = new String();
    location : String = new String();
    date : Date = new Date()
    domain : String = new String();
    type : String = new String();


    print() {
        console.log("id: " + this.id)
        console.log("title: " + this.title)
        console.log("srcImgCompany: " + this.srcImgCompany)
        console.log("company: " + this.company)
        console.log("location: " + this.location)
        console.log("date: " + this.date)
        console.log("domain: " + this.domain)
        console.log("type: " + this.type)
    }

    fromHashMap(data: OfferData) {
        this.id = Number(data.id);
        this.title = String(data.title);
        this.srcImgCompany = String(data.srcImgCompany);
        this.company = String(data.company);
        this.location = String(data.location);
        this.date = data.date;
        this.domain = String(data.domain);
        this.type = String(data.type);
    }
}