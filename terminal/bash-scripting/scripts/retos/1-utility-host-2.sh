#!/bin/bash
# Instrucciones: Desarrollar un programa llamado utilityHost.sh, dentro de él vamos a declarar dos variables una llamada option, otra llamada result, vamos a inicializarles e imprimir sus valores.
# Programa para Mostrar los programas de la primera sección

option=0

cd ../

while [ $option -ne 6 ]; do

	echo -e "Menú\n"
	echo "1. Utility Postgres"
	echo "2. Variables"
	echo "3. Operadores Numéricos"
	echo "4. Argumentos"
	echo "5. Comando de Sustitución"
	echo "6. Salir"

	echo -ne "\nOpción: "; read option

	clear

	echo -e "Opción: $option\n"

	case $option in
		1) ./1-utility-postgres.sh ;;
		2) ./2-variables.sh ;;
		3) ./3-operadores-numericos.sh ;;
		4)
			echo -n "Escribe dos argumentos: "
			read nombre horario
			./4-argumentos.sh "$nombre" "$horario"
			;;

		5) ./5-subtitucionCommand.sh ;;
		6) echo "Has salido del programa. ¡Bonito día! ¡Vuelve pronto!" ;;
		*) echo "Error: opción inválida. Inténtalo de nuevo" ;;
	esac

	echo -en "\nPresione <enter> para continuar>"; read

	clear
done
