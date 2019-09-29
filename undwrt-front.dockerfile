FROM docker.oa.com:8080/public/suse_picc_nginx

ARG htdocsdir=/var/www/html/dist/
ARG nginxconfdir=/etc/nginx/

Run mkdir -p $htdocsdir
Run mkdir -p /data/
ADD dist $htdocsdir
ADD nginx.conf $nginxconfdir
ADD start.sh /data/

CMD ["bash", "+x", "/data/start.sh"]