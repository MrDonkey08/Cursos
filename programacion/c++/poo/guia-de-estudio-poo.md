# Guía de Estudio  C++

## Biblioteca estándar 

Un archivo de cabecera de la biblioteca estándar que comience por la letra c equivale a un archivo de cabecera de la biblioteca de C; esto es, un archivo \<f.h\> de la biblioteca de C tiene su equivalente \<cf\> en la biblioteca estándar de C++

### Entrada y Salida

| Archivo de cabecera | Descripción                                         |
| ------------------- | --------------------------------------------------- |
| cstdio              | E/S de la biblioteca de C                           |
| cstdio              | E/S de la biblioteca de C.                          |
| cstdlib             | Funciones de clasificación de caracteres.           |
| cwchar              | E/S de caracteres extendidos.                       |
| fstream             | Flujos para trabajar con archivos en disco.         |
| iomanip             | Manipuladores.                                      |
| ios                 | Tipos y métodos básicos de E/S.                     |
| iosfwd              | Declaraciones adelantadas de utilidades de E/S.     |
| iostream            | Objetos y operaciones sobre flujos estándar de E/S. |
| istream             | Objetos y operaciones sobre flujos de entrada.      |
| ostream             | Objetos y operaciones sobre flujos de salida.       |
| sstream             | Flujos para trabajar con cadenas de caracteres.     |
| streambuf           | Buffers de flujos.                                  |

### Cadenas

| Archivo de cabecera | Descripción                                            |
| ------------------- | ------------------------------------------------------ |
| cctype            | Examinar y convertir caracteres.                       |
| cstdlib           | Funciones de cadena estilo C.                          |
| cstring           | Funciones de cadena estilo C.                          |
| cwchar            | Funciones de cadena de caracteres extendidos estilo C. |
| cwctype           | Clasificación de caracteres extendidos.                |
| string            | Clases para manipular cadenas de caracteres.           |

### Contenedores

| Archivo de cabecera | Descripción                                       |
| ------------------- | ------------------------------------------------- |
| bitset            | Matriz de bits.                                   |
| deque             | Cola de dos extremos de elementos de tipo T.      |
| list              | Lista doblemente enlazada de elementos de tipo T. |
| map               | Matriz asociativa de elementos de tipo T.         |
| queue             | Cola de elementos de tipo T.                      |
| set               | Conjunto de elementos de tipo T.                  |
| stack             | Pila de elementos de tipo T.                      |
| vector            | Matriz de elementos de tipo T.                    |

### Iteradores

| Archivo de cabecera | Descripción |
| ------------------- | ----------- |
| iterator |Soporte para iteradores.

### Algoritmos

| Archivo de cabecera | Descripción                                           |
| ------------------- | ----------------------------------------------------- |
| algorithm           | Algoritmos generales (buscar, ordenar, contar, etc.). |
| cstdlib             | bsearch y qsort.                                      |

### Números

| Archivo de cabecera | Descripción                         |
| ------------------- | ----------------------------------- |
| cmath               | Funciones matemáticas.              |
| complex             | Operaciones con números complejos.  |
| cstdlib             | Números aleatorios estilo C.        |
| numeric             | Algoritmos numéricos generalizados. |
|valarray| Operaciones con matrices numéricas.

### Diagnósticos

| Archivo de cabecera | Descripción                            |
| ------------------- | -------------------------------------- |
| cassert             | Macro assert.                          |
| cerrno              | Tratamiento de errores estilo C.       |
| exception           | Clase base para todas las excepciones. |
|stdexcept| Clases estándar utilizadas para manipular excepciones.

### Utilidades generales

| Archivo de cabecera | Descripción                                |
| ------------------- | ------------------------------------------ |
| ctime               | Fecha y hora estilo C.                     |
| functional          | Objetos función.                           |
| memory              | Métodos para manipular bloques de memoria. |
| utility             | Manipular pares de objetos.                |

### Localización

| Archivo de cabecera | Descripción                                     |
| ------------------- | ----------------------------------------------- |
| clocale             | Control estilo C de las diferencias culturales. |
| locale              | Control de las diferencias culturales.          |

### Soporte del lenguaje

| Archivo de cabecera | Descripción                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| cfloat              | Límites numéricos en coma flotante estilo C.                                                   |
| climits             | Límites numéricos estilo C.                                                                    |
| csetjmp             | Salvar y restaurar el estado de la pila.                                                       |
| csignal             | Establecimiento de manejadores para condiciones excepcionales(también conocidos como señales). |
| cstdarg             | Lista de parámetros de función de longitud variable.                                           |
| cstddef             | Soporte de la biblioteca al lenguaje C.                                                        |
| cstdlib             | Definición de funciones, variables y tipos comunes.                                            |
| ctime               | Manipulación de la fecha y hora.                                                               |
| exception           | Tratamiento de excepciones.                                                                    |
| limits              | Límites numéricos.                                                                             |
| new                 | Gestión dinámica de memoria.                                                                   |
| typeinfo            | Identificación de tipos durante la ejecución.                                                  |

### Concurrencia

| Archivo de cabecera | Descripción               |
| ------------------- | ------------------------- |
| thread              | Programación concurrente. |


## Operadores

| Operador  | Tipo                                       |
| --------- | ------------------------------------------ |
| &         | dirección                                  |
| *         | desreferencia                              |
| new       | asignación dinámica de memoria             |
| new[ ]    | asignación dinámica de arreglo             |
| delete    | desasignación dinámica de memoria          |
| delete[ ] | desasignación dinámica de arreglo          |
| .         | selección de miembro mediante un objeto    |
| ->        | selección de miembro mediante un apuntador |
| .*        | apuntador a miembro mediante un objeto     |
| ->*       | apuntador a miembro mediante un apuntador  |
| ~         | unario de complemento a nivel de bits      |
| sizeof    | determinar el tamaño en bytes              |
| ?:        | ternario condicional                       |

<!-- Identificador de 31 carácteres o menos -->

