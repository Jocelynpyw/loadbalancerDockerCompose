##FROM nginx:stable-alpine
##COPY nginx.conf /etc/nginx/conf.d/default.conf
##EXPOSE 4000
##CMD ["nginx", "-g", "daemon off;"]

FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf