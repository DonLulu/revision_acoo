import { useState, useEffect } from "react";

const allQuestions = [
  {
    question: "Quel est l’objectif principal de la vue logique ?",
    options: ["Modéliser l’installation du système", "Gérer les flux réseau", "Décrire ce que fait le système", "Afficher les signaux système"],
    answer: "Décrire ce que fait le système"
  },
  {
    question: "Quels types de diagrammes sont typiquement utilisés dans la vue logique ?",
    options: ["Diagramme de classes, cas d’utilisation, objet", "Diagramme de composants et packages", "Diagramme de déploiement uniquement", "Diagramme de timing et collaboration"],
    answer: "Diagramme de classes, cas d’utilisation, objet"
  },
  {
    question: "La vue des composants répond à la question :",
    options: ["Comment est installé le système ?", "Quels sont les besoins utilisateurs ?", "Comment est assemblé le système ?", "Quels sont les processus métier ?"],
    answer: "Comment est assemblé le système ?"
  },
  {
    question: "Quels sont les deux diagrammes principaux de la vue des composants ?",
    options: ["Diagramme de séquence et d'activité", "Diagramme de packages et de composants", "Diagramme d’objet et d’états", "Diagramme de collaboration et de structure composite"],
    answer: "Diagramme de packages et de composants"
  },
  {
    question: "Quel est le rôle de la vue des processus ?",
    options: ["Définir les besoins utilisateurs", "Montrer les dépendances réseau", "Décrire comment le système fonctionne dynamiquement", "Afficher la structure des fichiers"],
    answer: "Décrire comment le système fonctionne dynamiquement"
  },
  {
    question: "Quel diagramme est typiquement associé à la vue des processus ?",
    options: ["Diagramme de déploiement", "Diagramme d’activité", "Diagramme de classes", "Diagramme d’objet"],
    answer: "Diagramme d’activité"
  },
  {
    question: "La vue physique se concentre sur :",
    options: ["L’interface utilisateur", "Le code source", "Le déploiement physique du système", "Le comportement dynamique"],
    answer: "Le déploiement physique du système"
  },
  {
    question: "Quel diagramme est lié à la vue physique ?",
    options: ["Diagramme de séquence", "Diagramme de timing", "Diagramme de déploiement", "Diagramme de classes"],
    answer: "Diagramme de déploiement"
  },
  {
    question: "Quelle vue n’est pas une des 4 vues structurelles mais les relie toutes ?",
    options: ["Vue logicielle", "Vue d’interaction", "Vue des besoins utilisateurs", "Vue de l'architecture système"],
    answer: "Vue des besoins utilisateurs"
  },
  {
    question: "Pourquoi parle-t-on de « 4+1 » vues ?",
    options: ["Car il y a 4 types de diagrammes UML utilisés", "Parce que la dernière vue est transversale et relie les autres", "C’est une convention Java", "Les 5 vues sont indépendantes"],
    answer: "Parce que la dernière vue est transversale et relie les autres"
  },  
  {
    question: "Quel est le rôle principal d’un diagramme d’activité ?",
    options: ["Afficher des classes", "Modéliser les interfaces", "Décrire un processus métier dynamique", "Représenter une base de données"],
    answer: "Décrire un processus métier dynamique"
  },
  {
    question: "Quelle est la différence entre une composition et une agrégation ?",
    options: ["Elles sont identiques", "La composition implique une dépendance forte", "L’agrégation détruit l’objet parent", "La composition est optionnelle"],
    answer: "La composition implique une dépendance forte"
  },
  {
    question: "Quelle est la syntaxe UML d’une association bidirectionnelle ?",
    options: ["<>", "<->", "Une ligne avec deux flèches", "Une ligne simple sans flèches"],
    answer: "Une ligne simple sans flèches"
  },
  {
    question: "Un message asynchrone dans un diagramme de séquence est représenté par :",
    options: ["Une flèche pleine", "Une flèche en pointillés", "Une flèche simple", "Une double flèche"],
    answer: "Une flèche simple"
  },
  {
    question: "Le diagramme de cas d’utilisation est utilisé lors de la phase :",
    options: ["Conception", "Test", "Spécification fonctionnelle", "Déploiement"],
    answer: "Spécification fonctionnelle"
  },
  {
    question: "Quel stéréotype représente la logique métier d’un UC ?",
    options: ["<<entity>>", "<<boundary>>", "<<control>>", "<<service>>"],
    answer: "<<control>>"
  },
  {
    question: "Un use case généralise un autre lorsqu’il :",
    options: ["Est plus spécifique", "Est inclus", "Est optionnel", "Est répété"],
    answer: "Est plus spécifique"
  },
  {
    question: "Que signifie l’acronyme UML ?",
    options: ["Unified Machine Language", "Universal Modeling Language", "Unified Modeling Language", "User Modeling Language"],
    answer: "Unified Modeling Language"
  },
  {
    question: "Quel symbole représente la visibilité privée en UML ?",
    options: ["+", "#", "-", "~"],
    answer: "-"
  },
  {
    question: "Les swimlanes servent à :",
    options: ["Gérer les classes", "Répartir les responsabilités entre rôles", "Dessiner les interfaces", "Définir des packages"],
    answer: "Répartir les responsabilités entre rôles"
  },
  {
    question: "Une opération UML représente :",
    options: ["Un attribut", "Une méthode", "Une relation", "Un signal"],
    answer: "Une méthode"
  },
  {
    question: "Un signal UML est :",
    options: ["Un événement synchrone", "Une condition de boucle", "Un élément statique", "Un message asynchrone"],
    answer: "Un message asynchrone"
  },
  {
    question: "Un use case stratégique se caractérise par :",
    options: ["Durée très courte", "Processus critique transverse", "Fonction technique unique", "Vue objet directe"],
    answer: "Processus critique transverse"
  },
  {
    question: "Une partition dans un diagramme d’activité est :",
    options: ["Un type d’objet", "Un scénario", "Une swimlane", "Un signal UML"],
    answer: "Une swimlane"
  },
  {
    question: "Une dépendance UML indique :",
    options: ["Un héritage", "Une association dynamique", "Une utilisation ponctuelle", "Un message entre objets"],
    answer: "Une utilisation ponctuelle"
  },
  {
    question: "Un `alt` dans un diagramme de séquence est utilisé pour :",
    options: ["Afficher un signal", "Montrer une boucle", "Gérer une alternative", "Créer un objet"],
    answer: "Gérer une alternative"
  },
  {
    question: "Quel diagramme est le plus adapté à la modélisation d’un algorithme métier ?",
    options: ["Diagramme de classe", "Diagramme de composants", "Diagramme d’activité", "Diagramme de packages"],
    answer: "Diagramme d’activité"
  },
  {
    question: "Un diagramme d’activité commence généralement par :",
    options: ["Un événement", "Un signal", "Une condition", "Un nœud initial"],
    answer: "Un nœud initial"
  },
  {
    question: "L’abstraction en POO consiste à :",
    options: ["Masquer les comportements", "Cacher les objets inutiles", "Représenter uniquement l’essentiel", "Supprimer les héritages"],
    answer: "Représenter uniquement l’essentiel"
  },
  {
    question: "La modularité permet de :",
    options: ["Simplifier le code", "Séparer les responsabilités", "Regrouper les acteurs", "Créer des cas d’utilisation"],
    answer: "Séparer les responsabilités"
  },
  {
    question: "Quel type d’interaction est représenté par une flèche simple dans un diagramme de séquence ?",
    options: ["Message asynchrone", "Message synchrone", "Création d'objet", "Réponse"],
    answer: "Message synchrone"
  },
  {
    question: "Un diagramme de classe ne peut pas contenir :",
    options: ["Des objets", "Des attributs", "Des méthodes", "Des associations"],
    answer: "Des objets"
  },
  {
    question: "Une classe paramétrée contient :",
    options: ["Des signaux", "Des paramètres génériques", "Des objets internes", "Des acteurs"],
    answer: "Des paramètres génériques"
  },
  {
    question: "Un objet est :",
    options: ["Un concept", "Une instanciation d'une classe", "Une méthode", "Une relation UML"],
    answer: "Une instanciation d'une classe"
  },
  {
    question: "Une boucle dans un diagramme de séquence est notée :",
    options: ["opt", "alt", "loop", "par"],
    answer: "loop"
  },
  {
    question: "Une classe abstraite est :",
    options: ["Non instanciable", "Toujours héritée", "Visible uniquement", "Dépendante d’un acteur"],
    answer: "Non instanciable"
  },
  {
    question: "Quel concept permet d'utiliser la même méthode pour différents types d'objet ?",
    options: ["Encapsulation", "Héritage", "Abstraction", "Polymorphisme"],
    answer: "Polymorphisme"
  },
  {
    question: "Un diagramme de déploiement est utile pour :",
    options: ["Afficher les packages", "Visualiser l’architecture physique", "Gérer les cas d’utilisation", "Créer des composants"],
    answer: "Visualiser l’architecture physique"
  },
  {
    question: "Une classe boundary est souvent liée à :",
    options: ["Une base de données", "Un acteur", "Un signal", "Une entité métier"],
    answer: "Un acteur"
  },
  {
    question: "Un fork dans un diagramme d’activité est suivi par :",
    options: ["Une alternative", "Des flows parallèles", "Un join", "Un signal"],
    answer: "Des flows parallèles"
  },
  {
    question: "Un join dans un diagramme d’activité sert à :",
    options: ["Synchroniser les flows", "Créer une instance", "Répartir des rôles", "Lancer des signaux"],
    answer: "Synchroniser les flows"
  },
  {
    question: "Un composant UML est utilisé dans :",
    options: ["Diagramme de classe", "Diagramme de cas d'utilisation", "Diagramme de composants", "Diagramme d’activité"],
    answer: "Diagramme de composants"
  },
  {
    question: "Quel diagramme aide à définir les responsabilités logicielles ?",
    options: ["Cas d’utilisation", "Packages", "Classes", "Séquence"],
    answer: "Classes"
  },
  {
    question: "L’encapsulation permet de :",
    options: ["Réutiliser du code", "Rendre privé ce qui ne doit pas être visible", "Créer des packages", "Exposer toutes les données"],
    answer: "Rendre privé ce qui ne doit pas être visible"
  },
  {
    question: "Un `ref` dans un diagramme de séquence permet de :",
    options: ["Référencer un autre diagramme", "Créer une boucle", "Modéliser une classe", "Montrer un signal"],
    answer: "Référencer un autre diagramme"
  },
  {
    question: "Les classes entity sont utilisées pour :",
    options: ["Gérer l’interface utilisateur", "Contrôler la logique", "Gérer les données persistantes", "Afficher des messages"],
    answer: "Gérer les données persistantes"
  },
  {
    question: "Un diagramme de package montre :",
    options: ["L’héritage", "La logique métier", "Les dépendances entre modules", "Les signaux système"],
    answer: "Les dépendances entre modules"
  },
  {
    question: "Une classe peut hériter de :",
    options: ["Plusieurs classes en Java", "Une seule classe en Java", "Tous les packages", "Des use cases"],
    answer: "Une seule classe en Java"
  },
  {
    question: "L’héritage multiple est :",
    options: ["Autorisé en Java", "Interdit en Java", "Recommandé en UML", "Implémenté via interface en Java"],
    answer: "Implémenté via interface en Java"
  },  
  {
    question: "Quel concept permet de cacher les détails internes d’un objet ?",
    options: ["Héritage", "Polymorphisme", "Encapsulation", "Abstraction"],
    answer: "Encapsulation"
  },
  {
    question: "Quel diagramme UML est utilisé pour représenter les relations entre les classes ?",
    options: ["Diagramme de cas d’utilisation", "Diagramme de séquence", "Diagramme d’activité", "Diagramme de classes"],
    answer: "Diagramme de classes"
  },
  {
    question: "Quel est le stéréotype UML pour une classe représentant des données persistantes ?",
    options: ["<<control>>", "<<boundary>>", "<<service>>", "<<entity>>"],
    answer: "<<entity>>"
  },
  {
    question: "Quelle visibilité est représentée par le symbole # en UML ?",
    options: ["Privée", "Protégée", "Publique", "Package"],
    answer: "Protégée"
  },
  {
    question: "Quel concept UML regroupe des éléments en unités logiques ?",
    options: ["Diagramme de séquence", "Cas d’utilisation", "Package", "Interface"],
    answer: "Package"
  },
  {
    question: "Le polymorphisme permet de :",
    options: ["Réutiliser des classes héritées", "Créer des objets", "Réaliser plusieurs comportements sous une même interface", "Cacher des attributs"],
    answer: "Réaliser plusieurs comportements sous une même interface"
  },
  {
    question: "Quel diagramme permet de capturer les exigences fonctionnelles ?",
    options: ["Diagramme de classes", "Diagramme de cas d’utilisation", "Diagramme de séquence", "Diagramme de composants"],
    answer: "Diagramme de cas d’utilisation"
  },
  {
    question: "La relation <<include>> dans un cas d’utilisation sert à :",
    options: ["Étendre un scénario", "Ajouter un sous-cas obligatoire", "Créer une boucle", "Ajouter un acteur"],
    answer: "Ajouter un sous-cas obligatoire"
  },
  {
    question: "Quel est le niveau de granularité le plus fin d’un cas d’utilisation ?",
    options: ["Stratégique", "Objectif utilisateur", "Sous-fonctionnalité", "Fonction technique"],
    answer: "Sous-fonctionnalité"
  },
  {
    question: "Quelle est la portée d’un cas d’utilisation qui concerne tout le SI ?",
    options: ["Sous-système", "Framework", "Entreprise", "Application"],
    answer: "Entreprise"
  },
  {
    question: "Une composition en UML implique :",
    options: ["Une dépendance forte et obligatoire", "Une simple référence", "Un héritage", "Une interaction"],
    answer: "Une dépendance forte et obligatoire"
  },
  {
    question: "Une classe control est associée à :",
    options: ["La structure de données", "Un acteur", "Un use case", "L’interface graphique"],
    answer: "Un use case"
  },
  {
    question: "Un attribut est défini comme :",
    options: ["Une opération", "Un comportement", "Une donnée sans comportement", "Une relation"],
    answer: "Une donnée sans comportement"
  },
  {
    question: "Quel type de relation est utilisé pour hériter d’une classe ?",
    options: ["Association", "Composition", "Spécialisation", "Dépendance"],
    answer: "Spécialisation"
  },
  {
    question: "Un message synchrone est représenté par :",
    options: ["Flèche en pointillés", "Flèche pleine avec pointe fermée", "Trait plein", "Rectangle"],
    answer: "Flèche pleine avec pointe fermée"
  },
  {
    question: "Quel cadre d’interaction permet de représenter un test ?",
    options: ["loop", "alt", "opt", "par"],
    answer: "alt"
  },
  {
    question: "Dans un diagramme de séquence, les lifelines représentent :",
    options: ["Des scénarios", "Des interactions", "Des classes ou objets participants", "Des messages"],
    answer: "Des classes ou objets participants"
  },
  {
    question: "Quel est l’intérêt du diagramme de séquence ?",
    options: ["Représenter les entités", "Représenter les scénarios dynamiques", "Définir les packages", "Coder en UML"],
    answer: "Représenter les scénarios dynamiques"
  },
  {
    question: "La création d’un objet dans un diagramme de séquence est notée par :",
    options: ["Une flèche avec <<new>>", "Une flèche pointillée", "Une flèche avec un rectangle instancié", "Une flèche circulaire"],
    answer: "Une flèche avec un rectangle instancié"
  },
  {
    question: "Un fork dans un diagramme d’activité permet de :",
    options: ["Faire un choix", "Synchroniser des actions", "Lancer plusieurs actions en parallèle", "Mettre une condition"],
    answer: "Lancer plusieurs actions en parallèle"
  },
  {
    question: "Les swimlanes dans un diagramme d’activité servent à :",
    options: ["Montrer les objets", "Identifier les événements", "Répartir les rôles", "Afficher les classes"],
    answer: "Répartir les rôles"
  },
  {
    question: "Un signal dans un diagramme d’activité est :",
    options: ["Une action bloquante", "Une condition", "Un événement asynchrone", "Une transition obligatoire"],
    answer: "Un événement asynchrone"
  },
  {
    question: "Un package UML peut contenir :",
    options: ["Seulement des classes", "Uniquement des interfaces", "Tout type d’éléments UML", "Des cas d’utilisation uniquement"],
    answer: "Tout type d’éléments UML"
  },
  {
    question: "Un sous-système UML combine :",
    options: ["Une interface et une classe", "Un use case et un diagramme", "Un package et une classe", "Un module et un diagramme"],
    answer: "Un package et une classe"
  },
  {
    question: "Un package P1 dépend de P2 si :",
    options: ["Ils sont dans le même projet", "P1 utilise une classe de P2", "Ils ont le même nom", "Ils sont indépendants"],
    answer: "P1 utilise une classe de P2"
  },
  {
    question: "Quel diagramme montre la dynamique d’un processus métier ?",
    options: ["Diagramme de classes", "Diagramme de packages", "Diagramme d’activité", "Diagramme d’objets"],
    answer: "Diagramme d’activité"
  },
  {
    question: "Une classe boundary gère :",
    options: ["La logique métier", "Les interactions avec les acteurs", "Les données persistées", "Les tests"],
    answer: "Les interactions avec les acteurs"
  },
  {
    question: "Une classe control sert à :",
    options: ["Afficher des interfaces", "Stocker les données", "Gérer la logique d’un use case", "Créer des classes"],
    answer: "Gérer la logique d’un use case"
  },
  {
    question: "Une classe entity est utilisée pour :",
    options: ["La logique d’interface", "La gestion des événements", "La gestion des données métier", "Les tests unitaires"],
    answer: "La gestion des données métier"
  },
  {
    question: "Dans un diagramme de classes, une composition implique :",
    options: ["Une relation faible", "Un lien facultatif", "Une dépendance forte avec cycle de vie", "Un héritage"],
    answer: "Une dépendance forte avec cycle de vie"
  },
  {
    question: "Quel type de diagramme montre la communication entre objets dans le temps ?",
    options: ["Diagramme de cas d’utilisation", "Diagramme de classes", "Diagramme de séquence", "Diagramme de composants"],
    answer: "Diagramme de séquence"
  },
  {
    question: "Quel cadre d’interaction permet une exécution conditionnelle ?",
    options: ["loop", "opt", "ref", "alt"],
    answer: "opt"
  },
  {
    question: "Quel diagramme montre les dépendances entre modules d’un système ?",
    options: ["Diagramme d’activité", "Diagramme de packages", "Diagramme de classes", "Diagramme de cas d’utilisation"],
    answer: "Diagramme de packages"
  },
  {
    question: "Une relation d’héritage est aussi appelée :",
    options: ["Association", "Spécialisation", "Composition", "Implémentation"],
    answer: "Spécialisation"
  },
  {
    question: "Quel élément n’est pas obligatoire dans un use case ?",
    options: ["Précondition", "Postcondition", "Diagramme de séquence", "Scénario principal"],
    answer: "Diagramme de séquence"
  },
  {
    question: "Un use case de niveau objectif utilisateur dure généralement :",
    options: ["Quelques secondes", "De 2 à 20 minutes", "Plusieurs heures", "Plusieurs mois"],
    answer: "De 2 à 20 minutes"
  },
  {
    question: "Un use case de sous-fonctionnalité est lié à :",
    options: ["Un acteur externe", "Un use case principal", "Une classe", "Un package"],
    answer: "Un use case principal"
  },
  {
    question: "Quel diagramme est le plus adapté à une analyse temps réel ?",
    options: ["Diagramme de classes", "Diagramme de packages", "Diagramme de séquence", "Diagramme d’activité"],
    answer: "Diagramme de séquence"
  },
  {
    question: "Quel est le rôle du diagramme de communication ?",
    options: ["Voir les acteurs", "Modéliser les flux de données", "Visualiser les relations + messages", "Tracer les entités"],
    answer: "Visualiser les relations + messages"
  }
];

const diagramTypesQuestions = [
  [
    {
      question: "Quel diagramme est utilisé pour modéliser les transitions d’états ?",
      options: ["Diagramme de composants", "Diagramme de séquence", "Diagramme d’états", "Diagramme de classes"],
      answer: "Diagramme d’états"
    },
    {
      question: "Quelle représentation graphique indique une création d'objet dans un diagramme de séquence ?",
      options: ["Une flèche avec <<create>>", "Une flèche vers un lifeline inexistant", "Un carré rempli", "Une double flèche"],
      answer: "Une flèche vers un lifeline inexistant"
    },
    {
      question: "Quel diagramme permet de visualiser l’assemblage des modules logiciels ?",
      options: ["Diagramme de séquence", "Diagramme de composants", "Diagramme d’activités", "Diagramme d’objets"],
      answer: "Diagramme de composants"
    },
    {
      question: "Quel diagramme est utilisé pour représenter les interactions entre objets dans le temps ?",
      options: ["Diagramme de classes", "Diagramme de cas d’utilisation", "Diagramme de séquence", "Diagramme de déploiement"],
      answer: "Diagramme de séquence"
    },
    {
      question: "Le diagramme de cas d'utilisation est utilisé pour :",
      options: ["Visualiser les entités métier", "Montrer les scénarios utilisateur", "Déployer des composants", "Créer une interface"],
      answer: "Montrer les scénarios utilisateur"
    },
    {
      question: "Quel type de flèche représente un message synchrone dans un diagramme de séquence ?",
      options: ["Flèche en pointillés", "Flèche pleine avec pointe fermée", "Flèche courbée", "Ligne continue sans flèche"],
      answer: "Flèche pleine avec pointe fermée"
    },
    {
      question: "Dans un diagramme de séquence, un cadre 'loop' est utilisé pour :",
      options: ["Montrer un choix", "Gérer des messages concurrents", "Représenter une répétition", "Créer une classe"],
      answer: "Représenter une répétition"
    },
    {
      question: "Le diagramme d’activité permet de représenter :",
      options: ["La structure logique", "Les composants système", "Le flux d’actions ou de processus", "L’héritage"],
      answer: "Le flux d’actions ou de processus"
    },
    {
      question: "Que signifie une ligne avec losange noir dans un diagramme d’activité ?",
      options: ["Une activité facultative", "Un signal", "Un fork", "Une synchronisation (join)"],
      answer: "Une synchronisation (join)"
    },
    {
      question: "Quelle est la fonction d’un swimlane dans un diagramme d’activité ?",
      options: ["Séparer les classes", "Identifier les packages", "Répartir les responsabilités", "Afficher les signaux"],
      answer: "Répartir les responsabilités"
    },
    {
      question: "Dans un diagramme de classes, quel symbole indique la visibilité protégée ?",
      options: ["-", "+", "#", "~"],
      answer: "#"
    },
    {
      question: "Quel diagramme représente la structure logique des entités et leurs relations ?",
      options: ["Diagramme de classes", "Diagramme de séquence", "Diagramme d’activité", "Diagramme de déploiement"],
      answer: "Diagramme de classes"
    },
    {
      question: "Dans un diagramme de cas d'utilisation, une relation <<include>> signifie :",
      options: ["Une extension optionnelle", "Une condition logique", "Une inclusion obligatoire", "Un diagramme de déploiement lié"],
      answer: "Une inclusion obligatoire"
    },
    {
      question: "Quel est le rôle principal du diagramme de déploiement ?",
      options: ["Décrire le flux métier", "Définir les dépendances", "Montrer la structure physique du système", "Définir l’héritage"],
      answer: "Montrer la structure physique du système"
    },
    {
      question: "Une agrégation est représentée dans un diagramme de classes par :",
      options: ["Un trait simple", "Un losange vide", "Un losange noir", "Une flèche pointillée"],
      answer: "Un losange vide"
    },
    [
      {
        question: "Quel symbole représente une relation d’héritage dans un diagramme de classes ?",
        options: ["Flèche pleine", "Flèche avec triangle vide", "Ligne pointillée", "Ligne avec losange noir"],
        answer: "Flèche avec triangle vide"
      },
      {
        question: "Quel diagramme est le plus adapté pour visualiser un processus métier séquentiel ?",
        options: ["Diagramme de composants", "Diagramme de cas d’utilisation", "Diagramme d’activité", "Diagramme de classes"],
        answer: "Diagramme d’activité"
      },
      {
        question: "Quel élément graphique représente un fork dans un diagramme d'activité ?",
        options: ["Un losange vide", "Un trait épais horizontal ou vertical", "Un rectangle", "Une flèche double"],
        answer: "Un trait épais horizontal ou vertical"
      },
      {
        question: "Dans un diagramme d’activité, une flèche entre deux actions signifie :",
        options: ["Une relation d'héritage", "Une transition", "Une dépendance", "Un message asynchrone"],
        answer: "Une transition"
      },
      {
        question: "Dans un diagramme de classes, une composition est représentée par :",
        options: ["Un losange vide", "Un triangle", "Un losange noir", "Une flèche pleine"],
        answer: "Un losange noir"
      },
      {
        question: "Quel diagramme est le plus utile pour représenter une architecture logicielle modulaire ?",
        options: ["Diagramme de séquence", "Diagramme de packages", "Diagramme de cas d'utilisation", "Diagramme d'états"],
        answer: "Diagramme de packages"
      },
      {
        question: "Le diagramme de timing est utilisé pour :",
        options: ["Visualiser les états dans le temps", "Dessiner des classes", "Créer des packages", "Gérer les cas d'utilisation"],
        answer: "Visualiser les états dans le temps"
      },
      {
        question: "Quel diagramme montre les échanges de messages entre objets ?",
        options: ["Diagramme de composants", "Diagramme d'activité", "Diagramme de séquence", "Diagramme de packages"],
        answer: "Diagramme de séquence"
      },
      {
        question: "Dans un diagramme de déploiement, les 'nœuds' représentent :",
        options: ["Des classes", "Des états", "Des entités physiques ou logicielles", "Des signaux UML"],
        answer: "Des entités physiques ou logicielles"
      },
      {
        question: "Dans un diagramme d’états, un cercle noir représente :",
        options: ["Une erreur", "Un état initial", "Une classe abstraite", "Un objet supprimé"],
        answer: "Un état initial"
      },
      {
        question: "Une dépendance UML est représentée par :",
        options: ["Une flèche pointillée", "Un losange vide", "Une ligne épaisse", "Un trait sans flèche"],
        answer: "Une flèche pointillée"
      },
      {
        question: "Quel diagramme est utilisé pour représenter une interaction dans un scénario métier ?",
        options: ["Diagramme de classes", "Diagramme de collaboration", "Diagramme de packages", "Diagramme de timing"],
        answer: "Diagramme de collaboration"
      },
      {
        question: "Quel diagramme regroupe les entités et relations dans une structure logique ?",
        options: ["Diagramme de séquence", "Diagramme de composants", "Diagramme de classes", "Diagramme de déploiement"],
        answer: "Diagramme de classes"
      },
      {
        question: "Dans un diagramme de classes, un champ privé est précédé par :",
        options: ["#", "~", "+", "-"],
        answer: "-"
      },
      {
        question: "Quelle est la principale utilité d’un diagramme de packages ?",
        options: ["Représenter les acteurs", "Modulariser et organiser les classes", "Dessiner les interfaces", "Afficher l’arborescence des signaux"],
        answer: "Modulariser et organiser les classes"
      },
      {
        question: "Quel diagramme permet de représenter l’interaction entre plusieurs vues UML ?",
        options: ["Diagramme global d’interactions", "Diagramme de timing", "Diagramme d’états", "Diagramme de packages"],
        answer: "Diagramme global d’interactions"
      },
      {
        question: "Dans un diagramme de séquence, les rectangles verticaux pleins sur les lifelines sont :",
        options: ["Des signaux", "Des fragments", "Des activations", "Des packages"],
        answer: "Des activations"
      },
      {
        question: "Le cadre `alt` dans un diagramme de séquence est utilisé pour :",
        options: ["Créer une boucle", "Gérer une condition/alternative", "Répartir les signaux", "Créer un état temporaire"],
        answer: "Gérer une condition/alternative"
      },
      {
        question: "Dans un diagramme de classes, un trait avec une flèche simple signifie :",
        options: ["Une dépendance", "Une agrégation", "Une association unidirectionnelle", "Une extension"],
        answer: "Une association unidirectionnelle"
      },
      {
        question: "Quel diagramme est adapté pour décrire les comportements alternatifs et concurrents ?",
        options: ["Diagramme de classes", "Diagramme de séquence", "Diagramme d’activité", "Diagramme de composants"],
        answer: "Diagramme d’activité"
      }
    ]
    
  ]
  
];


// Function to shuffle and take n random items from an array
const getRandomQuestions = (array, n) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export default function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [paused, setPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setQuestions(getRandomQuestions(diagramTypesQuestions, 20));
  }, []);

  useEffect(() => {
    let timer;
    if (!paused && !showResult) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [paused, showResult]);

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (selected === questions[current]?.answer) {
      setScore((s) => s + 1);
    }
    setSelected(null);
    setShowAnswer(false);
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
    } else {
      setShowResult(true);
    }
  };

  const togglePause = () => setPaused((p) => !p);

  if (questions.length === 0) {
    // Show loading state while questions are being prepared
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900">
        <div className="text-white text-xl">Chargement du quiz...</div>
      </div>
    );
  }

  if (paused) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-4xl font-extrabold mb-6">⏸️ Pause</h1>
        <button className="bg-green-500 hover:bg-green-700 px-6 py-3 rounded-lg text-white text-lg shadow-md" onClick={togglePause}>Reprendre</button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center p-8">
        <h1 className="text-4xl font-bold mb-6">🎉 Quiz terminé !</h1>
        <p className="text-2xl mb-2">Score : {score} / {questions.length}</p>
        <p className="text-lg mb-8">Temps écoulé : {time} secondes</p>
        <div className="w-full max-w-md relative">
          <img 
            src="/wolf.jpg" 
            alt="Loup majestueux" 
            className="rounded-lg shadow-xl w-full"
          />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 px-3 py-1 rounded-full">
            <p className="text-white text-sm font-bold">SIGRAOUUUU 🐺</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold text-white mb-8 animate-pulse">SIGRAOUUUU🐺🐺🐺🐺🐺</h1>
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        <div className="flex justify-between text-sm text-gray-600">
          <span className="font-semibold">Question {current + 1}/{questions.length}</span>
          <span className="font-mono">⏱️ {time} sec</span>
          <button onClick={togglePause} className="text-blue-600 hover:underline font-semibold">Pause</button>
        </div>

        <h2 className="text-2xl font-bold text-gray-800">{questions[current].question}</h2>

        <div className="grid gap-4">
          {questions[current].options.map((opt) => {
            const isCorrect = showAnswer && opt === questions[current].answer;
            const isWrong = showAnswer && opt === selected && selected !== questions[current].answer;
            const isSelected = selected === opt;
            return (
                    <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className={`w-full px-6 py-4 rounded-lg border text-left text-base font-medium transition-all duration-200 shadow-sm
                      ${isCorrect ? "bg-green-500 border-green-600 text-white" : ""}
                      ${isWrong ? "bg-red-500 border-red-600 text-white" : ""}
                      ${isSelected && !showAnswer ? "bg-blue-200 border-blue-600 text-black" : !isCorrect && !isWrong ? "border-gray-300 bg-white hover:bg-blue-50 text-black" : ""}
                    `}
                    disabled={showAnswer}
                    >
                    {opt}
                    </button>
                  );
          })}
        </div>

        {showAnswer && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-md"
            >
              Suivant ➡️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}