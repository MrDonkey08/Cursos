El **algoritmo de Fleury** va a encontrar un **ciclo euleriano**. Recordemos que un ciclo euleriano es un ciclo donde inicias y terminas en el mismo punto, pasando por todas las aristas una sola vez.

Los pasos que seguir son:

1. Verificar que el grado de todos los nodos es par. Si no lo son, no es un ciclo euleriano.
2. Realizar un circuito cerrado, sin importar que no se encluyan todos los nodos.
3. El **algoritmo de Fleury** va a encontrar un **ciclo euleriano**. Recordemos que un ciclo euleriano es un ciclo donde inicias y terminas en el mismo punto, pasando por todas las aristas una sola vez.

Los pasos que seguir son:

1. Verificar que el grado de todos los nodos es par. Si no lo son, no es un ciclo euleriano.
2. Realizar un circuito cerrado, sin importar que no se encluyan todos los nodos.
3. En cada nueva iteración realizar un nuevo camino cerrado visitando aristas que no han sido visitadas.
4. Reemplazar cada nuevo circuito en el inicial hasta visitar todas las aristas.

![[Algoritmo de Fleury.png]]

Hay una condición para determinar si se hizo bien el ciclo: El número de veces que el nodo aparece en el ciclo euleriano debe de ser la mitad del grado que tiene en el grafo.

---
## Referencias

- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s/i). [_Algoritmo de Fleury_](https://platzi.com/clases/1319-discretas/12239-algoritmo-de-fleury/). [Curso de Matemáticas Discretas](). [Platzi](https://platzi.com/). [Consultado el 09/01/2023].

4. Reemplazar cada nuevo circuito en el inicial hasta visitar todas las aristas.

![a](Drawing%202023-01-08%2020.58.35.excalidraw.md)

Hay una condición para determinar si se hizo bien el ciclo: El número de veces que el nodo aparece en el ciclo euleriano debe de ser la mitad del grado que tiene en el grafo.

The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.

---
## Referencias

- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s/i). [_Algoritmo de Fleury_](https://platzi.com/clases/1319-discretas/12239-algoritmo-de-fleury/). [Curso de Matemáticas Discretas](). [Platzi](https://platzi.com/). [Consultado el 09/01/2023].
