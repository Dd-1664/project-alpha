Portfolio Project
=================

Sources:
<https://github.com/BlackrockDigital/>


# TODO:
CUSTOMIZE
PACKAGE.JSON IS NOT UP TO DATE, UPDATE
ADD BUTTON TO SWITCH LANGUAGE (AVP)

# Lancer Docker 
Build l'image du projet et utiliser Kitematic (Docker GUI):

 `docker build -t [NAME:TAG] .`

# Lancer Docker en ligne de commande

 docker run
 -p 8080:80
 --name [NAME] [NAME]


EXEMPLE DOS
========

* `docker build -t portfolio .`
* `docker run -p 8080:80 -v $(pwd):/var/www/html --env APACHE_USER_ID=$(id -u) APACHE_USER_GROUP=$(group -g) --name portfolio portfolio` 
* Access <http://localhost:8080/app_dev.php>

==============

A Symfony project created on November 20, 2017, 4:36 pm.

