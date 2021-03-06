#!/bin/bash

# TheTHE: The Threat Hunting Environment
# (c) 2019-2020 (https://thethe.e-paths.com)
#
# Install, Run and Update TheTHE
#
# Install with this command (from your Linux machine):
#
# curl -sSL https://install.thethe.e-paths.com | bash
set -e

# Reset
Color_Off='\033[0m' # Text Reset

# Regular Colors
Black='\033[0;30m'  # Black
Red='\033[0;31m'    # Red
Green='\033[0;32m'  # Green
Yellow='\033[0;33m' # Yellow
Blue='\033[0;34m'   # Blue
Purple='\033[0;35m' # Purple
Cyan='\033[0;36m'   # Cyan
White='\033[0;37m'  # White

# Bold
BBlack='\033[1;30m'  # Black
BRed='\033[1;31m'    # Red
BGreen='\033[1;32m'  # Green
BYellow='\033[1;33m' # Yellow
BBlue='\033[1;34m'   # Blue
BPurple='\033[1;35m' # Purple
BCyan='\033[1;36m'   # Cyan
BWhite='\033[1;37m'  # White

echo "                                                                  "
echo "                                                                  "
echo " _________  ___  ___  _______  _________  ___  ___  _______       "
echo "|\___   ___\\  \|\  \|\  ___ \|\___   ___\\  \|\  \|\  ___ \      "
echo "\|___ \  \_\ \  \\\  \ \   __/\|___ \  \_\ \  \\\  \ \   __/|     "
echo "     \ \  \ \ \   __  \ \  \_|/__  \ \  \ \ \   __  \ \  \_|/__   "
echo "      \ \  \ \ \  \ \  \ \  \_|\ \  \ \  \ \ \  \ \  \ \  \_|\ \  "
echo "       \ \__\ \ \__\ \__\ \_______\  \ \__\ \ \__\ \__\ \_______\ "
echo "        \|__|  \|__|\|__|\|_______|   \|__|  \|__|\|__|\|_______| "
echo "                                                                  "
echo "                                                                  "
echo "                                                                  "
echo -e "${Blue}Welcome to The Threat Hunting Environment Installer${Color_Off} "
echo "                                                                  "

function check_dependencies() {
    echo -e "${Green}[+] Checking dependencies.${Color_Off}"

    # docker
    if command -v docker >/dev/null 2>&1; then
        echo -e "${Green}[+] Docker is installed. Good.${Color_Off}"
        echo -e "${Yellow}[!] Make sure your user is in docker group${Color_Off}"
    else
        echo -e "${Red}[!] Missing docker installation. Bad.${Color_Off}"
        echo "See there how to get docker: https://docs.docker.com/install/"
        exit 1
    fi

    # docker-compose
    if command -v docker-compose >/dev/null 2>&1; then
        echo -e "${Green}[+] docker-compose is installed. Good.${Color_Off}"
    else
        echo -e "${Red}[!] Missing docker-compose installation. Bad.${Color_Off}"
        echo "See there how to get docker-compose: https://docs.docker.com/compose/install/"
        exit 1
    fi

    # git
    if command -v git >/dev/null 2>&1; then
        echo -e "${Green}[+] git is installed. Good.${Color_Off}"
    else
        echo -e "${Red}[!] Missing git installation.${Color_Off}"
        exit 1
    fi
}

function check_env_file() {
    if [[ -f ".env" ]]; then
        echo -e "${Green}[+] .env file exists. Good.${Color_Off}"
    else
        echo -e "${Green}[!] .env file not detected. Creating .env file${Color_Off}"
        touch .env
        echo -e "${Blue}[?] Enter a username for MongoDB root: ${Color_Off}"
        read mongo_username
        printf '%s%s\n' "MONGO_INITDB_ROOT_USERNAME=" $mongo_username >>.env
        echo -e "${Blue}[?] Enter a password for MongoDB root: ${Color_Off}"
        read -s mongo_password
        printf '%s%s\n' "MONGO_INITDB_ROOT_PASSWORD=" $mongo_password >>.env
        printf '%s\n' "MONGO_INITDB_DATABASE=thethe" >>.env
        echo -e "${Blue}[?] Setting up thethe secret: ${Color_Off}"
        printf '%s%s\n' "THETHE_SECRET=" $(openssl rand -hex 32) >>.env
    fi

}

echo -e "${Green}[+] Installing thethe.${Color_Off}"

check_dependencies
echo -e "${BGreen}[*] Dependencies checked.${Color_Off}"

echo -e "${Green}[+] Starting the environment${Color_Off}"
mkdir -p external/phishtank
mkdir -p external/urlscan

echo -e "${Green}[+] Checking for certificates${Color_Off}"
source certs.sh

echo -e "${Green}[+] Checking for .env file${Color_Off}"
check_env_file

echo -e "${Green}[+] Building docker images. It will take a while.${Color_Off}"
docker-compose build

echo -e "${BGreen}[*] Installation completed.${Color_Off}"
echo -e "${Blue}Run start.sh (inside thethe directory) if you want to launch thethe.${Color_Off}"
