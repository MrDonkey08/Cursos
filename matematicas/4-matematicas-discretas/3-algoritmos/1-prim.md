# Algoritmo de prim

1. Escoger un nodo cualquiera.
2. Escoger el nodo asociado al nodo elegido previamente que tengan menor valor, menor coste.
3. En cada iteración selecciona la arista de menor peso relacionado con los nodos conectados.
4. Finaliza cuando todos los nodos están conectados con $n-1$ aristas, donde $n$ es el número de nodos.
5. Para conseguir el coste total suma todas los valores de las aristas seleccionadas.

![arbol-de-expansion-minimo-1 | center](img/1-prim.webp)



**Coste total:** 27