FROM injah/php7.1:custom

MAINTAINER Dd-1664

ENV DEBIAN_FRONTEND=noninteractive

# SSH to allow composer install with privates repos
COPY docker/rsa/* /root/.ssh/
RUN chmod 400 /root/.ssh/id_*

# composer install
COPY composer.json /var/www/html/
COPY composer.lock /var/www/html/
COPY docker/auth.json /home/.composer/

# this will only download vendors and be cached on the host
RUN /bin/bash -c 'composer install --working-dir=/var/www/html/ --no-scripts --no-suggest --no-autoloader'


# install node dependencies with npm..
COPY package.json /var/www/html/
RUN /bin/bash -c 'cd /var/www/html/ && npm install'

# dev ssl certificates
COPY docker/ssl/ssl.crt /etc/apache2/certs/
COPY docker/ssl/ssl.key /etc/apache2/certs/

# === THE REAL STUFF ==
# Copy all the source (This will invalidate cache)
COPY . /var/www/html/.

RUN /bin/bash -c 'chmod +x /var/www/html/docker/*.sh'

# remove pre-existing cache (cache folder is recreated in script run-symfony)
RUN /bin/bash -c 'cd /var/www/html/ && rm -rf var/cache/'

# Install composer autoloader + run sf scripts if any
RUN /bin/bash -c 'composer install --optimize-autoloader --working-dir=/var/www/html/'

# Encore for production
RUN /bin/bash -c 'cd /var/www/html/ && node_modules/.bin/encore production'

RUN /bin/bash -c 'cd /var/www/html/ && php bin/console assets:install && rm -rf var/cache/*'

EXPOSE 80 443

CMD ["/bin/bash", "-c", "/var/www/run-symfony.sh"]