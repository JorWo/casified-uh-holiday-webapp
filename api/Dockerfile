FROM amazoncorretto:8-alpine-jdk
COPY /api .
RUN ./mvnw clean install
CMD ./mvnw clean spring-boot:run
