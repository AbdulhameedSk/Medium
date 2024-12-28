FROM node:20
WORKDIR /app

COPY Frontend/ .

RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]