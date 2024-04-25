: '
!/bin/bash
Programa para ejemplificar cómo se realiza el paso de opciones con o sin parámetro
Autor: Alan
'

echo -e "Programa Opciones\n"

echo "Opción 1 enviada $1"
echo "Opción 2 enviada $2"
echo -e "Opciones enviadas $*\n"

echo -e "Recuperar valores\n"

while [ -n "$1" ]; do
	case "$1" in
	-a) echo "-a option utilizada" ;;
	-b) echo "-b option utilizada" ;;
	-c) echo "-c option utilizada" ;;
	*) echo "$1 no es una opción" ;;
	esac
	shift
done
