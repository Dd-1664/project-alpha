Portfolio Project
=================

Sources:
<https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio>


# TODO:
- APRES COMPOSER INSTALL DANS DOCKER
Creer dossier toolbox
mettre les vendor bootstrap
copier le dossier dans vendor

# Lancer Docker 
Build l'image du projet et utiliser Kitematic (Docker GUI):

 `docker build -t [NAME:TAG] .`

# Lancer Docker en ligne de commande

 docker run
 -p 8080:80
 -v [HOST PATH]:/var/www/html
 --env APACHE_USER_ID=1000
 --name [NAME] [NAME]


EXEMPLE DOS
========

* `docker build -t portfolio .`
* `docker run -p 8080:80 -v $(pwd):/var/www/html --env APACHE_USER_ID=$(id -u) APACHE_USER_GROUP=$(group -g) --name portfolio portfolio` 
* Access <http://localhost:8080>

==============

A Symfony project created on November 20, 2017, 4:36 pm.

