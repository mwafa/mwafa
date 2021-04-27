FROM ghost:alpine

WORKDIR /var/lib/ghost

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 2368

CMD ["node", "current/index.js"]