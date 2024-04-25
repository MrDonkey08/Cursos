# Árbol de expansión mínimo

Un árbol de expansión mínimo es aquel árbol que partiendo de una raíz pueda conectar todos los vértices buscando los caminos de menor costo. Para sacar el costo mínimo del árbol solo basta con ir sumando el valor que tiene cada conexión nivel por nivel, luego sumar todos los niveles.


![arbol-de-expansion-minimo-1 | center](img/arbol-de-expansion-minimo.webp)





Aplica para ambos algoritmos:

> [!NOTE]
> 
> - Cabe mencionar que cuando estemos haciendo este proceso no se formen ciclos cerrados o rutas cerradas porque sino se estarían repitiendo caminos por los cuales no se deberian pasar.
>  
> - Esta conexión no es de orden secuencial, por lo que puedes hacer un camino y si se presenta algun ciclo o ruta cerrada, puedes regresarte a cualquiera de los demás nodos que ya han sido conectados y seguir conectando aquellos que no están conectados.


<div style="page-break-after: always;"></div>

## Referencias

- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s.f). _Árbol de expansión mínimo_. [Curso de Matemáticas Discretas](https://platzi.com/cursos/discretas/). [Platzi](https://platzi.com/). Recuperado el 07 de enero de 2023 de https://platzi.com/clases/1319-discretas/12231-arbol-de-expansion-minimo/

- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s.f). _Algoritmo de Prim_. [Curso de Matemáticas Discretas](). [Platzi](https://platzi.com/). Recuperado el 08 de enero de 2023 de https://platzi.com/clases/1319-discretas/12236-algoritmo-de-prim/

- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s.f). _Algoritmo de Kruskal_. [Curso de Matemáticas Discretas](). [Platzi](https://platzi.com/).  Recuperado el 08 de enero de 2023 de https://platzi.com/clases/1319-discretas/12238-algoritmo-de-kruskal/