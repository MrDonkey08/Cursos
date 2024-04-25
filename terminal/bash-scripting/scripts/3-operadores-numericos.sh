: '
!/bin/bash
Programa para revisar los tipos de operadores
Autor: Alan
'

echo -e "Tipos de Operadores\n"
echo -e "Ingresa dos números:\n"

echo -n "1: "; read num1
echo -n "2: "; read num2

echo -e "\nNúmeros:\n\n1 = $num1\n2 = $num2"

echo -e "\nOperadores Aritméticos\n"

echo -e "Suma:\t\t$num1 + $num2 = $((num1 + num2))"
echo -e "Resta:\t\t$num1 - $num2 = $((num1 - num2))"
echo -e "Multiplicación:\t$num1 * $num2 = $((num1 * num2))"
echo -e "División:\t$num1 / $num2 = $((num1 / num2))"
echo -e "Residuo:\t$num1 % $num2 = $((num1 / num2))"

echo -e "\nOperadores Relacionales\n"

echo -e "Mayor:\t\t$num1 > $num2 = $((num1 > num2))"
echo -e "Menor:\t\t$num1 < $num2 = $((num1 < num2))"
echo -e "Mayor o igual:\t$num1 >= $num2 = $((num1 >= num2))"
echo -e "Menor o igual:\t$num1 <= $num2 = $((num1 <= num2))"
echo -e "Igual:\t\t$num1 != $num2 = $((num1 == num2))"
echo -e "Diferente:\t$num1 != $num2 = $((num1 != num2))"

echo -e "\nOperadores de Asignación\n"

echo -e "Suma:\t\t$num1 += $num2 = $((num1 += num2))"
echo -e "Resta:\t\t$num1 -= $num2 = $((num1 -= num2))"
echo -e "Multiplicación:\t$num1 *= $num2 = $((num1 *= num2))"
echo -e "División:\t$num1 / $num2 = $((num1 /= num2))"
echo -e "Residuo:\t$num1 % $num2 = $((num1 %= num2))"
