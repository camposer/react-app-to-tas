#!/bin/bash

# This script is intended only for demo purpose
# Script only valid for dev environment

REACT_APP_BACKEND_BASE_URL=https://mybackend-dev/api/v1 && npm run build
# Enables react-route default routing
echo "pushstate: enabled" > build/Staticfile
cf push myapp -p build
