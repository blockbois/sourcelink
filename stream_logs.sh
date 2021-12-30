#!/bin/bash
# Author: Jake Mathai
# Purpose: Stream container logs
TASK=$1
cd src
sudo docker-compose -f conf/containers/${TASK}.yml logs -f -t --tail 100
