# !/bin/bash
# Programa para ejemplificar cómo capturar la infromcación del usuario y validarla utilizando expresiones regulares
# Autor: Alan

identificacionRegex='^\d{10}$'
paisRegex='^EC|COL|US$'

# Validación asumiendo que todos los meses tienen 31 días: 
#fechaNacimientoRegex=^'((19\d{2})|(20([01]\d|2[0-3]))0[1-9])|([12])[0-2]\d)|(3[01])'

#fechaNacimientoRegex='^((19)(\d{2})|(20)([0-1]\d|2[0-3]))(((0\d)|(1[0-2]))(([01]\d)|(2[0-8])))|(0[13578]|(10)(12))((29)|(3[01]))|((0[469]|(11))((29)|(30)))|(((19\d)|((20)[01]))(0|[2468][048]|[13579][26]|([048]))|2020)(0229)'

fechaNacimientoRegex=^(((19\d{2})|(20([01]\d|2[0-3])))((0\d|1[0-2])([01]\d|2[0-8])|((0[13578]|10|12)(29|3[01])|(0[469]|11)(29|30)|0230)))|((19([0248][048]|[13579][26])|20(0[048]|1[26])|2020)0229)'

echo -e "Expresiones Regulares\n"
echo -e "Ingresa los siguientes datos:\n"

read -p "Identificación: " identificacion
read -p "Iniciales de un país [EC, COL, US]: " pais
read -p "Fecha de nacimento: [yyyyMMdd]: " fechaNacimiento

clear

echo -e "Validación de Datos\n"

# Validación Identificación

echo -n echo "Identificación $identificacion "

if [[ $identificacion =~ $identificacionRegex ]]; then
	echo "válida"
else
	echo "inválida"
fi

# Validación País

echo -ne "País $pais "

if [[ $pais =~ $paisRegex ]]; then
	echo "válido"
else
	echo "inválido"
fi

# Validación Fecha de Nacimiento

echo -n "Fecha Nacimiento $fechaNacimiento "

if [[ $fechaNacimiento =~ $fechaNacimientoRegex ]]; then
	echo "válida"
else
	echo "inválida"
fi
