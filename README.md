# Problem Statement:
You have been awarded with a task to build a clock which goes back in time (in other words
tick backwards)

# Requirements

1. You’re application should accept 1 parameter from the user which is
DECREMENT_BY_SECS
2. As current time increments by 1 second you’re required to decrement time by the
number of seconds provided as a parameter.
3. Add necessary validations and handle exceptions
5. Dockerize the application

# Deliverables

## Design Considerations
1. Designing a working MVP with the requirements met.
   1. Input is number only
   2. Decrements can be changed
2. Have test cases up
3. Dockerize application

## Assumptions
1. Input is a positive integer

# Running the App
1. If Docker is not yet installed on your machine, you can download and run it at the [Docker website](https://docs.docker.com/get-docker/)
2. Pull the Docker container from my Docker Hub by running `docker pull kkusumad/back-in-time` in your CLI
3. Run the application using the command in the terminal `docker run -d -it  -p 80:80/tcp --name back-in-time kkusumad/back-in-time`
4. The webapp can be be accessed at http://localhost:80
5. To kill the container, run `docker kill back-in-time` in your CLI.

