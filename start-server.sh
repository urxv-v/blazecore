#!/bin/bash

# Set required environment variables
export DATABASE_URL="postgresql://postgres:password@localhost:5432/experiments"
export JWT_SECRET="blazecore_secret_key_12345"

echo "Starting Blazecore server with environment variables..."
echo "DATABASE_URL: $DATABASE_URL"
echo "JWT_SECRET: $JWT_SECRET"

# Run the server
cargo run --bin ingress
