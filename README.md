# VisualDon-Examen

1. Où vous avez trouvé les données

Toutes les données sont originaires de https://cneos.jpl.nasa.gov/ca/
J'aime l'astronomie. J'ai donc recherché des jeux de données concernant à peu près n'importe quoi concernant l'Univers, comme les planètes ou les galaxies. Mais certains jeux de données sont payants, d'autres demandent de se créer un compte, d'autres ne sont pas téléchargeables et d'autres encore contiennent des données que je comprends pas. Après quelques recherches, notamment par certaines sources de données proposées sur le repo GitHub du cours, j'ai finalement trouvé cette source concernant les astréroïdes dont les données sont très intéressantes et qui offre la possibilité de télécharger le jeu de données en CSV ou Excel.  

2. Comment vous les avez transformées

La transformation a été effectuée de manière identique à l'exercice "Asylum" fait lors d'un ancien cours.
J'ai créé un fichier d'initialisation de transformation, appelé prepareDonnees.js dans le répertoire data, dans lequel j'ai importé mon jeu de données au format CSV et que j'ai converti en format Json grâce à la méthode d3.csvParse. Puis, j'ai utilisé le module fs pour créer mon fichier Json contenant toutes les données converties grâce la méthode writeFileSync.

3. Quels choix vous avez faits et pourquoi

4. Comment vous avez visualisé les données

Il y a un fichier "Visualisation.png" dans ce repo Git qui illustre la visualisation que je souhaitais avoir au début du projet. J'ai fait ce dessin pour représenter ce que j'espérais atteindre.

5. Une explication sur le choix du type de représentation

Etant donné que mon idée de départ était de visualiser une centaine de points, un nuage de point me semble simplement le meilleur moyen de représenter autant d'éléments. Je ne voulais pas non plus utiiser un graphique en bâtons parce que ça me semble trop "débutant", il s'agit de la première manière de visualisation que nous avons vue. J'ai voulu m'essayer à quelque chose de plus avancé. De plus, un graphique en camembert ou fait de lignes est utile pour représenter peu d'informations, mais je ne pense pas qu'ils m'auraient été pratique pour représenter l'ensemble de tout ce que je voulais montrer (vitesse, date, nom, distance, diamètre), de plus que nous ne les avons que très peu pratiqués durant les cours.

6. Ce que vous souhaitez démontrer

J'aimerais que les gens se rendent compte qu'il existe des nombreux astéroïdes dans le système solaire, selon certaines sources, environ 600'000, dont la majeure partie se situe dans la ceinture d'astéroïdes entre Mars et Jupiter et la ceinture de Kuiper au-delà de l'orbite de Neptune. Bien que nombreux, rares sont ceux qui s'aventurent proche de la Terre. Nous ne les percevons pas parce qu'ils passent à des milliers de kilomètres de nous (quasiment impossibles à voir à l'oeil nu, besoin d'un téléscope). Ma volonté était simplement de rendre les gens conscients, conscients que chaque jour des astéroïdes, certains mesurant plusieurs centaines de kilomètres, profôlent la Terre. Certains petits astéroïdes aussi tombent sur Terre, mais la chaleur générée lors de leur passage dans l'atmosphère les désintègre complètement.

7. Le publique cible

Ce graphique s'adresse aux gens qui aiment l'astronomie d'une manière générale, et aiment comprendre ce qui se passe autour de la Terre. Ces personnes peuvent aimer avoir un ressenti de "c'était pas passé loin" ou aiment connaître les dates de passage des futurs astéroïdes pour les observer parmis les étoiles. Il n'est pas nécessaire de posséder de grandes connaissances en astronomie pour comprendre mon graphique.