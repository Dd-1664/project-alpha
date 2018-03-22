Grayscale Project
=================


# TODO:
Make it work with kitematic

Customize template

Install mysql / phpmyadmin (wamp)

Entity photos
* photos -> slider
* mainPhotos -> background + G-Map

Admin panel
* 1 seul login
* 1 fenetre pour upload des photos

Upload photos (server or CDN)
<https://www.cloudflare.com/fr/>

Display photos with slider Sly
<http://darsa.in/sly/>

Manage G-Map for photos
* formulaire pour remplir les champs lat,long.
* chaque mainPhotos va afficher la location sur la G-Map

-----------------------------------------------------------


# WARNING:
relaunch `./node_modules/.bin/encore production` in docker
if front is not loaded


AFTER FIRST INSTALL, RUN:

`composer install`
`npm install`
`./node_modules/.bin/encore production`

THEN REBUILD CONTAINER


-----------------------------------------------------------

DOCKER
======

# Build l'image Docker

 docker build
 -t [NAME:TAG] .

# Lancer Docker

 docker build
 -t [NAME:TAG] .

 docker run
 -p 8080:80
  -v [HOST-PATH]:/var/www/html
 --name [IMAGE TAG] [IMAGE ID]

 ou utiliser Kitematic (Docker GUI):


EXEMPLE DOS
========

* `docker build -t grayscale .`
* `docker run -p 8080:80 -v $(pwd):/var/www/html --env APACHE_USER_ID=$(id -u) --name portfolio portfolio`
* Access <http://localhost:8080/app_dev.php>

-----------------------------------------------------------

A Symfony project created in 2018.

