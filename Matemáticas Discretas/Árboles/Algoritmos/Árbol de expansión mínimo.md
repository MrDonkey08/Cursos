Un árbol de expansión mínimo es aquel árbol que partiendo de una raíz pueda conectar todos los vértices buscando los caminos de menor costo. Para sacar el costo mínimo del árbol solo basta con ir sumando el valor que tiene cada conexión nivel por nivel, luego sumar todos los niveles.

![[Pasted image 20230107172841.png | 600]]

---
## Algoritmo de prim

1. Escoger un nodo cualquiera.
2. Escoger el nodo asociado al nodo elegido previamente que tengan menor valor, menor coste.
3. En cada iteración selecciona la arista de menor peso relacionado con los nodos conectados.
4. Finaliza cuando todos los nodos están conectados con $n-1$ aristas, donde $n$ es el número de nodos.
5. Para conseguir el coste total suma todas los valores de las aristas seleccionadas.

![[Algoritmo de prim.png]]

**Coste total:** 27

---
## Algoritmo de Kruskal

El algoritmo de Kruskal al igual que el algoritmo de Prim sirve para buscar el árbol de expansión mínimo, la diferencia es que el algoritmo de Kruskal inicia seleccionando la arista de menor valor y después en cada iteración se agrega la arista de menor valor del conjunto disponible.

1. Selecciona la arista menor.
2. En cada iteración agruegue la arista de menor longitud del conjunto de arcos disponibles.
3. El algoritmo finaliza cuando todos los vertices están conectados con $n-1$ arcos.

---
Aplica para ambos algoritmos:

```ad-note 
Cabe mencionar que cuando estemos haciendo este proceso no se formen ciclos cerrados o rutas cerradas porque sino se estarían repitiendo caminos por los cuales no se deberian pasar.
```

```ad-note 
Esta conexión no es de orden secuencial, por lo que puedes hacer un camino y si se presenta algun ciclo o ruta cerrada, puedes regresarte a cualquiera de los demás nodos que ya han sido conectados y seguir conectando aquellos que no están conectados.

```

---
## Referencias

- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s/i). [_Árbol de expanción mínimo_](https://platzi.com/clases/1319-discretas/12231-arbol-de-expansion-minimo/). [Curso de Matemáticas Discretas](https://platzi.com/cursos/discretas/). [Platzi](https://platzi.com/). [Consultado el 07/01/2023].
- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s/i). [_Algoritmo de Prim_](https://platzi.com/clases/1319-discretas/12236-algoritmo-de-prim/). [Curso de Matemáticas Discretas](). [Platzi](https://platzi.com/). [Consultado el 08/01/2023].
- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s/i). [_Algoritmo de Kruskal_](https://platzi.com/clases/1319-discretas/12238-algoritmo-de-kruskal/). [Curso de Matemáticas Discretas](). [Platzi](https://platzi.com/). [Consultado el 08/01/2023].
