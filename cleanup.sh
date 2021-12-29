#!/bin/bash
# Author: Jake Mathai
# Purpose: Stop running containers and wipe all images & volumes
cd src
sudo docker-compose down
sudo docker system prune --force --all --volumes
