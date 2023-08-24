# Cifrado asímetrico

El **cífrado asímetrico** o **cífrado de llaves públicas y privadas** es aquel que, por medio de internet, le permite al **emisor** mandar un **mensaje** (texto, imagen, audio...) al **destinatario** de manera que él y solo él pueda entender el **mensaje**, pueda descifrarlo.

## Cómo funciona: Llaves públicas y privadas

> [!note] Analogía
>
> Para fines prácticos, llamaremos:
> - **Candado** a la **llave pública** (algoritmo de encriptación)
> - **Llave** a la **llave privada** (algoritmo de desencriptación)

Antes que nada es necesario establecer ciertos puntos:

- Cada usuario tiene su propia **candado** y **llave**
- El **candado** puede ser compartido a cualquier entidad
- La **llave** solo debe poseerla uno mísmo. No se debe compartir
- Es necesario que **emisor** posea el _**candado** del **receptor**_

Entonces, de esta manera, el **emisor** manda el **mensaje** con el _**candado** del **receptor**_. El **receptor** recibe el **mensaje** y "lo abre" con su **llave** y lee el **mensaje**.

Si cualquier entidad intercepta el **mensaje**, no podra leerlo porque no tiene la **llave**.

## Recursos recomendados

- [Cifrado de llave pública - Khan Academy](https://es.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:online-data-security/x2d2f703b37b450a3:data-encryption/a/public-key-encryption)

## Referencias

- [Vega, F.](https://platzi.com/profes/freddier/) (s.f.). _Cómo funcionan las llaves públicas y privadas_. Platzi. https://platzi.com/clases/1557-git-github/19949-como-funcionan-las-llaves-publicas-y-privadas/