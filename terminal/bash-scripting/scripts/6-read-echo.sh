: '
!/bin/bash
Programa para ejemplificar cómo capturar la información del usuario utilizando el comando echo, read y $REPLY
Autor: Alan
'

option=0
backupName=""
password=""

echo -e "Programa Utilidades Postgres\n"

echo -n "Ingresa una opción: "
read; option=$REPLY

echo -n "Ingresa el nombre del archivo del backup: "
read backupName



echo -n "Ingresa tu contraseña: " 
read -s password

echo -e "\n\nDatos ingresados: \n"

echo "1. Opción = $option"
echo "2. Nombre del backup = $backupName"
echo "3. Contraseña = $password"
