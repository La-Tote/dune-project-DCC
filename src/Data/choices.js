const choices = [
  {
    "choix_id": 1,
    "choix_text_info": "Je laisse la nature faire, la dune se reconstruira toute seule avec le vent et la marée.",
    "choix_text_consequence": "C'est vrai : certaines dunes naturelles se reconstruisent seules par l’effet de la marée et du vent. Mais ce n'est pas le cas des vôtres : l'urbanisme de la ville a impacté leur processus naturel de \"ré-engraissement\".",
    "fin_value": "",
    "pol_value": "",
    "env_value": "",
    "com_1_perso_id": "Leila Al' Ahune",
    "com_1_quote": "Cette idée de laisser faire la nature cache-t-elle un manque de volonté de la part de notre futur édile ?",
    "com_2_perso_id": "Olivier Dubois",
    "com_2_quote": "L'écosystème de la dune est dans un état critique, vous devez agir !",
    "com_3_perso_id": "Pierre Tombé",
    "com_3_quote": "Je suis d'accord avec vous, les écolos qui protégent trop le littoral font fuir les jeunes actifs de notre belle ville."
  },
  {
    "choix_id": 2,
    "choix_text_info": "Je décide de prendre des mesures immédiates pour protéger les dunes.",
    "choix_text_consequence": "Bravo, votre prise de décision rassure, les électeurs vous êtes élu maire de Dune-Les-Bains ! Ainsi, les dunes dites grises ont perdu un tiers de leur surface entre 1997 et 2021 sous l'effet du changement climatique, mais aussi de l'activité humaine (ONF). Or, elles participent à la protection du littoral. En 2024, le gouvernement a identifié 500 communes françaises menacées par la montée du niveau de la mer et l'érosion des côtes.",
    "fin_value": "",
    "pol_value": "",
    "env_value": "",
    "com_1_perso_id": "Jeanne Quidam",
    "com_1_quote": "Voir disparaître les dunes de mon enfance me fait mal au coeur. Ne peut-on rien faire ?",
    "com_2_perso_id": "Leila Al' Ahune",
    "com_2_quote": "En France, près d’un quart du littoral s’érode. La puissance publique a une part de responsabilité.",
    "com_3_perso_id": "Olivier Dubois",
    "com_3_quote": "La loi Littoral ne va pas assez loin pour protéger nos côtes."
  },
  {
    "choix_id": 3,
    "choix_text_info": "J'interdis complètement l'accès aux dunes.",
    "choix_text_consequence": "Votre action a limité les dégâts et les dunes commencent à se régénérer. Ce processus prendra des années et sera toujours impacté par les tempêtes.",
    "fin_value": -10,
    "pol_value": -20,
    "env_value": 20,
    "com_1_perso_id": "Pierre Tombé",
    "com_1_quote": "Les touristes ne peuvent plus venir à la plage, du coup ? Bravo les retombées économiques...",
    "com_2_perso_id": "Jeanne Quidam",
    "com_2_quote": "J'ai passé mon enfance à jouer dans ces dunes ! De quel droit m'interdit-on d'y aller ?",
    "com_3_perso_id": "Leila Al' Ahune",
    "com_3_quote": "Quelques panneaux explicatifs n'auraient pas été de trop pour informer les habitants."
  },
  {
    "choix_id": 4,
    "choix_text_info": "Je fais poser des protections contre le vent.",
    "choix_text_consequence": "En l’espace de 75 ans, le cordon dunaire Saint-Jean-le-Thomas a reculé de plus de 500 m. Une érosion accélérée par des tempêtes, comme Eleanor en 2018. Palissades et pieux permettent, en fonction des cas, de retenir le sable des dunes.",
    "fin_value": -20,
    "pol_value": 10,
    "env_value": 10,
    "com_1_perso_id": "Olivier Dubois",
    "com_1_quote": "Ces palissades et pieux s'appellent en réalité des fascines et des ganivelles si l'on veut être précis.",
    "com_2_perso_id": "Pierre Tombé",
    "com_2_quote": "Sinon, on peut aussi construire une bonne digue bien solide !",
    "com_3_perso_id": "Jeanne Quidam",
    "com_3_quote": "On pourrait faire comme certaines communes normandes et replanter nos sapins de Noël usagés !"
  },
  {
    "choix_id": 5,
    "choix_text_info": "Je limite l'accès aux dunes par des chemins réservés.",
    "choix_text_consequence": "De nombreuses communes limitent l'accès aux dunes. Cette mesure doit être accompagnée d'une campagne d'information pour sensibiliser le public. Au Touquet, depuis 2022, le public est interdit dans les 220 hectares du massif dunaire pendant la course motorisée annuelle de la ville.",
    "fin_value": 5,
    "pol_value": 20,
    "env_value": -10,
    "com_1_perso_id": "Leila Al' Ahune",
    "com_1_quote": "La police municipale va-t-elle devoir faire des rondes dans les dunes pour surveiller les promeneurs ?",
    "com_2_perso_id": "Olivier Dubois",
    "com_2_quote": "Les piétons déchaussent les touffes d‘oyat, une \"plante fixatrice\" qui empêche le vent d'éroder la dune .",
    "com_3_perso_id": "Pierre Tombé",
    "com_3_quote": "Quelle sera la prochaine étape ? Déménager le parking ? Quid des personnes à mobilité réduite ?"
  },
  {
    "choix_id": 6,
    "choix_text_info": "Je construis un ponton en hauteur qui passe par-dessus des dunes.",
    "choix_text_consequence": "Cette \"estacade\" a un coût certain mais permet de préserver à la fois les dunes et l'accès à la plage, donc le tourisme.",
    "fin_value": -30,
    "pol_value": 20,
    "env_value": 0,
    "com_1_perso_id": "Jeanne Quidam",
    "com_1_quote": "On dirait un tapis volant !",
    "com_2_perso_id": "Leila Al' Ahune",
    "com_2_quote": "Vu d'en haut, on se rend mieux compte de la beauté fragile de ces dunes.",
    "com_3_perso_id": "Olivier Dubois",
    "com_3_quote": "Votre initiative a renforcé l'attractivité de la ville sans nuire à l'environnement. Bravo !"
  },
  {
    "choix_id": 7,
    "choix_text_info": "Je réensable les dunes.",
    "choix_text_consequence": "Ramener du sable sur une dune abîmée est une mesure d'urgence pour ralentir l’érosion.",
    "fin_value": -30,
    "pol_value": 0,
    "env_value": 10,
    "com_1_perso_id": "Pierre Tombé",
    "com_1_quote": "Ne vous inquiétez pas, je vous assure que ça marche. La Pointe du Cap Ferret a déjà autorisé l'ajout de 10 000 mètres cubes de sable sur la dune de la Pointe océane.",
    "com_2_perso_id": "Olivier Dubois",
    "com_2_quote": "Pas sûr que ce soit la première chose à faire...",
    "com_3_perso_id": "Jeanne Quidam",
    "com_3_quote": "Euh... Il faudra faire ça tous les ans ?"
  },
  {
    "choix_id": 8,
    "choix_text_info": "Je vais plutôt demander un diagnostic à l'Office national des forêts.",
    "choix_text_consequence": "L'ONF gère 378 km de dunes domaniales par an sur la façade atlantique pour le compte de l'Etat. Ses spécialistes vous recommandent de commencer par poser des dispositifs de protection contre le vent et de limiter le piétinement des plantes dunaires.",
    "fin_value": 0,
    "pol_value": -10,
    "env_value": 30,
    "com_1_perso_id": "Olivier Dubois",
    "com_1_quote": "On a fait un Guide de la gestion des dunes très complet, n'hésitez pas à le lire !",
    "com_2_perso_id": "Jeanne Quidam",
    "com_2_quote": "Pendant que vous tergiversez, nos belles dunes disparaissent...",
    "com_3_perso_id": "Leila Al' Ahune",
    "com_3_quote": "Pourquoi ce diagnostic n'a-t-il pas été réalisé plus tôt ?"
  }
];

export default choices;
