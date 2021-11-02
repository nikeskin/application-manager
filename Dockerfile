

FROM openjdk:17

ENV ENVIRONMENT=prod

MAINTAINER Nico Keskin

ADD backend/target/appman.war appman.war

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /appman.war" ]