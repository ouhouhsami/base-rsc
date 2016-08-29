# Rapport situation comparée

## Install

On linux, run the following command

$ git clone <git>
$ cd base-rsc
$ docker-compose up

Fill the db

$ eval "$(docker-machine env rsc)"
$ docker-compose run db /srv/data/backup/restore_db.sh

Add media

## Help on docker

Create a docker machine
$ docker-machine create --driver virtualbox --virtualbox-memory 8096 rsc

List all docker machines
$ docker-machine ls

Stop a docker machine
$ docker-machine stop <name>
$ docker-machine stop rsc

Start a docker machine
$ docker-machine start <name>
$ docker-machine start rsc

Set env variable the right way
$ eval "$(docker-machine env <name>)"
$ eval "$(docker-machine env rsc)"

To get the VM ip adress
$ docker-machine ip <name>
$ docker-machine ip rsc

docker-compose
$ docker-compose build <name>
$ docker-compose build --no-cache <name>
$ docker-compose run <name> command
$ docker-compose up <name>
$ docker-compose stop


