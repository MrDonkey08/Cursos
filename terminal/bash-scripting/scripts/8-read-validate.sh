: '
!/bin/bash
Programa para ejemplificar cómo capturar la información del usuario y validarla
Autor: Alan
'

option=0
backupName=""
password=""

echo -e "Programa Utilidades Postgres\n"

read -n1 -p "Ingresa una opción: " option
echo ""
read -n10 -p "Ingresa el nombre del archivo del backup: " backupName
echo ""
# `-s` `--silent` para no mostrar la contraseña
# `-p` `--password` Para desplegar un texto antes de la entrada`

read -sp "Ingresa tu contraseña: " password

echo -e "\n\nDatos ingresados: \n"

echo "1. Opción = $option"
echo "2. Nombre del backup = $backupName"
echo "3. Contraseña = $password"
