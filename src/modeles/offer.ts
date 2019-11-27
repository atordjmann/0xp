interface OfferData {
    id: Number
    title: String
}

export class Offer {
    id: Number;
    title: String = new String();

    constructor(id: Number, title: String) {
        this.id = id;
        this.title = title;
    }
    print() {
        console.log("id: " + this.id)
        console.log("title: " + this.title)
    }

    fromHashMap(data: OfferData) {
        this.id = Number(data.id);
        this.title = String(data.title);
    }
}