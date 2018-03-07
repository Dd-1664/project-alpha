Portfolio Project
=================


# Lancer le Dev

Pour faire tourner le projet sous docker en local, il faut:

 - Exécuter `composer install` pour installer les dépendances de paquets en local
 - Exécuter la commande `npm install` en local
 - Créer la configuration du docker (disponible dans le wiki) et lancer le build de l'image Docker
 - Une fois que le docker est build, il faut générer le fichier CSS avec la commande `./node_modules/.bin/encore production`

l'application est accessible à l'adresse:

http://localhost:8080/app_dev.php/
ou
http://localhost:8080/web/app_dev.php/



# Build Docker en ligne de commande


 CMD :
 docker build -t [IMAGE TAG] . && docker run
 -p 8888:443 -p 8080:80 (pas besoin de bind 443)
 -v [HOST PATH]:/var/www/html
 --env APACHE_USER_ID=1000
 --name [CONTAINER NAME] [IMAGE TAG (optionnal)]



EXEMPLE
========

CMD :
`docker build -t dashboard-analytics . && docker run
-p 8888:443 -p 8080:80
-v /home/daviddabo/PhpstormProjects/GM-dashboard-Analytics:/var/www/html
--env APACHE_USER_ID=1000
--name dashboard-analytics dashboard-analytics`


*********************************************************
A Symfony project created on November 20, 2017, 4:36 pm.

