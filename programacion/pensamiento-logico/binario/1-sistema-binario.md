# Sistema binario

Para entender el **sistema binario**, es necesario partir del **sistema decimal**, aquel con el que estamos familiarizados y trabamos con él cotidianamente.

**Sistema decimal**: Esta conformado por los dígitos 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9.

**Sistema binario**. Conformado por los dígitos 0 y 1.

El **sistema binario** es usado en los dispositivos electrónicos. El 0 representa una ausencia de corriente y el 1 paso de corriente.

Podemos representar un flujo de una corriente de la siguiente manera.

![1.-sistema-binario-1 | center | 300](img/1-sistema-binario-1.webp)

## Conversión de decimal a binario

Para convertir un número del sistema decimal al binario se tiene que dividir entre 2 sin trabajar decimales; entonces el residuo que nos dé es el dígito del número en binario, ya sea 1 o 0; después repetimos el proceso pero ahora con el resultado, con el cociente para ir sacando cada uno de los dígitos del número en binario hasta que el residuo no se pueda dividir entre 2.

$$\begin{array}{cc}
	28\div 2=14\to 0\\
	14\div 2=7\to 0\\
	7\div 2=3\to 1\\
	3\div 2=1\to 1\\
	1\div 2=0\to 1
\end{array}$$

Una vez hecho esta descomposición entre 2, tomamos los residuos de cada una de las divisiones comenzando por la última y terminando con la primera. Listo, el número obtenido es la equivalencia en binario

$$28=11100$$

## Conversión de binario a decimal

Para convertir un número de binario a decimal, lo que se tiene que hacer es tomar los dígitos de derecha a izquierda y multiplicarlo por 2 elevado a la posición que tienen en este mismo orden menos 1.

$$\begin{array}{cc}
	11100\\\\
	0*2^0=0\\
	0*2^1=0\\
	1*2^2=4\\
	1*2^3=8\\
	1*2^4=16
\end{array}$$

Por último, sumas los resultados de las multiplicaciones para obtener la conversión.

$$\begin{array}{cc}
	4+8+16=28\\
	11100=28
\end{array}$$

## Referencias

- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.). _¿Qué es el sistema binario?_. [Nuevo Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo](https://platzi.com/cursos/pensamiento-logico/). [Platzi](https://platzi.com/home). Recuperado el 12 agosto de 2022 de https://platzi.com/clases/3221-pensamiento-logico/50671-que-es-el-sistema-binario/

- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.). _Conversión entre binario y decimal_. [Nuevo Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo](https://platzi.com/cursos/pensamiento-logico/). [Platzi](https://platzi.com/home). Recuperado el 12 agosto de 2022 de https://platzi.com/clases/3221-pensamiento-logico/50671-que-es-el-sistema-binario/
