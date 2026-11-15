@echo off
setlocal
cd /d "%~dp0"

REM Configuration
set "DB_NAME=keycloak"
set "CONTAINER=sqlserver"
set "BACKUP=/var/opt/mssql/backup/%DB_NAME%.bak"
set "SQLCMD=/opt/mssql-tools18/bin/sqlcmd"

REM Load credentials
for /f "tokens=1,* delims==" %%A in (.env) do set "%%A=%%B"

REM Create backup
docker exec %CONTAINER% mkdir -p /var/opt/mssql/backup
docker exec %CONTAINER% %SQLCMD% -S localhost -U "%DB_USER%" -P "%DB_PASSWORD%" -C -b -Q "BACKUP DATABASE [%DB_NAME%] TO DISK='%BACKUP%' WITH INIT, COMPRESSION"

if errorlevel 1 exit /b 1

docker cp %CONTAINER%:%BACKUP% "%~dp0%DB_NAME%.bak"

if errorlevel 1 exit /b 1

echo Backup created: %DB_NAME%.bak
endlocal
