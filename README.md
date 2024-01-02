# objet-window
exercices sur objet et sous objets js Browser


L’objet window est l’objet de niveau supérieur dans le BOM. C’est un objet global. Il représente la fenêtre du navigateur et fournit des fonctionnalités pour contrôler la taille, la position et le contenu de la fenêtre. L’objet window contient le fameux objet DOM (Document Object Model). Chaque fenêtre aura donc son DOM accessible via l’objet window.

Étant l’objet global par défaut en JS, toutes les propriétés et méthodes de l’objet window peuvent être utilisées sans écrire le mot clé window. Mais, il est intéressant de l’écrire afin d’éviter les confusions avec d’autres variables ou fonctions (c’est une bonne pratique de code).

Et un fichier script.js qui contiendra nos scripts.
Ouvrir / fermer la fenêtre du navigateur web

L’objet window permet d’ouvrir une fenêtre spécifique, mais aussi de fermer la fenêtre web actuelle. Pour cela, nous pouvons utiliser les méthodes open() et close().

Voici comment utiliser la méthode open() :
CTRL+C pour copier, CTRL+V pour coller

window.open(/*url*/);

window.open(/*url*/);

Cette ligne de code permet d’ouvrir le lien passé comme argument dans une fenêtre. Cependant, en règle générale, si une fenêtre est ouverte par défaut avec cette méthode, l’ouverture de la fenêtre sera bloquée par le navigateur (pop-up bloqué). Pour résoudre ce problème, nous pouvons par exemple déclencher l’ouverture en fonction d’un Event Listener qui écoute quand le button ayant pour id bouton est cliqué.
CTRL+C pour copier, CTRL+V pour coller

const button = document.getElementById("bouton");

button.addEventListener('click', () => {

  window.open("destination.html");

});



Nous pouvons voir que, s’il n’y a pas de bug, la fenêtre s’ouvre bien lorsque nous cliquons sur le bouton. Nous pouvons passer plusieurs autres arguments, comme le nom de la fenêtre et ses options, parmi lesquelles figure sa dimension (en px) :

const button = document.getElementById("bouton");

button.addEventListener('click', () => {

  window.open("destination.html", 'destination', 'width=500, height=500');

});

Dans cet exemple, la fenêtre du nom de « destination » sera ouverte avec une taille de 500 / 500 px (si le navigateur n’est pas en plein écran). Il y a d’autres options spécifiables comme la présence de scrollbars, d’une toolbar (barre de menu), etc.

Pour fermer la fenêtre courante, il va nous falloir appeler la méthode close(). Pour cela, nous allons créer un Event Listener qui déclenchera l’appel lorsque le button ayant pour id bouton2 sera cliqué. Mais pour cela, il nous faut récupérer l’élément HTML de la fenêtre ouverte avec le DOM de son objet window. Par ailleurs, il va nous falloir créer un Event Listener qui sera appelé une fois que la fenêtre « destination » sera bien ouverte pour qu’il n’y ait pas de bugs. 

# Pour bien comprendre, détaillons les étapes :

    Dans la fonction anonyme du premier Event Listener, nous définissons une variable fenetre sur la valeur de retour de la méthode window.open() correspondant à une référence vers la fenêtre qui s’ouvre.

    Puis nous définissons un Event Listener qui déclenchera une fonction quand la fenetre sera chargée (évènement « load »). Dans cette fonction, nous récupérons l’élément HTML ayant pour id boutton2 en stockant sa référence dans la variable button2. Pour cela, nous utilisons le DOM (via le mot clé document) de l’objet window dont la référence est stockée dans la variable fenetre.

    Puis, toujours dans cette fonction, nous définissons un Event Listener qui déclenchera une fonction quand button2 sera cliqué.

    Cette dernière fonction fermera la fenêtre (fenetre.close()).

Nous pouvons voir que ce code fonctionne correctement.

## Méthode alert()

La méthode alert() est une méthode que vous connaissez déjà bien. En général, nous l’utilisons sans le mot clé window, car comme nous l’avons dit, toutes les propriétés et méthodes de window peuvent être utilisées sans spécifier le mot clé, étant l’objet global par défaut. Cependant, c’est une bonne pratique de le spécifier afin de bien mettre en avant que c’est une méthode de l’objet window.

# Méthode prompt()

La méthode window.prompt() permet d’afficher une fenêtre avec une entrée utilisateur. La valeur passée par l’utilisateur peut être récupérée très facilement en stockant la valeur de retour de l’appel dans une variable. 

Dans cet exemple, lorsque le bouton est cliqué, un prompt est affiché et l’utilisateur peut insérer un texte. La variable mot est définie sur la valeur de retour du prompt. Une alerte affiche le contenu de la variable mot qui contient donc la chaîne renseignée par l’utilisateur. Comme second argument, nous pouvons passer la chaîne qui sera renseignée par défaut dans le prompt:

## Les sous-objets de window
# L’objet window.screen

En JavaScript, l’objet screen représente l’écran sur lequel s’affiche le navigateur, donc de votre ordinateur, téléphone ou tablette. Il contient des informations sur la résolution de l’écran, la taille de l’écran et la profondeur de couleur.

Voici quelques-unes des propriétés de l’objet screen :

    screen.width : la largeur de l’écran en pixels,

    screen.height : la hauteur de l’écran en pixels,

    screen.availWidth : la largeur disponible de l’écran en pixels, c’est-à-dire la largeur de l’écran moins la barre des tâches et autres éléments de l’interface utilisateur,

    screen.availHeight : la hauteur disponible de l’écran en pixels, c’est-à-dire la hauteur de l’écran moins la barre des tâches et autres éléments de l’interface utilisateur,

    screen.colorDepth : la profondeur de couleur de l’écran en bits,

    screen.pixelDepth : la profondeur de couleur de l’écran en pixels.

## L’objet window.location

En JavaScript, l’objet location représente l’URL de la page web actuelle et fournit des propriétés dont des méthodes pour interagir avec cette URL.

# Voici quelques-unes des propriétés de l’objet location :

    location.href : contient l’URL complète de la page web,

    location.protocol : contient le protocole utilisé pour accéder à la page web (par exemple « http : » ou « https : »),

    location.host : contient le nom d’hôte (nom de domaine) de la page web,

    location.pathname : contient le chemin d’accès de la page web, sans le nom d’hôte.

# Voici quelques méthodes de l’objet location :

    location.assign() : permet de charger la page web dont l’URL est passée comme argument. Il se produit la même chose quand on modifie la valeur de location.href. Elle ajoute la nouvelle URL dans l’historique de navigation.

    location.replace() : permet de remplacer la page web actuelle par celle dont l’URL est passée comme argument. À la différence de la méthode précédente, la méthode location.replace() remplace l’URL courante par la nouvelle URL dans l’historique du navigateur. Il n’y a donc pas un ajout d’une entrée dans l’historique de navigation, mais un remplacement d’une entrée par une autre.

    location.toString() : permet de récupérer l’URL sous la forme d’une chaîne de caractères.


## L’objet window.history

L’objet history expose plusieurs méthodes et propriétés qui permettent de naviguer vers les pages précédentes ou suivantes dans l’historique du navigateur, d’ajouter ou de remplacer des entrées dans l’historique, de vérifier le nombre d’entrées dans l’historique, etc.

La propriété length permet de connaître le nombre d’entrées dans l’historique de navigation (nombre de pages dans l’historique, voir la vidéo suivante).

Voici quelques méthodes utiles de l’objet window.history :

    history.back() : charge la page précédente dans l’historique du navigateur,

    history.forward() : charge la page suivante dans l’historique du navigateur,

    history.go(n) : charge la page située n positions dans l’historique du navigateur.

Avant de voir quelques exemples concrets d’utilisation de méthodes de window.history, nous allons apporter des modifications à l’architecture de notre répertoire.
Méthode
## Modifier l’architecture du répertoire pour utiliser window.history


# Pour bien comprendre, retraçons les étapes :

    Dans script.js, nous récupérons la référence des deux boutons. Puis nous ajoutons des Event Listener. Le bouton destination va déclencher un window.assign vers destination.html. Le bouton forward va déclencher un window.history.forward(). Pour bien comprendre, cette dernière méthode réalisera la même opération que la flèche de navigation du navigateur : « → ».

    Si nous cliquons sur le bouton destination, le fichier destination.html est ouvert et une entrée est ajoutée dans l’historique. Le fichier destination.js est exécuté. Nous récupérons dedans le bouton back et nous lui affectons un Event Listener qui appellera la méthode window.history.back. Cette méthode réalisera la même opération que la flèche de navigation du navigateur : « ← ». Nous pouvons donc cliquer dessus pour revenir en arrière dans l’historique de navigation.

    Quand nous sommes à nouveau sur index.html, nous pouvons utiliser le bouton forward pour aller en avant dans l’historique de navigation, nous nous retrouvons alors à nouveau sur la page destinatinon.html.

Nous pouvons constater que ce système n’aurait pas fonctionné si nous avions utilisé avec le bouton destination la méthode window.replace, qui n’aurait pas inséré de nouvelle entrée dans l’historique de navigation. Par ailleurs, si nous chargeons la page et cliquons directement sur le bouton forward, rien ne se passera puisque l’historique ne comporte pas d’entrées positionnées après l’entrée courante. C’est exactement le même principe que quand nous utilisons les flèches de navigation d’un navigateur.

## L’objet window.document.cookie

Comme vous le savez, le web d’aujourd’hui regorge des fameux cookies. On pourrait penser que les cookies sont des outils servant uniquement à harceler les utilisateurs de pubs envahissantes, mais c’est loin d’être le cas.

Un cookie est un fichier texte stocké sur l’ordinateur d’un utilisateur par un site web. Les cookies sont souvent utilisés pour stocker des informations qui peuvent être récupérées par le site web à une date ultérieure. Les informations stockées dans les cookies peuvent être utilisées pour personnaliser l’expérience utilisateur sur le site web, ou pour suivre les utilisateurs et collecter des données d’utilisation.

Donc les cookies vont aussi permettre de mémoriser votre statut de connexion sur un site, d’afficher automatiquement un site web dans votre langue, etc. Dans votre parcours de développeur, ils seront plus qu’indispensables à utiliser dans cette visée, car ils vont vous permettre de stocker des informations qui seront utilisables sur n’importe quelle page d’un domaine, donc du site web.

# Voici une explication des différentes informations à renseigner :

    clé : le nom du cookie.

    value : la valeur à stocker dans le cookie.

    date_d’expiration : la date à laquelle le cookie expire. Si cette date n’est pas spécifiée, le cookie est considéré comme un cookie de session et sera supprimé lorsque le navigateur sera fermé.

    chemin : le chemin associé au cookie. Si cette option n’est pas spécifiée, le cookie est associé au chemin de la page courante.

    domaine : le domaine associé au cookie. Si cette option n’est pas spécifiée, le cookie est associé au domaine de la page courante.

    secure : si cette option est spécifiée, le cookie ne sera envoyé que sur une connexion HTTPS.

Nous interrogeons donc l’utilisateur sur son username et son mdp. Puis nous créons des cookies pour le domaine actuel qui seront stockés 1 mois, avec les valeurs renseignées par l’utilisateur. Notons que nous utilisons de préférence la méthode toUTCString() pour récupérer la date de notre objet Date. Maintenant, nous pourrons accéder à nos cookies sur n’importe quelle page du domaine. Par exemple, modifions destination.js pour récupérer les valeurs des cookies :

Dans cet exemple, nous récupérons dans la page destination.html la valeur des cookies. Nous créons un tableau qui contiendra les clés / valeurs des cookies, et nous l’affichons dans la console. Nous pouvons constater que les cookies créés sont accessibles à toutes les pages du domaine, ce qui n’est évidemment pas le cas des variables basiques que nous déclarons dans un fichier js.


## Essentiel

Le JavaScript Browser BOM (Browser Object Model) est un ensemble d’objets qui permettent d’interagir avec le navigateur web. Nous avons vu que le BOM se compose principalement de l’objet window et de ses sous-objets.

Dans la première partie de ce cours, nous avons étudié les méthodes les plus courantes de l’objet window : open(), close(), alert() et prompt(). Ces méthodes permettent d’ouvrir et de fermer des fenêtres du navigateur, ainsi que d’afficher des messages d’alerte ou de demander des entrées de données à l’utilisateur.

Dans la seconde partie, nous avons vu comment interagir avec les sous-objets de window, tels que screen, location, history et document.cookie. Nous avons appris comment accéder à des informations telles que la résolution de l’écran, l’URL de la page, l’historique de navigation, les cookies stockés sur le navigateur, etc.

Il est important de comprendre que le JavaScript Browser BOM peut être utilisé à des fins malveillantes, comme l’installation de logiciels malveillants ou la collecte de données à l’insu de l’utilisateur. Par conséquent, il est essentiel d’utiliser ces fonctions avec précaution et de mettre en place des mesures de sécurité pour protéger les utilisateurs.

En conclusion, le JavaScript Browser BOM est un outil puissant pour interagir avec le navigateur web et améliorer l’expérience utilisateur. Il permet d’accéder à des données concernant la fenêtre de l’utilisateur et les données en entrée. Il permet par ailleurs de contrôler les pages et l’historique de navigation. C’est donc un outil puissant qu’il faut savoir maîtriser et sécuriser afin d’éviter les piratages.
