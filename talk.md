# Slide 0: Intro
- Hello! Petite présentation sobrement intitulée SuperPowers with APIs
- Je vais parler de ce qu'on peut construire facilement avec des APIs

# Slide 1: Qui suis-je
- Qui suis-je

- SuperHéros: pas juste pour faire joli, j'ai fait un projet

# Slide 2: Gif
- Interface de recherche marvel
- Iran -> Superhéros iranien, non iron man : typo
- Filtre par équipe ou par auteur
- Description, nom, image, et plein d'infos
- Tout ça avec des APIs ! Données, moteur de recherche, images...

On va voir ce que c'est, comment ça fonctionne et ce qu'on peut en faire

# Slide 3: 2 types d'API
- Récupérer les données
- Les transformer

Mais c'est quoi une API?

# Slide 4: Application Programming Interface

- API = Interface

- Interface : couche entre deux éléments

- exemple UI : permet à l'humain de communiquer avec la machine

- Ici API: Couche de communication entre deux programmes

- Abus de langage pour cette présentation : il s'agit ici des APIs REST, accessible par un URL
(même abus de langage fréquent dans le monde du web)

# Slide 5: Getting the data

- Commençons par les plus simples/courantes : obtenir des données avec une api
-> Quelles données pour mes superhéros ? Ou puis-je trouver une liste ?

# Slide 6: Wikipedia/Marvel
- Comme tout internaute qui se respecte, need info? GO WIKIPEDIA
- Liste de 1700 superheros/1000 supervillains: bonne source !
- Une societe derriere les heros, Marvel: leur site contient plein de donnees, et propose une API!

Je sais que cette donnee existe, comment la récupérer ?

# Slide 7: Wikipedia API
- Wikipedia API: DBPedia 
- Non officielle, bénévoles qui mettent à jour tous les six mois à peu près
- Accessible avec une URL
- Vous voyez ici une infobox: données sur le héros, format structuré en colonnes facile pour humain 
- Mais pas ouf pour machine. L'API, au contraire, vise la machine !
- Format JSON: classique dans le monde JS, moyen (avec moultes gillemets et accolades) de décrire une donnée structurée

Mais il ne faut pas se limiter à une seule API! Description de Hulk : superhéros marvel... :/
Je veux une définition plus précise, on pourrait demander à Marvel ?

# Slide 8: Marvel API
- Pris dans une bombe de rayons gamma : c'est mieux
- Données différentes, potentiellement de meilleure qualité : il va falloir trouver des infos à droite à gauche et garder ce qui vous plait
- API Marvel: url un peu plus compliquée, numéro à trouver sur un autre url, ...
- Une très bonne chose : elle existe
- Pour le reste, c'est un bon contre exemple de l'API mal faite
- URL pas claire. On disait que les APIs sont faites pour les programmes, mais qui écrit ces programmes ?
-> Doit être compréhensible par un humain aussi ! Il faut pouvoir jouer avec
- Je vous passe les détails : 
    - message d'erreur "error"
    - pages qui disparaissent
    - redirect infini
    - timeout mais quand on rééssaye ça marche
    - erreurs dans le JSON mais le serveur répond 200 OK

- Bref, elle existe, et données extrèmement intéressantes : photo centrée sur le visage du héros et bien détourées, description dans l'univers
- Mais là, on a un mauvais préssentiment : la page Hulk du site contient des infos différentes que l'API...
...ce qui veut dire que même les devs Marvel n'ont pas voulu utiliser leur propre API. Et ça, ça suggère qu'elle va être un peu chiante...

Au moins elle existe. Parfois, même souvent, les sites n'ont pas d'API pour obtenir leurs données

# Slide 9: Incomplete API
- On peut toujours compter sur le bon vieux scraping
- = écrire un script un peu manuel qui va dl le site et extraire les infos avec des sélecteurs CSS
- Sélecteur (cf css/JQuery) permet de cibler une balise à l'aide de ses classes/type/voisins
- Nokogiri en ruby, scrapy python, x-ray node, scrapers EVERYWHERE
- ça marche à tous les coups : si la donnée est visible avec un browser, on peut récupérer la donnée. Pas toujours facile, mais possible

-> Pourquoi on fait pas ça à chaque fois alors ? 2 raisons :
- Plus facile d'utiliser une API : formaté pour, crée pour que vous vous en serviez !
- Ce genre de script marche aujourd'hui, mais dans trois mois ? Vos sélecteurs sont cassés :/
- C'est bien pour avoir des données maintenant, ou pour un scraping que vous ferez qu'une seule fois, mais pas pour le long terme
- BTW : NEVER SCRAPED ONLY ONCE!
- Vous aurez surement besoin des données une autre fois : l'API aura documenté ses changements, _elle_...

- Du coup en tant que créateur, sachez qu'on pourra TOUJOURS récupérer vos contenus
- Même avec le HTML le plus dégueulasse du monde
- ça sert à rien, c'est pas une protection, au contraire ! Vous avez intérêt à ce qu'on utilise vos contenus : on dépend alors de vous !
- Vous devenez une plateforme avec des utilisateurs : Pourquoi vous faire un ennemi quand ça pourrait être votre plus grand défenseur ?

Essayez de trouver une API, y'en a qui sont très bien faites, d'autres contiendront des données complémentaires, et sachez que vous pourrez toujours scraper si nécessaire
Et c'est souvent un peu nécessaire.

Pour mon projet marvel, j'ai fait tout ça : API Wikipedia, API Marvel, Scraping Marvel pour données manquantes dans l'API, et même un peu scraping wikipedia

# Slide 10: Transforming the data
- J'ai maintenant une belle liste de superhéros. J'en fais quoi maintenant ?

Je vais vous présenter deux APIs que j'ai utilisé pour travailler avec ces données
# Slide 11: SaaS
- Algolia et Cloudinary m'ont permis de rajouter des fonctionnalités
- Algolia: la société pour qui je travaille, on fournit un moteur de recherche à travers une API
- Comme de nombreux autres, principe du SaaS: au lieu d'acheter une boite, paye pour utiliser un service
- Paye que ce que t'utilise, et souvent plan gratuit : pour ce projet pas un cent :)
- A priori moins cher qu'une solution maison : ces boites ont des experts, de l'infra, des ingés fulltime sur les problèmes spécifiques, ...
- Pour schématiser : Algolia fait que de la search mais le fait parfaitement, Cloudinary font que transformer des images mais c'est les meilleurs

# Slide 12: Algolia
- Moteur de recherche: vous entrez une lettre, on fait une recherche, on affiche les résultats
- ça a l'air un peu magique, mais ça fonctionne grace à une API ! Frappe > Requête > Résultats > UI
- Très rapide : GIF temps réel
- Très pertinent:  gestion typo, pluriels ou synonymes, vous pouvez choisir l'ordre (popularité, meilleures ventes, ...
- Ici séries les plus populaires (Breaking bad en premier) ou superhéros dans le plus d'histoires (Iron man vs Iron fist)

# Slide 13: Cloudinary
- Spécialisés dans le traitement d'images
- Et marvel en ont plein : chaque personnage important a une couleur principale, et des images de fond spécifiques aux superhéros !
- Cloudinary = appliquer à la volée des effets : voilà une image, compresse redimensionne à 450width et mets une teinte rouge
- Filtres anti yeux rouge, autofocus sur les visages, détourage etc... Plein d'effets !
- Fonctionne sur un CDN: votre site sert l'image une fois, Cloudinary la cache pour vous
... et la distribue ! L'image charge vite de n'importe quel coin du globe

Et ces services sont souvent gratuits pour des petites quantités de données

# Slide 14: Serverless
- Algolia: gratuit jusqu'à 10000 objets, ça fait large ! Ici 2000 superhéros, mais 10000 produits/Blog post c'est large
- Cloudinary gratuit jusqu'à 7000 opérations : très pratique pour un leboncoin par exemple, unifie les images des users !
- On se dirige vers le Serverless (sans _maintenir de_ serveur)
- Plus besoin d'avoir un serveur pour transformer les images, ou pour héberger un moteur de recherche comme ES, ou même pour héberger (GitHub pages)
- Des APIs qui font une chose et le font bien, y'en a plein :
    - Stripe payment
    - Twilio SMS
    - MailJet/Sendgrid email
    - APIs de reco vocale, d'images, ...

Si vous avez un gros dev à faire, commencez par regarder si une api peut vous être utile.
Si vous avez une idée d'un business/app/boite, vous ne voulez pas perdre du temps sur des problèmes génériques quand vous pourriez réaliser ce que votre idée a d'unique !
Focus sur ta limousine du futur plutôt que de réinventer la roue, surtout si la tienne est carrée

Avec tous ces services/APIs, votre site c'est quelques fichiers HTML/JS/CSS
- Hébergement gratuit, recherche gratuite, gestion des images gratuites : vous avez pleins d'outils à votre disposition !

# Slide 15: Conclusion

- Pour conclure, API = brique de légo
- Une API fait une chose et doit le faire bien
- Ces briques vous donnent des pouvoirs pour réaliser vos idées:
    - APIs pour obtenir des données initiales, de plus en plus d'ouvert : OPEN DATA (cf data.gouv.fr)
    - Toujours scraping au pire (attention légalité, check mentions légales, attention script qui s'embale et met le site à plat: soyez responsables!)
    - Une fois que vous avez la donnée, faites en quelquechose ! Vous pouvez construire des trucs fat (pipeline search description image)
    - Voyez les comme des briques ! Plus vous en découvrez, plus vous décuplez vos pouvoirs pour construire des choses de plus en plus grandes
    - Donc allez-y ! Construisez des choses avec, les APIs sont là pour que vous en fassiez quelque-chose de plus grand que la somme de leurs valeurs individuelles

Merci, questions ? :)

