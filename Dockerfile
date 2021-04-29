FROM ghost:3-alpine

WORKDIR /var/lib/ghost

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 2368

RUN npm install -g pg

CMD ["node", "current/index.js"]