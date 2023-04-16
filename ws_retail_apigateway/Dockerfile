# Build stage
FROM maven:3.6.0-jdk-11-slim AS build
COPY pom.xml /app/
COPY src /app/src
RUN mvn -f /app/pom.xml clean package

# Run stage
FROM openjdk:11-ea-11-jdk-slim
MAINTAINER Team
COPY --from=build /app/target/apigateway-0.0.1-SNAPSHOT.jar ws-retail-apigateway.jar
ENTRYPOINT ["java", "-jar","ws-retail-apigateway.jar"]
