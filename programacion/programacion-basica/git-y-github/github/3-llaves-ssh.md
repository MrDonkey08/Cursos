# Github: Configurar llaves SSH 

## Generar llaves

1. Ejecuta el sustituyéndolo por tu email:

```shell
ssh-keygen -t ed25519 -C "tu@email.com"
```

**Note:**  Si estás usando un sistema legacy que no soporta Iel algoritmo Ed25519 algorithm, utiliza:

```shell
 ssh-keygen -t rsa -b 4096 -C "tu@email.com"
```

```shell
Introduce la ruta en donde se guardará la llave (/home/YOU/.ssh/ALGORITHM):[Press enter]
```
## Agregar tu llave al ssh-agent

1. Inicia el ssh-agent en segundo plano.

```shell
eval "$(ssh-agent -s)"
```

2. Agrega tu llave SSH privada 

```shell
ssh-add ~/.ssh/id_ed25519
```

### macOS Sierra 10.12.2 o superior

2. Crea un archivo config en la ruta ~/.ssh
	1. Insértale el siguiente contenido

```shell
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

3. Agrega tu llave SSH privada; en caso de error ejecuta sin el argumento `-K`

```shell
ssh-add -K ~/.ssh/id_rsa
```

## Referencias 

- [GitHub Docs](https://docs.github.com/en). (s.f). _Generating a new SSH key and adding it to the ssh-agent_. Consultado el 15 de agosto de 2023 de https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

- [Vega, F.](https://platzi.com/profes/freddier/) & Rojas, L. (s.f.). _Configura tus llaves SSH en local_. https://platzi.com/clases/1557-git-github/19950-configurar-llaves-ssh-en-github/