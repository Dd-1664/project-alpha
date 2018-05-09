CV Project
==========

<https://dd-resume.000webhostapp.com/>


# Lancer Docker 
Build l'image du projet et utiliser Kitematic (Docker GUI):

 `docker build -t [NAME:TAG] .`

# Lancer Docker en ligne de commande

 docker run
 -p 8080:80
 --name [NAME] [NAME]

# Copie

`docker cp -a [CONTAINER NAME]:var/www/html/ [LOCAL FOLDER]`

# COMMAND:
`composer install`
`npm install install`
`npm run webpack`


EXEMPLE DOS
========

`docker build -t cv .`
`docker run -p 8080:80 -v $(pwd):/var/www/html --name cv cv` 
Access <http://localhost:8080/app_dev.php>

==============

A Symfony project created in 2018.
