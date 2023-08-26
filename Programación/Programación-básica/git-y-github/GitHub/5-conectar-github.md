# Conectar GitHub

Cabe mencionar que usar **pull** para todos los repositorios **públicos**.

El conectar con un repositorio de **Github** permite usar **pull** en repositorios **privados** y hacer **push** en repositorios de tu pertenencia o aquellos en los que colaboras.

## Con SSH

Una vez creamos las llaves procedemos a entrar a la [Configuración de Llaves SSH en GitHub](https://github.com/settings/keys)

En esta sección agregamos una nueva llave SSH, ponemos un título cualquiera y pegamos la llave pública (la que se localiza en el archivo con la extensión `.pub`).

En la carpeta del repositorio ejecuta

```shell
git remote add origin url-ssh-del-repositorio-en-github
```

## Con https

Una vez creada el _personal access token_, ya puedes acceder por medio de **https** de la siguiente manera:


En la carpeta del repositorio ejecuta

```shell
git remote add origin url-http-del-repositorio-en-github
```

Desde ahora en adelante, al hacer **push** y **pull** (si el repositorio es privado), te pedirá poner tu usuario y contraseña, sustituiras la contraseña por tu token.


## Referencias 

- [GitHub Docs](https://docs.github.com/en). (s.f). _Adding a new SSH key to your GitHub account_. Consultado el 15 de agosto de 2023 de https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows&tool=webui

- [Vega, F.](https://platzi.com/profes/freddier/) & Rojas, L. (s.f.). _Tu primer push_. https://platzi.com/clases/1557-git-github/19951-conexion-a-github-con-ssh/