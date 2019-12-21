export class Filter {
    textInput : String = new String()
    type : String = new String()
    time : String = new String()
    domain : String = new String()


    print() {
        console.log("textInput: " + this.textInput)
        console.log("type: " + this.type)
        console.log("time: " + this.time)
        console.log("domain: " + this.domain)
    }

    toQuery(){
        var query="";
        query+= this.textInput!="" ? "textinput="+this.textInput+"&" : "";
        query+= this.type!="" ? "type="+this.type+"&" : "";
        query+= this.time!="" ? "type="+this.time+"&" : "";
        query+= this.domain!="" ? "domain="+this.domain+"&" : "";
        
        if (query!==""){
            query = query.slice(0,query.length-1)
        }
        return query
    }
}