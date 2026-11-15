@echo off
setlocal
cd /d "%~dp0"

REM Configuration
set "DB_NAME=keycloak"
set "CONTAINER=sqlserver"
set "BACKUP=/var/opt/mssql/backup/%DB_NAME%.bak"
set "SQLCMD=/opt/mssql-tools18/bin/sqlcmd"
set "LOCAL_BACKUP=%~dp0%DB_NAME%.bak"

REM Load credentials
for /f "tokens=1,* delims==" %%A in (.env) do set "%%A=%%B"

if not exist "%LOCAL_BACKUP%" (
    echo Backup not found: %LOCAL_BACKUP%
    exit /b 1
)

REM Copy backup into container
docker exec %CONTAINER% mkdir -p /var/opt/mssql/backup
docker cp "%LOCAL_BACKUP%" %CONTAINER%:%BACKUP%

if errorlevel 1 exit /b 1

REM Restore and overwrite
docker exec %CONTAINER% %SQLCMD% -S localhost -U "%DB_USER%" -P "%DB_PASSWORD%" -C -b -Q "USE master; ALTER DATABASE [%DB_NAME%] SET SINGLE_USER WITH ROLLBACK IMMEDIATE; RESTORE DATABASE [%DB_NAME%] FROM DISK='%BACKUP%' WITH REPLACE, RECOVERY; ALTER DATABASE [%DB_NAME%] SET MULTI_USER;"

if errorlevel 1 exit /b 1

echo Database restored successfully!
endlocal
