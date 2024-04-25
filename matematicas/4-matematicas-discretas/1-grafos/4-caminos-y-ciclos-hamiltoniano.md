# Caminos y ciclos hamiltonianos

Un **camino hamiltoniano** es aquel en el que visitas a todas los vértices sin repetir aristas y con la posibilidad de utilizar las aristas que sean, es decir, no es obligatorio utilizar todas las aristas.

Para afirmar que hay un camino hamiltoniano se debe cumplir la condición donde la suma del grado de los dos grados más pequeños de los vertices es mayor o igual al número de vértices menos uno

$$\text{Grado}\left(u\right)+\text{Grado}\left(v\right)\geq n-1$$

donde $n$ es el número de vértices

Si un grafo no cumple con esta condición, no significa que no sea hamiltoniano, sino que simplemente no se puede saber a ciencia cierta.

## Grafo hamiltoniano

Son todos aquellos que tienen tanto un **ciclo hamiltoniano**.
Cuando uno de los nodos tiene grado uno, ya se sabe que no es un **grafo hamiltoniano**.

<div style="page-break-after: always;"></div>

## Referencias

- [Orduz, S.](https://platzi.com/profesores/sergio-orduz-240/) (s.f.). _Caminos y ciclos  hamiltonianos_. [Curso de Matemáticas Discretas](https://platzi.com/cursos/discretas/). [Platzi](https://platzi.com/). Recuperado el 02 de enero de 2023 de https://platzi.com/clases/1319-discretas/12224-caminos-y-ciclos-hamiltonianos/
