#!/usr/bin/env bash

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[0;90m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "[${BLUE}INFO${NC}] Decrypting sensitive environment files ⚙️"

# Define an array of services to decrypt
services=(analytics identity support schedule)

# Iterate over the services and decrypt the environment files
for service in "${services[@]}"
do
  # Decrypt the encrypted environment files
  echo -e "[${BLUE}INFO${NC}] Decrypting $service"
  npx senv decrypt apps/services/$service/.env.encrypted > apps/services/$service/.env
  npx senv decrypt apps/services/$service/.env.preview.encrypted > apps/services/$service/.env.preview
  npx senv decrypt apps/services/$service/.env.prod.encrypted > apps/services/$service/.env.prod
done

echo -e "[${BLUE}INFO${NC}] Done ✅"
