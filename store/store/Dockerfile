## Use an official OpenJDK runtime as a parent image
#FROM openjdk:17-jre-slim
#
## Set the working directory in the container
#WORKDIR /app
#
## Copy the executable jar file to the container
#COPY target/backend.jar /app/app.jar
#
## Expose the port the application runs on
#EXPOSE 8080
#
## Define the command to run the application
#ENTRYPOINT ["java", "-jar", "/app/app.jar"]
#
## Add MySQL dependency
#RUN apt-get update && apt-get install -y mysql-client
#
## Set environment variables for MySQL
#ENV MYSQL_HOST=mysql
#ENV MYSQL_PORT=3306
#ENV MYSQL_DATABASE=medicine
#ENV MYSQL_USER=root
#ENV MYSQL_PASSWORD=Ridm@1995

# Base image
FROM openjdk:17-jdk-slim

# Add the JAR file to the container
ADD target/store.jar /store.jar

# Set the entry point
ENTRYPOINT ["java", "-jar", "/store.jar"]
