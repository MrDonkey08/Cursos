# Comandos de Git

> [!important] Síntaxis 
> 
> - Todos los comandos comienzan con `git`. Omitiré `git` en la definición de los comandos, p. ej: `git init` por `init`
> - Los comandos sin definición se refieren a que por sí solos no hacen algo. Necesitan un **flag**.
> - Si en la definición viene solo **flags** significa que _muestra todos sus **flags**_.
> - `p`: significa parámetro

## Configuración de Git

> [!important] Primeros pasos
>
> Es necesario primero establecer un _nombre de usuario_ y un _email_ para poder hacer **commits**, esto con el objetivo de que quede registrado quién hizo dicho **commit**.

- `git config`: **flags**; permite configurar **Git**
  - `--global`: **flags**; permite configurar los **usuarios globales**.
    - `p`
  - `--list`:  Muestra la configuración de **Git**.
    - `show`: **flags**.
  
  <!-- https://platzi.com/clases/1557-git-github19936-crea-un-repositorio-de-git-y-haz-tu-primer-commit/ -->

## Comandos básicos

- `init`: Crea un repositorio en la carpeta actual.
- `status`: Te devuelve la **rama**, los **commits** guadados en **local**  y en **stage**.
- `add`: Pasa los archivos modificados que le indiques de **untracked** a **tracked**, es decir, los guarda en **stage**. 
  - `.`: Guarda en **stage** los archivos modificados.
- `commit`: Guarda los archivos de **stage** en el **repositorio**.
  - `-a`: Guarda en el **repositorio** las modificaciones de los archivos que se les está haciendo **tracking**_.
  - `-m`: Establece un mensaje al **commit**; este va encerrado de `""`. Le puedes dar salto de línea al mensaje mientras no cierres las comillas.
- `rm`: 
  - `--cached`: Elimina los archivos de **stage**.
  - `-f`, `--force`: Elimina los archivos modificados de todas partes.

<!-- -->

## Registros


- `show`: Muestra los cambios que han existido dentro de un archivo.
- `log`: Muestra los **commits**.
  - `--stat`: Muestra los **commits** con sus respectivos cambios.
- `diff`: Muestra las diferencias entre los archivos modificados en **local** y **stage** 
  - Muestra las diferencias entre dos `commits`. Requiere de dos `p`: el `id` de cada uno de ellos.

## Revertir y regresar


- `reset`: Revierte los `commits` hasta el `comit` que le indiques, es decir, borra los `commits` posteriores a dicho `commit`.
  - `--hard`: Elimina los archivos de **stage** y **local**
  - `--soft`: Preserva los archivos de **stage** (`reset` = `reset --soft`)
- `checkout`: Restaura los archivos (o archivo especificado) de un **commit** en  **stage**, sin borrar `commits`.

## Ramificaciones (branches)


- `branch`: muestra los **branches** del repositorio (marca con un `*` el **branch** en el que te encuentras).
  - `p`: Para crear un **branch** simplemente añadimos el nombre que desees ponerle.
  - `switch`: Te mueves a un **branch**.
  - `-m <nuevo nombre>`: Renombrar el **branch**. 

- `show-branch`: Muestra los `branches` y su historia.
  - `--all`: Muestra más datos.

> [!note] Cambio de brances
>
> Para  cambiar de `branch` usamos `checkout` + nombre del `branch`.
> 
> Si tienes cambios pendientes en **local** o en **stagin** no te permitirá cambiar de branch; tendrás que aplicarles un `stash`, un `commit` o, en su defecto, un `rm`.

### Merge

- `merge`: Fusiona dos **branches** y lo guarda en un nuevo **commit** en el **branch** actual. El parámetro es el nombre del **branch** con el que va fusionarse.
  - `--abort`: Aborta el **merge**.

#### Conflictos en Merge

Un **conflicto** al hacer **merge** se genera cuando el último **commit** de cada uno de los **branches** modifican la misma línea. 

Cuando **git** detecta un **conflicto**, modifica el archivo de la siguiente manera 

```txt
...
<<<<<< HEAD
	Lineas modificadas 
	del branch actual
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

Una vez resuelto todos los **conflictos** solo restaría aplicar un `add` y un `commit` para que el **merge** sea satisfactoriamente realizado.

<!-- TODO: Definir head y remplazar branch actual por head -->

<!-- https://platzi.com/clases/1557-git-github/19941-resolucion-de-conflictos-al-hacer-un-merge/ -->

## Alojamiento

> [!important] Buena práctica
>
> Si quieres aplicar un `push`, es importante siempre aplicar antes un `pull`.

- `clone`
- 
- `fetch`: Actualiza los cambios más recientes del servidor sin implementarlos en el repositorio local.


- `push`
  - `origin`: Sube el contenido no alojado en el servidor.
    - `<nombre del branch>`: Sube los **commits** del **branch**.
    - `--tags`: Sube los **tags**.
    - `:refs/tags/<nombre del tag>`: Una vez eliminado el **tag** localemente, lo elimina del servidor.
    - ``
- `pull`: `fetch` + `merge` 
  - `origin <nombre del branch>`: Descarga los **commits** alojados en el servidor que no se encuentran localmente.


---
## Tags y versiones

- `tag`: Muestra los tags del **HEAD**.
  - `-a <nombre del tag> -m <"mensaje"> <hash>`: Crea un tag
  - `d <nombre del tag>`: Elimina un tag

<!-- https://platzi.com/clases/1557-git-github/19952-tags-y-versiones-en-git-y-github/ -->

---


- `stash`: Guarda las modificaciones en **stash** y las elimina de **working** y **staging**, permitiendo recuperarlas. Esto permite cambiar de **branch** sin perder cambios que no requieren hacer **commit**.
  - `pop`: Restaura el **stash** en el **branch** actual.
  - `drop`: Elimina el **stash**.

<!-- https://platzi.com/clases/1557-git-github/19945-analizar-cambios-en-los-archivos-de-tu-proyecto-co/ -->