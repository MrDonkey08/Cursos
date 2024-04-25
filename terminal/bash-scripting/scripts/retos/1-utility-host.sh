# !/bin/sh
# Instrucciones: Desarrollar un programa llamado utilityHost.sh, dentro de él vamos a declarar dos variables una llamada option, otra llamada result, vamos a inicializarles e imprimir sus valores.
# Programa para Mostrar los programas de la primera sección

$option=0

while [[ $option  -ne 6 ]]; do

	echo -e "Menú\n"
	echo "1. Utility Postgress"
	echo "2. Variables"
	echo "3. Operadores Numéricos"
	echo "4. Argumentos"
	echo "5. Comando de Sutitución"
	echo "6. Salir"

	echo -ne "\nOpción: "; read $option

	clear

	echo -e "Opción: $option\n"

	case $option in
		1) ./../1-utility-postgres.sh;;
		2) ./../2-variables.sh;;
		3) ./../3-operadores-numericos.sh;;
		4) ./../4-argumentos.sh;;
		5) ./../5-subtitucionCommand.sh;;
		6) echo -e "\n Has salido del programa. ¡Bonito día! ¡Vuelve pronto!";;
		*) echo -e "\n Error: opción inválida. Inténtalo de nuevo";;
	esac

	clear
done

