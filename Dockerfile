FROM node:21

# turn off extra external api calls
ENV NPM_CONFIG_UPDATE_NOTIFIER false
ENV NPM_CONFIG_FUND false

ARG DATABASE_URL
ARG DIRECT_URL

WORKDIR /app

COPY next.config.js package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npx prisma generate && npm run build

CMD [ "npm", "start"]