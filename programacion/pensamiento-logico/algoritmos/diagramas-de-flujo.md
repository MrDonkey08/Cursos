
# Diagramas de flujo

|   Figura   |    Nombre    |                                                                                                Descripción                                                                                                |
|:----------:|:------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   Óvalo    | Inicio - Fin |                                                                                   Indica el inicio o el fin del proceso                                                                                   |
|   Rombo    | Condicional  |                                                                Hace una pregunta cerrada y con base a la respuesta, toma un camino u otro.                                                                |
| Rectángulo |   Proceso    |                                                                      Dentro de este puede haber una operación, mensaje u algoritmo.                                                                       |
|   Flecha   |   Conector   | Indica el inicio y el final de un proceso. Este sirve para especificar las conecciones entre los símbolos. Todas las figuras tienen que tener por lo menos 2 conectores, a excepción del inicio y el fin. |

```mermaid
flowchart TD

A([Inicio]) --> B{Condición} 
B ---> |Sí| C[Proceso 1]
B ---> |No| D[Proceso 2]
C --> E([Fin])
D --> E([Fin])
```


## Referencias

- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.). _¿Qué es un diagrama de flujo?"_. [Nuevo Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo](https://platzi.com/cursos/pensamiento-logico/).[Platzi](https://platzi.com/home). Recuperado el 15 de agosto de 2022 de https://platzi.com/clases/3221-pensamiento-logico/50682-que-es-un-diagrama-de-flujo/