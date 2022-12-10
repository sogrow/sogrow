#!/usr/bin/env bash

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[0;90m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "[${BLUE}INFO${NC}] Encrypting sensitive environment files ⚙️"

# Define an array of services to encrypt
services=(analytics identity)

# Iterate over the services and encrypt the environment files
for service in "${services[@]}"
do
  # Encrypt the unencrypted environment files
  echo -e "[${BLUE}INFO${NC}] Encrypting $service"
  npx senv encrypt apps/services/$service/.env > apps/services/$service/.env.encrypted
  npx senv encrypt apps/services/$service/.env.preview > apps/services/$service/.env.preview.encrypted
  npx senv encrypt apps/services/$service/.env.prod > apps/services/$service/.env.prod.encrypted
done

echo -e "[${BLUE}INFO${NC}] Done ✅"
