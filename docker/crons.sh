#!/bin/bash
cd /var/www/html/

php app/console gm:aws:is_master --env=prod
if [ $? -ne 0 ]; then
    echo "Not on master, nothing todo"
    exit
fi

# send daily newsletter
php app/console gm:newsletter:send --env=prod

# send birthday
php app/console gm:birthday:send --env=prod
