---
title: 2. Puntero
author: Alan Yahir Juárez Rubio

aliases: Apuntador
tags: c, cpp, c++, puntero, apuntador

creation date: 05-05-2023
last modification date: 05-05-2023

type: Note
---

# Puntero

Cuando se declara una _variable_, esta se almacena en una _dirección de memoria_.  El valor de una _dirección de memoria_ está escrita en _hexadecimal_, p. ej: 0x0001

Un **puntero** es una _variable_ que almacena la _dirección de memoria_ de otra _variable_. P. ej:

```cpp
#include <iostream>

using namespace std;

int main(){
	char letra = 'A';
	char *ptr = &letra; // Se guarda la dirección de memoria de la variable letra en la variable puntero ptr.
						// La variable puntero tiene que ser del mismo tipo que la variable a guardar
	
	cout << (int *) &letra << endl; // Como es tipo char, se utiliza (int *) para convertir la dirección de memoria 
									// en un número para poder visualizarlo correctamente en hexadecimal.
	cout << (int *) ptr << endl; // Imprime lo mismo que la línea anterior, pero ahora accediendo a la variable ptr.
	cout << *ptr; // Accedemos al valor de la variable letra desde su puntero
}
```

<!-- 
*ptr == valor 
ptr == dirección de memoria-->


<!--0x00000001 32 bits
0x0000000000000001 - 64 bits

-->

<div style="page-break-after: always;"></div>

## Referencias

- [Martínez, D.](https://platzi.com/profesores/diananerd/) (s.f.). _Punteros_. [Curso de Programación Orientada a Objetos con C++](https://platzi.com/cursos/c-plus-plus-poo/). Platzi. Recuperado el 06 de mayo de 2023 de https://platzi.com/clases/2373-c-plus-plus-poo/38903-punteros/
- [Martínez, D.](https://platzi.com/profesores/diananerd/) (s.f.). _Usando punteros_. [Curso de Programación Orientada a Objetos con C++](https://platzi.com/cursos/c-plus-plus-poo/). Platzi. Recuperado el 06 de mayo de 2023 de https://platzi.com/clases/2373-c-plus-plus-poo/38904-usando-punteros/

<!-- https://www.youtube.com/watch?v=qtQZ1Ev1wOw&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh&index=85 -->