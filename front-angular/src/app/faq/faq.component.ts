import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  questions: string[] = ["Comment trouver un stage?",
  "Puis-je partir en stage avant la date déterminée par l’ECM ?",
  "Comment obtenir la validation pédagogique et demander votre convention de stage ?",
  "Mon entreprise souhaite utiliser sa convention de stage, est-ce possible ?",
  "Les stages sont-ils rémunérés ?",
  "Puis-je bénéficier d'aides financières pour mon stage?",
  "Comment trouver un tuteur de stage ?",
  "Comment mon stage est-il évalué par l'école ?",
  "Quels sont les objectifs du stage 1A ?",
  "Quelle est la durée du stage 1A ?",
  "Au sein de quels types de structures le stage 1A peut-il se dérouler ?",
  ""]

  answers: string[] = ["- En consultant les offres reçues par l'école\n- En se rendant au Service Relations Entreprises et Valorisation de la Recherche au plot 4.\n- En vous rapprochant des enseignants-chercheurs, des responsables de parcours 3A et de S8, des anciens élèves …\n- En envoyant des candidatures spontanées\n- En activant votre réseau de relations personnelles\n- En participant à des  forums entreprises (ex : forum FOCEEN …)\n- En profitant au mieux des nombreuses occasions d\'interaction avec des professionnels : conférences, tables rondes …\n- En échangeant avec les élèves des promotions précédentes et en consultant la base des stages des années antérieures (données TFE  données 2A, données 1A)",
  "Non. Les dates de départ en stage sont planifiées par l’école au regard des enseignements et des examens obligatoires. Aucune dérogation ne sera faite.",
  "Une fois votre stage trouvé, vous devez vous suivre la procédure décrite ici. Prévoyez trois semaines de délai entre le dépôt de vos informations sur le site et le départ en stage.",
  "Oui, mais il faut quand même suivre la procédure précédente et cocher que c’est votre entreprise qui éditera la convention. Elle devra alors l’envoyer  à mouna.mechta@centrale-marseille.fr pour les stages en entreprise ou sarah.mostefa@centrale-marseille.fr pour les stages en laboratoire, qui  se chargeront d’en vérifier la validité et de la faire signer par l\'école.",
  "Une gratification doit être versée aux stagiaires lorsque la durée du stage est supérieure à 2 mois consécutifs au sein d’un même organisme en France : entreprise, d’une administration publique, d’une assemblée parlementaire, d’une assemblée consultative, d’une association ou au sein de tout autre organisme d’accueil. Depuis le 1er décembre 2014, chaque période de 7 heures de présence effective, consécutives ou non est considérée comme équivalente à un jour de stage. De même, chaque période de 22 jours de présence effective consécutifs ou non, équivaut à 1 mois de stage.\nLe montant de la gratification versé au stagiaire doit être précisé dans la convention de stage.\nCe montant peut être fixé soit par la convention de branche ou l’accord professionnel étendu ou à défaut par décret.\nPour les conventions de stages conclues à compter du 1er septembre 2015 : Le montant horaire de la gratification sera fixé à 15% du plafond horaire de la Sécurité sociale. La gratification est versée mensuellement au stagiaire.",
  "Des bourses (PRAME) sont allouées par la Région pour les stages à l\'étranger sous certaines conditions. Toutes les informations utiles quant aux conditions et au dépôt du dossier sont disponibles sur le moodle des Relations Internationales de l\'école.\nDes gratifications de stage sont accordées par le Service Entreprise et Valorisation de la recherche pour des stages dans les laboratoires partenaires de l\'école. Vous trouverez les informations et les conditions dans ce document.",
  "Tous les enseignants de l’ECM peuvent potentiellement être tuteurs de stage. Pour le stage 1A, l’Ecole vous affectera un tuteur. Pour tous les autres stages,  il vous appartiendra  de vous rapprocher des enseignants de l’école afin de trouver un tuteur. Ce dernier étant amené à corriger le rapport et à assister à la soutenance, il est préférable qu’il travaille dans un domaine  proche du sujet du stage pour lequel il est sollicité.",
  "Pour tous les stages, vous devrez déposer votre rapport et la fiche d\'évaluation remplie par votre organisme d\'accueil à partir des informations de la rubrique:  Dépôt du rapport et de la fiche d\'évaluation. Pour les stages 2A, Césure et TFE, vous devrez également réaliser une soutenance en suivant les instructions de la rubrique : Réservation d\'un créneau de soutenance.\nL\'évaluation finale sera faite par votre tuteur école en fonction des notes de soutenance, de rapport et d’appréciation de l’entreprise.",
  "Le stage de 1A est un stage de découverte de l\'entreprise. Il doit permettre à l’élève de prendre contact avec le monde de l’entreprise dans des tâches d’exécution, sans être investi d’une quelconque autorité. Il est l’occasion pour lui d’enrichir son expérience professionnelle, de développer sa réflexion, de prendre conscience des contraintes socio- économiques auxquelles l’entreprise est soumise.",
  "Le stage de 1A est un stage obligatoire pour la validation de votre S6 (3 crédits ECTS), dont la durée est de 4 semaines minimum se déroulant entre juillet et août.",
  "Le stage de 1A doit se dérouler obligatoirement au sein d’une entreprise, en France ou à l’étranger.",]

  constructor() { }

  ngOnInit() {
  }

}
