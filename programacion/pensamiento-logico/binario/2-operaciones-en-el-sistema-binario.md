---
title: 2. Operaciones en el Sistema Binario
author: Alan Yahir Juárez Rubio

tags: binario, operaciones

creation date: 26-04-2023
last modification date: 21-05-2023

type: Note
---

# Operaciones en el Sistema Binario

## Suma

Para sumar un binario es muy similar a lo que hacemos en el decimal. Se suman los dígitos de un número de la siguente manera

$$\begin{array}{cc}
	0+0=0\\
	0+1=1\\
	1+0=1\\
	1+1=0
\end{array}$$

En el caso del $1+1$, pasa lo mismo que cuando completas una decena en el sistema decimal, se pasa al dígito a la izquierda.

$$\begin{array}{rl|ll}
	10110&+& 22 &+\\
	\underline{11110} && \underline{30}\\
	{110100} && {52}
\end{array}$$
## Resta

De la misma manera, la resta maneja las mismas propiedades.

$$\begin{array}{cc}
	0-0=0\\
	1-0=1\\
	1-1=0\\
	0-1=1
\end{array}$$

En el caso de $0-1$, se iguala a 1 y se le quita una unidad al dígito de la izquierda.

$$\begin{array}{rl|lr}
	110101&-&53&-\\
	\underline{101110} && \underline{46}\\
	000111&&\ 7
\end{array}$$

## Multiplicación

Para trabajar la multiplicación, es exactamente igual que en el sistema decimal, con la única diferencia en la forma de sumar.

$$\begin{array}{cc}
	0*0=0\\
	0*1=0\\
	1*0=0\\
	1*1=1
\end{array}$$

$$\begin{array}{rl|rr}
	10101&*&21&*\\ \underline{1101}&&\underline{13}\\10101&&63\\
	\ 00000\ \ &&21\ \ \\10101\ \ \ \ && 273\\\underline{10101}\ \ \ \ \ \ \\ 100010001
\end{array}$$

## División

En el caso de la división, es practicamente lo mismo que en el sistema decimal, con la diferencia de la manera de aplicar la resta.

$$\begin{alignat}{2}&01011\\10|&\overline{10110}\\
	&\underline{10\mspace26mu}\\ &\mspace8mu 0011\\
	&\mspace26mu\underline{10\mspace8mu}\\
	&\mspace26mu010\\
	&\mspace35mu\underline{10}\\
	&\mspace35mu00
\end{alignat}$$

<div style="page-break-after: always;"></div>

## Referencias

- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.). _Suma y resta de binarios_. [Nuevo Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo](https://platzi.com/cursos/pensamiento-logico/). [Platzi](https://platzi.com/home). Recuperado el 13 de agosto de 2022 de https://platzi.com/clases/3221-pensamiento-logico/50673-suma-y-resta-de-binarios/

- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.). _Multiplicación y división de binarios_. [Nuevo Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo](https://platzi.com/cursos/pensamiento-logico/). [Platzi](https://platzi.com/home). Recuperado el 13 de agosto de 2022 de https://platzi.com/clases/3221-pensamiento-logico/50674-multiplicacion-y-division-de-binarios/

