CV Project
==========

# CREATE NEW REPOSITORY ON GITHUB FOR RESUME


# TODO:
CUSTOMIZE TEMPLATE;

DISPLAY PROFILE IMG;
* Use CDN for profile img

USE GLITCH EFFECT & OTHER CSS EFFECTS;
<https://tympanus.net/codrops/>

FIX NAVBAR ON PHONE & TABLET;

ADD BUTTON TO SWITCH LANGUAGE BETWEEN FR & ENG, MAYBE DE;
<http://avantpremiere.ch/>

PUT ALL TEXTS IN TRANSLATION FILE;

# Lancer Docker 
Build l'image du projet et utiliser Kitematic (Docker GUI):

 `docker build -t [NAME:TAG] .`

# Lancer Docker en ligne de commande

 docker run
 -p 8080:80
 --name [NAME] [NAME]


# COMMAND:
`composer install`
`npm install install`
`node_modules/.bin/encore production`


EXEMPLE DOS
========

* `docker build -t portfolio .`
* `docker run -p 8080:80 -v $(pwd):/var/www/html --env APACHE_USER_ID=$(id -u) APACHE_USER_GROUP=$(group -g) --name portfolio portfolio` 
* Access <http://localhost:8080/app_dev.php>

==============

A Symfony project created in 2018.
