# !/bin/bash
# Programa para ejemplificar el paso de argumentos

if [ $# -ne 2 ]; then
	echo "Error: Se requieren exactamente dos parámetros."
	echo "Uso: $0 <nombreCurso> <horarioCurso>"
	exit 1
fi

nombreCurso=$1
horarioCurso=$2

echo "El nombre del curso es: $nombreCurso dictado en el horario de $horarioCurso"
echo "El número de parámetros enviados es: $#"
echo "Los parámetros enviados son: $*"
