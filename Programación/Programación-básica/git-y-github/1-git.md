# Control de versiones

El **control de versiones** es la práctica de rastrear y gestionar archivos, directorios y sus respectivos cambios.

## Sistema de control de versiones

Por otra parte, un **sistema de control de versiones** es un programa que nos ayuda a tener un control más práctio y eficiente.

Estos sistemas permiten generan una **base de datos** en la que, por medio de su interfaz, permiten guardar las modificaciones de tus archivos y registrar cada versión.

## Git

**Git** es un **sistema de control de versiones** que, en vez de guardar el archivo completo de cada versión, solo se encarga de guardar los cambios que hay entre las versiones de los archivos. 

P. ej. digamos que creamos el arhivo `ortografia.txt` y en el guardamos el siguiente contenido

```mermaid
graph LR


```

```txt
Acento

El acento es aquel símbolo que indica en qué sílaba tiene una entonación más fuerte.

No todas las palabras llevan acento.

```

y después actualizas su contenido

```txt
Tílde

La tílde es aquel símbolo que indica en qué sílaba tiene una entonación más fuerte.

No todas las palabras llevan tílde.

Las palabras en mayúsculas se los pone tílde
```

Lo que guardaría Github sería los cambios entre la versión actual y la versión anterior.

```txt
- Acento > Tílde
- El acento > La tílde
- acento > tílde
+ Las palabras en mayúsculas se los pone tílde
```

> [!important] Importante
>
> Git solo funciona de esta manera con **texto plano.** Si haces esto con un **binario**, tal como un _archivo word_, _no te guardará las modificaciones_, en cambio remplazará "la versión anterior" con la "versión actual"; esto impide que ahorres espacio y que puedas tener un seguimiento tan eficaz tal como un **texto plano**.

# Referencias

- [Vega, F.](https://platzi.com/profes/freddier/) (s.f.). _¿Por qué usar un sistema de control de versiones como Git?_. Platzi. https://platzi.com/clases/1557-git-github/19934-por-que-usar-un-sistema-de-control-de-versiones-co/

- Git (s.f.) _1.1 Getting Started - About Version Control_. https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control

- Atlassian (s.f.) _¿Qué es el control de versiones?_ https://www.atlassian.com/es/git/tutorials/what-is-version-control