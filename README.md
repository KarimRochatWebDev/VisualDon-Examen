# VisualDon-Examen

1. Où vous avez trouvé les données

Toutes les données sont originaires de https://cneos.jpl.nasa.gov/ca/
J'aime l'astronomie. J'ai donc recherché des jeux de données concernant à peu près n'importe quoi concernant l'Univers, comme les planètes ou les galaxies. Mais certains jeux de données sont payants, d'autres demandent de se créer un compte, d'autres ne sont pas téléchargeables et d'autres encore contiennent des données que je comprends pas. Après quelques recherches, notamment par certaines sources de données proposées sur le repo GitHub du cours, j'ai finalement trouvé cette source concernant les astréroïdes dont les données sont très intéressantes et qui offre la possibilité de télécharger le jeu de données en CSV ou Excel.  

2. Comment vous les avez transformées

La transformation a été effectuée de manière identique à l'exercice "Asylum" fait lors d'un ancien cours.
J'ai créé un fichier d'initialisation de transformation, appelé prepareDonnees.js dans le répertoire data, dans lequel j'ai importé mon jeu de données au format CSV et que j'ai converti en format Json grâce à la méthode d3.csvParse. Puis, j'ai utilisé le module fs pour créer mon fichier Json contenant toutes les données converties grâce la méthode writeFileSync.

3. Quels choix vous avez faits et pourquoi

Il y a 5 données prioritaires que je veux absolument montrer sur ma visualisation : le nom, la vitesse, la date de passage, la distance et le diamètre des astéroïdes. Tout d'abord parce que ce sont des données primaires pour décrire un astéroïde. Quand on entend parler d'astéroïde, ces 5 informations sont celles qui viennent le plus spontanément à l'esprit. Et puis parce que puisque ce sont les informations les plus primaires, ce sont aussi celles les plus faciles à trouver. Je les ai aussi choisies parce qu'il est, à mon avis, facile de les distinguer sur une visualisation (expliqué au point 4).

4. Comment vous avez visualisé les données

Il y a un fichier "Visualisation.png" dans ce repo Git qui illustre la visualisation que je souhaitais avoir au début du projet. J'ai fait ce dessin pour représenter ce que j'espérais atteindre.

Je pensais représenter la distance sous forme de couleurs allant du bleu au rouge, parce que le jeu de couleur bleu-rouge est associé au "chaud-froid", bleu étant la couleur pour informer qu' on est loin d'un objet et rouge quand on s'en rapproche.  Si tous les noms des astéroïdes sont sur la visualisation, ça pourrait rendre le graphique très complexe et illisible, c'est pourquoi j'ai préféré ne les afficher que lors du passage de la souris sur les points. Le rayon du point est égal à son diamètre, parce que ça donne immédiatement un rapport de grandeur mathématique entre chaque point, et une idée de la taille réelle de l'astéroïde à l'échelle 1:1 en les comparant. La date m'a semblée idéale pour servir d'axe horizontal, afin d'utiliser un jeu de lecture gauche-droite, les astéroïdes sur la gauche de l'axe X étant les astéroïdes qui sont déjà passés, et ceux sur la droite les astéroïdes à venir. Pour terminer, il me rester la vitesse que j'ai assigné à l'axe vertical Y par défaut.

5. Une explication sur le choix du type de représentation

Etant donné que mon idée de départ était de visualiser une centaine de points, un nuage de point me semble simplement le meilleur moyen de représenter autant d'éléments. Je ne voulais pas non plus utiiser un graphique en bâtons parce que ça me semble trop "débutant", il s'agit de la première manière de visualisation que nous avons vue. J'ai voulu m'essayer à quelque chose de plus avancé. De plus, un graphique en camembert ou fait de lignes est utile pour représenter peu d'informations, mais je ne pense pas qu'ils m'auraient été pratique pour représenter l'ensemble de tout ce que je voulais montrer, de plus que nous ne les avons que très peu pratiqués durant les cours. De plus, le nuage de points est intéressant parce que chaque coordonnée (x,y) peut contenir un point, ce qui permet de créer un plan en 2D entièrement exploitable, contrairement aux bâtons qui commencent tous sur l'axe X, font tous la même largeur, ont tous le même espace entre eux (même si c'est modifiable, c'est basiquement comme ça que les bâtons sont représentés).

6. Ce que vous souhaitez démontrer

J'aimerais que les gens se rendent compte qu'il existe des nombreux astéroïdes dans le système solaire, selon certaines sources, environ 600'000, dont la majeure partie se situe dans la ceinture d'astéroïdes entre Mars et Jupiter et la ceinture de Kuiper au-delà de l'orbite de Neptune. Bien que nombreux, rares sont ceux qui s'aventurent proche de la Terre. Nous ne les percevons pas parce qu'ils passent à des milliers de kilomètres de nous (quasiment impossibles à voir à l'oeil nu, besoin d'un téléscope). Ma volonté était simplement de rendre les gens conscients, conscients que chaque jour des astéroïdes, certains mesurant plusieurs centaines de kilomètres, frôlent la Terre. Certains petits astéroïdes aussi tombent sur Terre, mais la chaleur générée lors de leur passage dans l'atmosphère les désintègre complètement.

7. Le publique cible

Ce graphique s'adresse aux gens qui aiment l'astronomie d'une manière générale, ou qui s'intéresse au ciel, à l'Univers, aux étoiles et aiment comprendre ce qui se passe autour de la Terre. Ces personnes peuvent aimer avoir un ressenti de "c'était pas passé loin" ou aiment connaître les dates de passage des futurs astéroïdes pour les observer. Il n'est pas nécessaire de posséder de grandes connaissances en astronomie pour comprendre mon graphique.