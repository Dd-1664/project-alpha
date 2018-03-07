#!/bin/bash
cd /var/www/html/

php app/console gm:aws:is_master --env=prod
if [ $? -ne 0 ]; then
    echo "Not on master, nothing todo"
    exit
fi

# send internal contests exports
php app/console gm:export:dump  --env=prod
