# Comandos de Git

> [!IMPORTANT] 
> 
> - Todos los comandos comienzan con `git`. Omitiré `git` en la definición de los comandos (e.g. `git init` por `init`).
> - **HEAD**: _**Rama** actual_, en la que te ubicas.
> - Los **parámetros** con espacios hacen referencia a dos párametros (`<nombre valor>`) y con `-` es un único **parámetro**.
> - Al mencionar **rama** hacer referencia a la _**rama** indicada_ (como parámetro).

## Configuración de Git

> [!IMPORTANT]
>
> Es necesario primero establecer un _nombre de usuario_ y un _email_ para poder hacer **commits**, esto con el objetivo de que quede registrado quién hizo dicho **commit**. Veáse [Configuración Inicial de Git](2-git-configuration.md).


- `git config`: 
  - `--global`: Permite acceder la **configuración global**.
  - `--local`: permite acceder la **configuración local** (i.e del repositorio).
    - `<atributo valor>`: Crea o modifica el **atributo** con un valor.
	- `<--unset atributo>`: Elimina el **atributo**.

    - `-l`, `--list`:  Muestra la configuración de **Git**.
      - `show`: **flags**.
    - `alias.<nombre> <comando>`: Establece un alias en git

## Comandos básicos

### Creación

- `init`: Crea un **repositorio** en la carpeta actual.


- `add`: Añade los archivos a **staging** y a **tracking**. 
  - `.`: Implementa `add` a todos los archivos **tracked**.


- `commit`: Guarda los archivos de **staging** en el **repositorio**.
  - `-a`: Aplica `add` a todos los archivos **tracked**.
  - `-m "mensaje"`: Establece un mensaje al **commit**. Le puedes dar salto de línea al mensaje mientras añadas las _comillas de cierre_.
  - `-amend`: Deshace el **commit** más reciente para que puedas modificarlo e incluso cambiar el _mensaje_ del **commit**.

### Eliminación

- `rm`: 
  - `--cached`: Elimina los archivos de **staging** y **tracking**.
  - `-f`, `--force`: Elimina los archivos modificados de todas partes.

### Status y registros

- `status`: Señala el **HEAD** y los archivos guadados en **local** y **staging**.
- `show`: Muestra los cambios de los archivos del último **commit** respecto a la versión previa.
  - `<archivo>`: Aplica `show` al archivo especificado.
  - `--stat`: Muestra los **commits** con sus respectivos cambios.

- `log`: Muestra los **commits** del **HEADER**.
	- `--oneline`: Te los muestra en una línea.
	- `--graph`: Te los muestra en un un _gráfico_.
	- `--all`, `-a`: Muestra los **commits** de todos las **ramas**.

- `diff`: Muestra las diferencias entre los archivos modificados en **local** y **staging** 
  - `<hash-1 hash-2`>: Muestra las diferencias entre dos **commits**.


- `reflog:` Te permite ver _TODO EL HISTORIAL DE **COMMITS**_ , con el fin de poder rebobinar (`reset`) desde cualquier punto.

### Búsqueda

- `grip`
  -  `<texto>`: Busca entre los archivos del repositorio y señala los lugares en donde se utilizó dicho texto.
    - `-n`: Muestra la línea donde se utilizó.
    - `-c`: Muestra la cantidad de veces que fue utilizado.

- `log -S <"texto">`: Busca entre los **commits** y muestra aquellos en el que se usó dicho texto.

## Revertir y regresar

- `reset`: 
  - `<hash>`: Revierte los **commits** hasta el **commit** indicado, eliminando los **commits** posteriores a este, es decir, rebobinar.
    - `--hard`: Elimina los archivos de **staging** y **local**
    - `--soft`: Preserva los archivos de **staging** (`reset` = `reset --soft`)


- `checkout`
  - `<hash>`: Restaura los archivos (o archivo especificado) de un **commit** en  **staging** sin borrar `commits`.
  - `<branch>`: Cambio de **rama**.

### Stash

- `stash`: Mueve las modificaciones de **working** y **staging** en un área temporal llamada **stash** permitiendo recuperarlas (justo en las áreas que se encontraban). Esto permite guardar cambios que no están listos para un **commit**.
  - `<nombre>`: 
  - `list`: Muestra los **stash**.
  - `pop`: Restaura el **stash** en el **HEAD**.
  - `drop`: Elimina el **stash**.
  - `branch <nombre>`: Crea una **rama** y mueve el **stash**

## Ramificaciones (branches)

- `branch`: muestra las **ramas** del repositorio (marca con un `*` el **HEAD**).
  - `<nombre>`: Se crea una **rama** con dicho nombre.
  - `switch`: Te mueves a una **rama**.
  - `-m <nuevo-nombre>`: Renombrar la **rama**. 
  - `-r`: Muestra las **ramas** alojadas en el **servidor**.
  - `-a`: Muestra las **ramas** locales y del **servidor**.

- `show-branch`: Muestra lars **ramas** y su historia.
  - `--all`: Muestra más datos.

### Cambio de ramas

> [!NOTE]
>
> Para  cambiar de **rama** usamos `checkout <nombre-de-rama>` (se recomienda remplazar `checkout` por `switch` para evitar _errores humanos_).
> 
> Si tienes archivos en **local** o **staging**, tendrás que aplicarles un `stash`, un `commit` o, en su defecto, un `rm` para poder cambiar de **rama**.

### Merge

> [!NOTE]
> 
> En ocasiones se pueden generar conflictos al **fusionar** dos ramas. Veáse [Conflictos en Merge](4-conflictos-en-merge.md)

- `merge`: 
  - `<rama>`: Fusiona el **HEAD** con la **rama**.
  - `--abort`: Aborta el **merge**.

## Alojamiento (Github, GitLab...)

> [!NOTE] 
>
> Si quieres aplicar un `push`, es importante siempre aplicar antes un `pull`.

- `clone`: 
  - `<enlace-del-repositorio>`: Permite clonar **repositorios públicos**.
  - `<enlace-SSH-del-repositorio`: Permite **repositorios públicos y privados** por medio de las **llaves SSH**.

> [!IMPORTANT] 
> 
> El **origen remoto** es necesario para los **comandos de alojamiento**. Se suele nombrar _origin_ al ser propietario o colaborador o, en su defecto, _upstream_.

- `remote`: Muestra los **orígenes remotos**.
	- `add <nombre enlace>`:  Agrega el **origen remoto** del directorio
	- `remove <nombre>`: Elimina el **origen remoto** 
	- `-v`: Muestra los **orígenes remotos** con sus respectivos enlaces

- `fetch`:
  - `<remote> <nombre-del-branch>`: Respecto a la **rama**, descarga sus **commits** alojados en el **servidor** que no están _localmente_ 

- `pull`: 
  - `<remote> <nombre-del-branch>`: `fetch` + `merge`


- `push`
  - `<remote>`: 
    - `<nombre-del-branch>`: Sube al **servidor** los **commits** de la **rama**.
    - `--tags`: Sube los **tags**.
    - `:refs/tags/<nombre-del-tag>`: Una vez eliminado el **tag** localemente, lo elimina del servidor.

## Tags y versiones

- `tag`: Muestra los tags del **HEAD**.
  - `-a <nombre-del-tag> -m <"mensaje"> <hash>`: Crea un tag
  - `d <nombre-del-tag>`: Elimina un tag.

## Git Clean

- `clean`: 
  - `dry-run`: Muestra los archivos que eliminaría si se ejecutara `clean`.
  - `-f`: Elimina _**todos los archivos**_ del _directorio_ que no son _trackeados_ y que no están listados en `.gitignore`.

## Cherry Pick

- `cherry-pick`:
  - `hash`: Trae todos los cambios de cierto **commit** de una **rama** al **HEAD**.

## Referencias

- [Vega, F.](https://platzi.com/profes/freddier/) (s.f.). _Curso Profesional de Git y GitHub_. Platzi. https://platzi.com/cursos/git-github/

- Wulfbane (25 octubre, 2012).  _Archivo local git config - eliminar la configuración. Recuperado el 26 de agosto de 2023 de  https://www.enmimaquinafunciona.com/pregunta/25385/archivo-global-git-config---eliminar-la-configuracion