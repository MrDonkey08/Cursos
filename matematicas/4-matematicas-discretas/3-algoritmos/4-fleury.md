---
title: Algoritmo de Fleury
author: Alan Yahir Juárez Rubio

aliases: algoritmo, fleury
tags: matematicas-discretas/algoritmo

creation date: 09-01-2023
last modification date: 12-02-2023

type: Note
---

# Algoritmo de Fleury

El **algoritmo de Fleury** va a encontrar un **ciclo euleriano**. Recordemos que un ciclo euleriano es un ciclo donde inicias y terminas en el mismo punto, pasando por todas las aristas una sola vez.

Los pasos que seguir son:

1. Verificar que el grado de todos los nodos es par. Si no lo son, no es un ciclo euleriano.
2. Realizar un circuito cerrado, sin importar que no se encluyan todos los nodos.
3. En cada nueva iteración realizar un nuevo camino cerrado visitando aristas que no han sido visitadas.
4. Reemplazar cada nuevo circuito en el inicial hasta visitar todas las aristas.

![algoritmo-de-fleury | center](img/4-fleury.webp)

> [!note]+ Condición para determinar si se hizo bien el ciclo
> 
> El número de veces que el nodo aparece en el ciclo euleriano debe de ser la mitad del grado que tiene en el grafo.

<div style="page-break-after: always;"></div>

## Referencias

- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s.f.). _Algoritmo de Fleury_. [Curso de Matemáticas Discretas](). [Platzi](https://platzi.com/). Recuperado el 09 de enero de 2023 de https://platzi.com/clases/1319-discretas/12239-algoritmo-de-fleury/
