---
title: Arrays en las estructuras de control
author: Alan Yahir Juárez Rubio

tags: arreglos, arrays, for, while, dowhile

creation date: 26-04-2023
last modification date: 21-05-2023

type: Note
---

# Arreglos en las estructuras de control

## Con ciclo for

```
edades = [a, b, c, d]
for (i = 0; i < 4; i++)
	if edades[i] >=18
		"Es mayor de edad."
	else
		"Es menor de edad."
```

## Con ciclo while

```
edades = [a, b, c, d]
cont = 0
while cont <= 3
cont = cont + 1
	if edades[i] >=18
		"Es mayor de edad."
	else
		"Es menor de edad."
```

## Con ciclo dowhile

```
edades = [a, b, c, d]
cont = 0
do
	cont = cont + 1
	if edades[i] >=18
		"Es mayor de edad."
	else
		"Es menor de edad."
while cont <= 3
```

## Referencias

- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.). _Reto 6: algoritmos con ciclos_. [Nuevo Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones](https://platzi.com/cursos/pensamiento-logico-estructuras/). [Platzi](https://platzi.com/home). Recuperado el 16 de agosto de 2022 de https://platzi.com/clases/3222-pensamiento-logico-estructuras/50896-reto-6-algoritmos-con-ciclos/