#!/usr/bin/env bash

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[0;90m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Get the service and environment arguments
service=$1
environment=$2

# Print a message
echo -e "[${BLUE}INFO${NC}] Encrypting $service in $environment environment ⚙️"

# Encrypt the decrypted environment files
npx senv encrypt apps/services/$service/.env.$environment > apps/services/$service/.env.$environment.encrypted

echo -e "[${BLUE}INFO${NC}] Done ✅"
