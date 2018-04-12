Grayscale Project
=================


# TODO:
Customize template

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

