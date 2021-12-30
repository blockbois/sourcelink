#!/bin/bash
# Author: Jake Mathai
# Purpose: Run all containers in docker-compose.yml, then stream logs
TASK=$1
cd src
sudo docker-compose -f conf/containers/${TASK}.yml up -d --remove-orphans --build
sudo docker-compose -f conf/containers/${TASK}.yml logs -f -t
