module.exports = {
    matchingWithUser: function (offer,user,filters) {
        console.log("Matching with User :");
        console.log(filters)

        if(!user.isStudent){
            return '--'
        }

        var matching = 0;

        // Soft Skills -- 20%
        var match_softs = 0;
        
        
        if(offer.softSkills.length !== 0 & typeof user.softSkills != 'undefined' & user.softSkills !== null) {
            var counter = 0;
            offer.softSkills.forEach((offer_skill) => {
                if (user.softSkills.includes(offer_skill)) {
                    counter ++;
                }
            });

            match_soft = Math.trunc(20*(counter/offer.softSkills.length));
        }
        

        // Type -- 15%
        var match_type = 0;
        if(filters.type !== null){
            if(offer.type === filters.type){
                match_type = 15;
            }
        }

        // Duree -- 15%
        var match_duree = 0;
        if(filters.duration !== null){
            if(offer.duration === filters.duration){
                match_duree = 15;
            }
        }


        // Secteur -- 10%
        var match_secteur = 0;
        if(filters.sector !== null){
            if(offer.type === filters.type){
                match_secteur = 15;
            }
        }

        // Entreprise -- 10%
        var match_ent = 0;
        if(filters.company !== null){
            if(offer.company === filters.company){
                match_type = 10;
            }
        }

        // Lieu -- 5%
        var match_lieu = 0;
        if(filters.location !== null){
            if(offer.location === filters.location){
                match_lieu = 5;
            }
        }


        // Partenaire -- 5%
        var match_part = 0;
            // A FAIRE : Link offer et company


        // Taille entreprise -- 5%
        var match_taille = 0;
            // A FAIRE : Link offer et company

        // Date de publication -- 5%
        var match_publi = 0;


        // Début souhaité -- 10%
        var match_debut = 0;


        // Total
        matching = match_softs + match_type + match_duree + match_secteur + match_ent + match_lieu + match_part + match_taille + match_publi + match_debut;

        console.log(matching);
        return matching;
    }
}