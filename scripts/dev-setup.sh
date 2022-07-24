#!/usr/bin/env bash

export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

# install nvm version
nvm install
nvm use

# create envs
touch ./packages/server/.env
touch ./packages/client/.env

# install hooks
yarn
yarn prepare

# Set up the local network
docker network create "cn-app-network"

# build the base image
docker-compose build --no-cache
