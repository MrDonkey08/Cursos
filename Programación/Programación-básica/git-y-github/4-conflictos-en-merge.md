# Conflictos en Merge

Un **conflicto** al usar **merge** se genera cuando el último **commit** del **HEAD** y la **rama** señalada modifican la misma línea. 

Cuando **git** detecta un **conflicto**, modifica el archivo de la siguiente manera 

```txt
...
<<<<<< HEAD
	Lineas modificadas 
	del HEAD
	...
	=======
	Líneas modificadas
	del segundo branch
	...
>>>>>> nombre del segundo branch
...
```

Para resolver este **conflicto** bastaría con editar el archivo, eliminar lo que no quieras y agregar o modificar contenido si es necesario. Al final debería quedar así

```txt
...
	Líneas definitivas 
	del merge
...
```

Una vez resuelto todos los **conflictos** solo restaría aplicar un `add` y un `commit` para que el **merge** sea satisfactorio.

