Play With Alpha
===
>Il s'agit d'un exercice qui met en relation via un serveur deux fichiers et permet de controller une image à l'aide de boutons "up", "down", "right" et "left". 
<hr>

## Logicilles
|Node.js|Docker|
|-|-|

## Langages
|HTML|CSS|JavaScript|
|-|-|-|

## Liste des librairies utilisées

| Module | Version |
|:--|:--:|
|socket.io| 4.6.1 |
|http|0.0.1-security|
|express|4.18.2|

<br>
<hr>
<br>

# Manipulation du projet

>La page publique
````
/public/manette.html
````
>La page utilisé pour générer la réponse est dans le dossier : 
````
/views/chocobo_move.ejs
````
* Sur une page du navigateur rentrer l'adresse 
````
localhost:8080/manette.html
````
* Sur une autre page du navigateur, aller sur : 
```
localhost:8080/maze
```

## Mode d'emploi
|manette.html|
|-|
Pour déplacer le chocobo(Alpha) se trouvant sur la page .ejs, il suffit de cliquer sur les boutons présents sur la page manette html. La direction indiqué aura l'effet annoncé sur l'image se trouvant sur l'autre page


## /views
### /html
| Page | Description |
|:--|:--|
|**manette.html**|On génère un mouvement pour l'image se trouvant sur l'autre page via les boutons présents sur la page.|
|**chocobo_move.ejs**|Le chocobo (l'image) reproduit les mouvements annoncés sur la page manette.html|