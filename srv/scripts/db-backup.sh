#!/bin/bash

set -e

# Always run from the directory where this script is located
cd "$(dirname "$0")"

# Configuration
DB_NAME="keycloak"
DB_USER="sa"
DB_PASSWORD="Test1234"
CONTAINER="sqlserver"
BACKUP="/var/opt/mssql/backup/${DB_NAME}.bak"
SQLCMD="/opt/mssql-tools18/bin/sqlcmd"

# Create backup directory inside container
docker exec "$CONTAINER" mkdir -p /var/opt/mssql/backup

# Create database backup
docker exec "$CONTAINER" "$SQLCMD" \
    -S localhost \
    -U "$DB_USER" \
    -P "$DB_PASSWORD" \
    -C -b \
    -Q "BACKUP DATABASE [${DB_NAME}] TO DISK='${BACKUP}' WITH INIT, COMPRESSION"

# Copy backup locally
docker cp "${CONTAINER}:${BACKUP}" "./${DB_NAME}.bak"

echo "Backup created: ${DB_NAME}.bak"
