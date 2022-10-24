FROM node:16-slim as build
WORKDIR /frontend
COPY src ./src
COPY *.json ./
RUN npm install -g @angular/cli@14.0.2
RUN npm install
RUN ng build

FROM nginx:alpine as deploy
COPY --from=build /frontend/dist/dulce-heladeria-frontend/ /usr/share/nginx/html/
COPY nginx.config /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'