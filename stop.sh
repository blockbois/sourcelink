#!/bin/bash
# Author: Jake Mathai
# Purpose: Stop running containers defined in docker-compose.yml
TASK=$1
cd src
sudo docker-compose -f conf/containers/${TASK}.yml down
