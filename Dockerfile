FROM node:20.9-alpine
COPY . .
RUN npm install
CMD npm run dev
