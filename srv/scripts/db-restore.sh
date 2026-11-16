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
LOCAL_BACKUP="$(dirname "$0")/${DB_NAME}.bak"

# Check if local backup exists
if [ ! -f "$LOCAL_BACKUP" ]; then
    echo "Backup not found: $LOCAL_BACKUP"
    exit 1
fi

# Create backup directory inside container
docker exec "$CONTAINER" mkdir -p /var/opt/mssql/backup

# Copy backup into container
docker cp "$LOCAL_BACKUP" "${CONTAINER}:${BACKUP}"

# Restore and overwrite database
docker exec "$CONTAINER" "$SQLCMD" \
    -S localhost \
    -U "$DB_USER" \
    -P "$DB_PASSWORD" \
    -C -b \
    -Q "USE master; ALTER DATABASE [${DB_NAME}] SET SINGLE_USER WITH ROLLBACK IMMEDIATE; RESTORE DATABASE [${DB_NAME}] FROM DISK='${BACKUP}' WITH REPLACE, RECOVERY; ALTER DATABASE [${DB_NAME}] SET MULTI_USER;"

echo "Database restored successfully!"
