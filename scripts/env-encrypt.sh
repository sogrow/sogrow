#!/usr/bin/env bash

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[0;90m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "[${BLUE}INFO${NC}] Encrypting sensitive environment files ⚙️"

# Analytics
echo -e "[${BLUE}INFO${NC}] Encrypting Analytics 🔎"
npx senv encrypt apps/services/analytics/.env > apps/services/analytics/.env.encrypted
npx senv encrypt apps/services/analytics/.env.preview > apps/services/analytics/.env.preview.encrypted
npx senv encrypt apps/services/analytics/.env.prod > apps/services/analytics/.env.prod.encrypted

echo -e "[${BLUE}INFO${NC}] Done ✅"
