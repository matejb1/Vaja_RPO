
@echo off
setlocal
cd /d "%~dp0"

REM Configuration
set "DB_NAME=keycloak"
set "DB_USER=sa"
set "DB_PASSWORD=Test1234"
set "CONTAINER=sqlserver"
set "BACKUP=/var/opt/mssql/backup/%DB_NAME%.bak"
set "SQLCMD=/opt/mssql-tools18/bin/sqlcmd"

REM Create backup directory and set permissions
docker exec -u root %CONTAINER% mkdir -p /var/opt/mssql/backup
docker exec -u root %CONTAINER% chown -R mssql:mssql /var/opt/mssql/backup
docker exec -u root %CONTAINER% chmod 755 /var/opt/mssql/backup

REM Create database backup
docker exec %CONTAINER% %SQLCMD% -S localhost -U "%DB_USER%" -P "%DB_PASSWORD%" -C -b -Q "BACKUP DATABASE [%DB_NAME%] TO DISK='%BACKUP%' WITH INIT, COMPRESSION"

if errorlevel 1 exit /b 1

REM Copy backup locally
docker cp %CONTAINER%:%BACKUP% "%~dp0%DB_NAME%.bak"

if errorlevel 1 exit /b 1

echo Backup created: %DB_NAME%.bak

endlocal
