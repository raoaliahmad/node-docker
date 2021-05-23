# STEP 1: Get the base image from Docker Hub
FROM node:16.1.0

# STEP 2 (Optional): sets the working drectory inside the base image
WORKDIR /app

# STEP 3:Copy our package.json file insde the image i.e in /app
COPY package.json .

# STEP 4:Will then run npm install based on the NODE_ENV Arg
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ];\
	then npm install; \
	else npm install --only=production; \
	fi

# STEP 5:Copy the rest of the files into the image, 
COPY . .

# We could have copied all of the stuff first time, the reason we didn't, is an optimization.
# The way docker works is that it treats all of these steps as layers and it caches the result
# of each step. Docker will only run a step if the something changes in a layer e.g if package.json doesn't change
# then docker will use the cached result for this and also for npm install. on the other hand if a layer does change 
# docker if re-run all the steps from that layer and onwards

# STEP 6: set environment variable
ENV PORT 3000
# Doesn't do anything only for Documentation purposes
EXPOSE ${PORT}
# STEP 7: Finally Specify the executable command that the container will use while running the image
CMD [ "npm", "run", "dev" ]

# To build the image run cd into current director & run `docker build -t 