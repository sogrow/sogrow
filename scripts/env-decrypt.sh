#!/usr/bin/env bash

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[0;90m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "[${BLUE}INFO${NC}] Decrypting sensitive environment files ⚙️"

# Analytics

echo -e "[${BLUE}INFO${NC}] Decrypting Analytics 🔎"
npx senv decrypt apps/services/analytics/.env.encrypted > apps/services/analytics/.env
npx senv decrypt apps/services/analytics/.env.preview.encrypted > apps/services/analytics/.env.preview
npx senv decrypt apps/services/analytics/.env.prod.encrypted > apps/services/analytics/.env.prod

echo -e "[${BLUE}INFO${NC}] Done ✅"
