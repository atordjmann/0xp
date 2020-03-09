module.exports = {
    matchingWithUser: function (offer,user,company,filter) {
        if(!user.isStudent){
            return -1;
        }

        //console.log(filter)
        // Soft Skills -- 20%
        // Type -- 15%
        // Duree -- 15%
        // Secteur -- 10%
        // Entreprise -- 10%
        // Lieu -- 5%
        // Partenaire -- 5%
        // Taille entreprise -- 5%
        // Date de publication -- 5%
        // Début souhaité -- 10%
        matchingRepartition={
            "soft":20,
            "type":15,
            "duree":15,
            "secteur":10,
            "entreprise":10,
            "lieu":5,
            "partenaire":5,
            "taille":5,
            "datePub":5,
            "dateStart":10
        }

        activeFilterPercent=0

        // Soft Skills
        //TODO : Implémenter une proximité dans les softs skills (par ex regarder les softskills souvent associés sur les offres)
        var match_softs = 0;
        if(offer.softSkills.length !== 0 & typeof user.softSkills != 'undefined' & user.softSkills !== null) {
            activeFilterPercent+=20
            var counter = 0;
            offer.softSkills.forEach((offer_skill) => {
                if (user.softSkills.includes(offer_skill)) {
                    counter+=1;
                }
            });
            match_softs = counter/offer.softSkills.length;
        }

        // Type 
        var match_type = 0;
        if(filter.type){
            activeFilterPercent+=15
            if(offer.type === filter.type){
                match_type = 1;
            }
        }

        // Duree
        var match_duree = 0;
        if(filter.duration){
            activeFilterPercent+=15
            if(offer.duration === filter.duration){
                match_duree = 1;
            }
        }


        // Secteur
        var match_secteur = 0;
        if(filter.sector){
            activeFilterPercent+=10
            if(offer.sector === filter.sector){
                match_secteur = 1;
            }
        }

        // Entreprise
        //TODO : Implémenter un pourcentage fonction des ressemblances des deux entreprises (Pourcentage d'offres dans les mêmes domaines par ex)
        var match_ent = 0;
        if(filter.company){
            activeFilterPercent+=10
            companies = filter["company"].split(";")
            companies.splice(-1, 1)
            if(companies.indexOf(offer.company)>-1){
                match_type = 1;
            }
        }

        // Lieu
        //TODO : Implémenter un pourcentage fonction de la distance aux lieux indiqués (prendre le minimum des distances)
        var match_lieu = 0;
        if(filter.location){
            activeFilterPercent+=5
            locations = filter["location"].split(";")
            locations.splice(-1, 1)
            if(locations.indexOf(offer.location)>-1){
                match_lieu = 1;
            }
        }


        // Partenaire
        var match_part = 0;
        if(filter.isPartner){
            activeFilterPercent+=5
            if(company.isPartner){
                match_part = 1;
            }
        } 
        
        // Taille entreprise
        var match_taille = 0;
        tailles = ["small", "medium", "large"]
        if(filter.companySize){
            activeFilterPercent+=5
            diff=Math.abs(tailles.indexOf(filter.companySize)-tailles.indexOf(company.companySize))
            match_part = 1-diff/2;
        } 

        /*
        // Date de publication
        var match_publi = 0;
        if(filter.created_date){
            activeFilterPercent+=5
            if(offer.created_date >= filter.created_date){
                match_publi = 1;
            }
        }*/

        // Début souhaité
        var match_debut = 0;
        if(filter.created_date){
            activeFilterPercent+=10
            let deltaTs = Math.abs(+offer.start_date-filter.start_date)
            //On considère qu'au bout de 6 mois de différence c'est un matching de 0
            match_debut=1-(max(deltaTs,1000*3600*24*30*6)/1000*3600*24*30*6)
        }

        //On calcule le pourcentage actif du filtre pour le ramener à 100% dans le calcul
        if(activeFilterPercent<20){
            return -1;
        }
        ratio=100/activeFilterPercent

        // Total
        //const matching = ratio*(20*match_softs + 15*match_type + 15*match_duree + 10*match_secteur + 10*match_ent + 5*match_lieu + 5*match_part + 5*match_taille + 5*match_publi + 5*match_debut);
        const matching = ratio*(matchingRepartition["soft"]*match_softs + matchingRepartition["type"]*match_type + matchingRepartition["duree"]*match_duree + matchingRepartition["secteur"]*match_secteur + matchingRepartition["entreprise"]*match_ent + matchingRepartition["lieu"]*match_lieu + matchingRepartition["partenaire"]*match_part + matchingRepartition["taille"]*match_taille + matchingRepartition["dateStart"]*match_debut);
        return matching;
    }
}