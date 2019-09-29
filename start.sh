#!/bin/sh

nginx
nginx -s reload
tail -f /var/log/nginx/access.log
sleep 36500d