Portfolio Project
=================

Sources:
https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio


# Lancer le Dev

Pour faire tourner le projet sous docker en local, il faut:

 - Exécuter `composer install` pour installer les dépendances de paquets en local
 - Exécuter la commande `npm install` en local
 - Créer la configuration du docker (disponible dans le wiki) et lancer le build de l'image Docker
 - Une fois que le docker est build, il faut générer le fichier CSS avec la commande `./node_modules/.bin/encore production`

l'application est accessible à l'adresse:
http://localhost:8080/app_dev.php/



# Build Docker en ligne de commande


 CMD :
 docker build -t [NAME:TAG]


# Lancer Docker en ligne de commande
CMD :


 docker run
 -p 8080:80
 -v [HOST PATH]:/var/www/html
 --env APACHE_USER_ID=1000
 --name [NAME:TAG]




EXEMPLE
========

CMD :
    docker build -t portfolio
    docker run -p 8080:80 -v /c/Users/david/PhpstormProjects/project-alpha:/var/www/html --env APACHE_USER_ID=1000 --name portfolio 
    docker exec -it portfolio bash
    cd /var/www/html
    composer install
    npm install
    ./node_modules/.bin/encore production
    
    
    # Dev installation
Run your docker container.

- Build: `docker build -t portfolio .`
- Run: `docker run -p 8080:80 -p 8888:443 -v $(pwd):/var/www/html --env APACHE_USER_ID=$(id -u) --name portfolio portfolio` 
- Access <https://localhost:8888>

*********************************************************
A Symfony project created on November 20, 2017, 4:36 pm.




- APRES COMPOSER INSTALL DANS DOCKER

Creer dossier toolbox
mettre les vendor bootstrap

copier le dossier dans vendor
