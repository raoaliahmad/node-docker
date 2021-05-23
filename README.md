# Devops with Node Js

## Setup

- install Node
- install docker
- intall docker-compose (if using linux, Windows/Macs should have it by default)
- Clone the repo
- Run `npm install` to install all the related dependencies (optional, since we are going to do development inside a container)
- Run the Following commands
- If everything went well you should be able to go to your `localhost:3000` and see some output

## How to run the containers

Use the following command

For Dev:

```yaml
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

For Prod:

```yaml
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```

Docker compose should take care of running the containers.

### Important: It's still a work in progress so some stuff might change. I'll try to keep the readme updated. :)
