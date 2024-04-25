---
title: Ciclos
author: Alan Yahir Juárez Rubio

aliases: Ciclos de control
tags: programacion, ciclos, control

creation date: 26-04-2023
last modification date: 21-05-2023

type: Note
---

# Ciclos

for
- Inicio/Punto de partida.
- Cantidad de iteraciones
- Incremento.

Ejemplo


```
for (i = <inicio>; i < <n_iteraciones>; <incremento>)

for (i = 0; i < 4; i++)
```

## While

Establece una condición y, mientras esta se cumpla, se repetirá el ciclo. Este puede llegar a ser infinito si no hay manera de romper la condición.

```
while (a < b)
	"a es menor a b."
	a = a + 1
```

## DoWhile

```
do 
	"Espera tu turno."
while
	(h_cita >= h_actual)
```