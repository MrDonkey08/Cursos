# !/bin/bash
# Programa para revisar la declaración de variables

opc=0
nombre=Marco

echo -e "Opción: $opc\nNombre: $nombre"

# Exportar la variable nombre para que esté disponible a los demás procesos

export nombre

# Llamar al siguiente script para recuperar la variable

./2-variables-2.sh
