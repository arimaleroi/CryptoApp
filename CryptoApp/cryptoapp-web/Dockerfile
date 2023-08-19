FROM node:18.16.1 AS build
WORKDIR /app
COPY cryptoapp-web/package*.json ./
RUN npm install
COPY cryptoapp-web .
RUN npm install react-scripts
RUN npm run build

FROM nginx:alpine AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
