FROM ghost:3-alpine

WORKDIR /var/lib/ghost

ENTRYPOINT ["docker-entrypoint.sh"]

ENV PORT 2368

EXPOSE $PORT

CMD ["node", "current/index.js"]