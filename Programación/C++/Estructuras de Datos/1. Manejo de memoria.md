---
title: Manejo de memoria
author: Alan Yahir Juárez Rubio

aliases:
tags:

creation date: 09-04-2023
last modification date: 09-04-2023

type: Note
---

# Manejo de memoria


## Conexión entre CPU y RAM

La **CPU** (_Central Processing Unit_) es el componente de la computadora que se encarga de realizar las operaciones matemáticas, lógicas y de control de los programas.
La **RAM** (_Random Access Memory_) es la memoria en donde se guardan los datos de los programas

La RAM almacena el código que se ejecuta mientras que la CPU lee las instrucciones de ahí.
La CPU puede acceder a cada uno de los registros de la memoria RAM.

## Segmentación de la memoria RAM

La _segmentación de la memoria RAM_ en C y C++ es la siguiente

1. **Instrucciones:** Código ejecutable
2. **Literales:** Literales no ejecutables
3. **Datos estáticos:** Variables declaradas
4. **Heap (controlado por el programador):** Memoria dinámica
5. **Stack (gestionado por el compilador):** Memoria dinámica

Las **instrucciones**, **literales** y **datos estáticos** se les asigna un _espacio en memoria fijo_, es decir, _no va a crecer ni a disminuir_.

Por otra parte, el **heap** y el **stack** son _espacios de memoria dinámica_, es decir, _pueden aumentar y disminuir_.

> [!Note]+ Nota
> 
> La _segmentación de la memoria RAM_ en los diferentes lenguajes de programación, por lo regular, tienen una estructura similar a la de C++_, sin embargo, no siempre tiene que ser así.

