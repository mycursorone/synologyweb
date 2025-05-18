#!/bin/bash

# Database setup script
# This script executes all migrations and seeds in order

# Set variables
DB_NAME="synologywebdb"
DB_USER="postgres"
MIGRATIONS_DIR="$(dirname "$0")/migrations"
SEEDS_DIR="$(dirname "$0")/seeds"

echo "=== Database Setup Script ==="
echo "Database: $DB_NAME"
echo "User: $DB_USER"
echo

# Execute migrations
echo "=== Executing migrations ==="
for migration in "$MIGRATIONS_DIR"/*.sql; do
  if [ -f "$migration" ]; then
    echo "Executing migration: $(basename "$migration")"
    sudo -u $DB_USER psql -d $DB_NAME -f "$migration"
    if [ $? -eq 0 ]; then
      echo "✓ Migration successful: $(basename "$migration")"
    else
      echo "✗ Migration failed: $(basename "$migration")"
      exit 1
    fi
    echo
  fi
done

# Execute seeds
echo "=== Executing seeds ==="
for seed in "$SEEDS_DIR"/*.sql; do
  if [ -f "$seed" ]; then
    echo "Executing seed: $(basename "$seed")"
    sudo -u $DB_USER psql -d $DB_NAME -f "$seed"
    if [ $? -eq 0 ]; then
      echo "✓ Seed successful: $(basename "$seed")"
    else
      echo "✗ Seed failed: $(basename "$seed")"
      exit 1
    fi
    echo
  fi
done

echo "=== Database setup completed ==="
