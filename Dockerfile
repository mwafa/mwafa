FROM ghost:3.41.9-alpine

WORKDIR /var/lib/ghost

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 2368

WORKDIR /var/lib/ghost/versions/3.41.9/
RUN npm install mysql2
CMD ["node", "index.js"]