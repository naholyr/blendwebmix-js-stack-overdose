# JS: Stack Overdose

Conférence BlendWebMix 2015 : JS, stack overdose!

## Brainstorm

### Idée générale

* Trop (?) d'outils pour les dévs JS (front principalement)
* Pourquoi ?
* Comment s'y retrouver ?

### Objectif

* Déculpabiliser ceux qui ne maîtrisent/connaissent pas tous les outils (on lâche un mois on est has-been)
* Débroussailler la masse des outils existant
* Pousser à simplifier sa stack avec des outils "multi-purpose"

### En vrac

* Gestionnaire de packages : bower, component, npm, jam, jspm…
* Task runners : grunt, gulp, npm
* Frameworks : angular, aurelia, backbone, react, mithril, baconjs…
* Librairies : jquery, ...?
* Optimisation : uglify, ...?
* Transpilation : babel, ...?

### Les problèmes

* Frénésie : difficulté à se tenir à jour
* Complexité : difficulté à démarrer un projet

### Les réponses

#### Se tenir à jour

* Les awesome-*
* Attention à challenger ses choix régulièrement
  * moment est très bien, mais sa mutabilité pose des soucis (côté serveur notamment)
  * async est très bien mais le terme "parallel" prète à confusion
  * q est très bien (hum, en fait non) mais un gouffre à perfs
* Ne pas hésiter à façader ses outils pour en changer facilement, ou choisir des outils avec spécifications claires (standards, cf. Babel)

#### Démarrer un projet

Les phases d'un projet :

* Le développement
  * Recherche et intégration de briques tierces
  * Production de code
* La production du code final
  * Transpilation / Compilation
  * Optimisations
* Tests
* Déploiement

##### Avant

* Pas ou peu de briques tierces
  * On réinvente la route :(
* On produit directement le code final
  * On doit gérer les différences entre plateformes :(
  * On n'a pas le droit à de super sucres syntaxiques dont on rêve la nuit :(
* Pas ou peu d'optimisations
  * C'est paaaaaaas bien
* Pas ou peu de tests
  * C'est paaaaaaas bien
* Déploiement manuel
  * Le bon vieux copier/coller avec Filezilla
  * Qui ne s'est pas déjà planté de dossier ?

##### Maintenant

On tend à vouloir améliorer/optimiser chaque tâche

* Don't Reinvent The Wheel : très bien, mais beaucoup de dépendances à gérer → bien s'équiper !
* ES6 / ES7 : super mais tout le monde est-il à jour dans l'équipe ?
* Optimisations : automatiser avec la phase de transpilation, mais que pour la prod pour ne pas gêner le débuggage en dev → bien s'équiper !
* Tests : hum, sans commentaire
* Déploiement : déployer en une commande simple = plus d'erreurs → encore des outils !!

### Points clé

* Darwinisme : si on a le temps, tester, sinon laisser faire le temps et la sélection naturelle
* Simplification : limiter la quantité d'outils, éviter de trop mixer les technologies (Ruby + Python + Node + Java + .... Aaaaaaaargl)
* Pragmatisme : ces outils sont souvent bons et très souvent utiles, mais pas dans tous les contextes/projets/équipes
* C'était mieux avant ? non, c'était moins bien, mais ça marchait quand-même

## Plan

* Constat web dev : beaucoup d'outils, trop ?
* C'était mieux avant ?
  * FTP vs. push to deploy
  * Git vs. zips par mail
  * Plutôt des améliorations, mais est-ce vrai côté JS ?
* Et côté JavaScript ?
  * Librairies
    * jQuery / Zepto
    * Moment
    * Lodash / Underscore
    * D'autres ?
  * Frameworks
    * AngularJS
    * ReactJS
    * RxJS
    * Backbone
    * Ember
    * D'autres ?
  * Outils de dév
    * Package manager : Bower / JSPM / Component / npm
    * Task runner : Gulp / Grunt / npm
    * Transformation : Babel / Uglify
    * D'autres ?
  * Time to clean up!
* On se noie dans un verre d'eau ?
  * Librairies / Frameworks : choix dépend du projet, du moment
  * Outils de dév : arrêter l'empilement, retour aux basiques efficaces !
* De nouvelles métriques
  * Pour la veille : rapport "nouveauté du paradigme" * "clarté de la documentation"
  * Pour les outils : rapport "service" / "complexité"
  * De manière générale : rapport "amélioration du quotidien" / "complexité"
* Ne perdez pas votre temps à tout explorer !
* Ne culpabilisez pas !
