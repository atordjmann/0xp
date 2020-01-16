export class Filter {
    textInput : String = new String()
    type : String = new String()
    time : String = new String()
    sector : String = new String()
    location : String[];
    company : String[];
    isPartner : Boolean = false;
    publicationDate : String = new String();
    companySize : String = new String();
    dateFrom : Number;
    matchingMini : Number;
    remunMini : Number;


    print() {
        console.log("textInput: " + this.textInput)
        console.log("type: " + this.type)
        console.log("time: " + this.time)
        console.log("sector: " + this.sector)
    }

    toQuery(){
        var query="";
        query+= this.textInput!="" ? "textinput="+this.textInput+"&" : "";
        query+= this.type!="" ? "type="+this.type+"&" : "";
        query+= this.time!="" ? "type="+this.time+"&" : "";
        query+= this.sector!="" ? "sector="+this.sector+"&" : "";
        
        if (query!==""){
            query = query.slice(0,query.length-1)
        }
        return query
    }
}