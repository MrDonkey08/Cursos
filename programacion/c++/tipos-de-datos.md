---
title: Tipos de datos
author: Alan Yahir Juárez Rubio

aliases:
tags:

creation date: 06-04-2023
last modification date: 06-04-2023

type: Note
---

# Tipos de datos  en C++

## Datos primitivos

Los _tipos de datos primitivos_, _elementales_ o _integrados_ son aquellos  tipos de datos originales de un lenguaje de programación, es decir, aquellos que nos proporciona dicho lenguaje.

|    Tipo     | Descripción                                 |             Tamaño              | Rango                                                                  |
|:-----------:|:------------------------------------------- |:-------------------------------:| ---------------------------------------------------------------------- |
|    bool     | Dato de tipo lógico                         |             1 byte              | 0 o 1 (verdadero o falso)                                              |
|    char     | Carácter o entero pequeño                   |             1 byte              | signed: -128 a 127 <br> unsigned: 0 a 255                              |
|    short    | Entero corto                                |             2 bytes             | signed:  -32,768 a 32,767 <br> unsigned: 0 a 65,535                    |
|     int     | Entero                                      |             4 bytes             | signed:-2,147'483,648 a 2,147'483,647 <br> unsigned: 0 a 4,294'967,295 |
|    long     | Entero largo                                |             4 bytes             | signed:-2,147'483,648 a 2,147'483,647 <br> unsigned: 0 a 4,294'967,295 |
|    float    | Número de punto flotante                    |             4 bytes             | 3.4E-38 a 3.4E+38 (7 dígitos)                                          |
|   double    | Número de punto flotante de doble precisión |             8 bytes             | 1.7E-308 a 1.7E+30 (15 dígitos)                                        |
| long double | Long de punto flotande de doble precisión   | 8 o 10 bytes (según la versión) | 1.7E-308 a 1.7E+308 o 3.4E-4932 a 1.1E+4932 (15 dígitos o...)          |

En los tipos de datos númericos tenemos las dos siguientes categorias:

- **Signed**: Son aquellos que "tienen signo", es decir, abarcan tanto _números positivos_ como _negativos_. Estos se declaran de la siguiente manera:
	- int a
	- signed int b

- **Unsigned**: Son aquellos que "no tienen signo", es decir, solo consideran los _números positivos_. Estos se declaran de la siguiente manera:
	- unsigned int a

<div style="page-break-after: always;"></div>

## Referencias

- [Martínez, D.](https://platzi.com/profesores/diananerd/) (s.f.). _Tipos de datos_. [Curso de C++ Básico](https://platzi.com/cursos/c-plus-plus/). [Platzi](https://platzi.com/home). Recuperado el 06 de abril de 2023 de https://platzi.com/clases/2372-c-plus-plus/38890-tipos-de-datos/

- [Wikipedia](https://es.wikipedia.org/wiki/Tipo_de_dato_elemental). (17 de octubre de 2021). _Tipo de dato elemental_. Recuperado el 06 de abril de 2023 de https://es.wikipedia.org/wiki/Tipo_de_dato_elemental

- [Domingo, J.](https://openwebinars.net/autor/jose-domingo-munoz/) (23 de octubre de 2020). _Principales tipos de datos en C++_. Recuperado  el 06 de abril de 2023 de https://openwebinars.net/blog/principales-tipos-de-datos-en-c/

- [DECSAI](https://decsai.ugr.es/) (s.f.). _Capítulo 2: Léxico de C. Tipos básicos de datos, visibilidad y almacenamiento_. Recuperado  el 06 de abril de 2023 de https://ccia.ugr.es/~jfv/ed1/c/cdrom/cap2/cap24.htm

- [García, E.](https://ejercicioscpp.blogspot.com/2012/09/ejercicioscpp.blogspot.com.es) (s.f.). _Programación C++_. Recuperado  el 06 de abril de 2023 de https://ejercicioscpp.blogspot.com/2012/09/tipos-de-datos-en-c.html
