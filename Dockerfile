

FROM openjdk:17

ENV ENVIRONMENT=prod

MAINTAINER Nico Keskin

ADD backend/target/appman.war appman.war

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGO_DB_URI -jar /appman.war" ]