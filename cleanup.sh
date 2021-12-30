#!/bin/bash
# Author: Jake Mathai
# Purpose: Stop running containers and wipe all images & volumes
TASK=$1
cd src
sudo docker-compose -f conf/containers/${TASK}.yml down
sudo docker system prune --force --all --volumes
