# Introducción a la derivada

La **derivada** es una función que te permite encontrar la **pendiente**, el incremento o decremento de la función en un valor $x$ específico.

## Qué es una pendiente

**Pendiente:** Se define como el **cambio en elevación** (la diferencia entre los términos $y$)  entre el **cambio en corrimiento** (la diferencia entre los términos $x$).

$$m = \cfrac{y_1 - y_2}{x_1 - x_2}$$

<!--**Valle:** Puntos mínimos de una gráfica.
**Crestas:** Puntos máximos de una recta.-->

## Pendiente de una recta

En el caso de las **funciones lineales**, la pendiente se calcula simplemente usando la fórmula descrita anteriormente, eligiendo dos puntos cualquiera de la función $x_1$ y $x_2$ y evaluando en dichos valores para conseguir $y_1$ y $y_2$ 

## Pendiente de una curva

Antes de hablar de cómo calcular la pendiente de una curva, es necesario que conozcas los siguientes conceptos:

- **Recta secante:** Linea que corta a una función en dos o más puntos.
- **Recta tangente:** Línea que corta a una función en un único punto. A dicho punto se le denomina como **punto de tangencia**.

En **funciones no lineales** se encuentran curvas, las cuales no se pueden calcular su **pendiente**, debido a que la razón del cambio tanto en $x$ como en $y$ es de $0$, lo cual daría $0/0$, una **indeterminación**.

Para encontrar la **pendiente** de una **curva**, se calculan las pendientes de las **rectas secantes** que se encuentran cerca $x$ (4 por derecha y 4 por izquierda). Dichas rectas secantes se conformarán de dos puntos $x$ y $x+h$ donde $h$ es el parámetro que se modificará, tal como en los límites ($\cdots -0.01, -0.1, + 0.1, +0.01 \cdots$) . Sustituyendo en la fórmula de pendiente conseguimos:

$$m = \cfrac{f\:(x ) - f \:(x+h)}{x - \:(x+h )}$$

Que simplificando queda como:

$$m = \cfrac{f\:(x ) - f \:(x+h)}{-h} = \cfrac{f \:(x+h)-f\:(x ) }{h}$$

Dichas **pendientes** conseguidas a partir del parámetro $h$, se tabularan y a partir de aproximación, podremos determinar cuál es el valor de la pendiente de $x$.

Como podemos observar, estos valores de $h$ tienden a ir a 0, tal como un límite por  lo que de esta observación se puede sacar la siguiente expresión:

$$m = \lim\limits_{h\to 0}\cfrac{f \:(x+h)-f\:(x ) }{h}$$
A esta función se le llama derivada.

## Definición de derivada

La **derivada** de una función $f\:(x)$ es otra función la cual se denota como $f\ '\ (x)\:$, que representa las **pendientes de las tangentes** para cualquier punto de $f\: (x)$ 

$$f\ '\ (x) = \lim\limits_{h\to 0}\cfrac{f \:(x+h)-f\:(x ) }{h}$$
Las **derivada** puede representarse por cualquiera de las siguientes expreciones 

|       Derivada        | Se lee                                 |
|:---------------------:| -------------------------------------- |
|       $f\ '(x)$       | derivada de $f\: (x)$                  |
|        $y\ '$         | $y$ prima                              |
|   $\cfrac{dy}{dx}$    | derivada de $y$ con respecto de $x$    |
| $\cfrac{d}{dx}[f(x)]$ | derivada de $f(x)$ con respecto de $x$ |

<div style="page-break-after: always;"></div>

## Referencias

- [Carrión, M.](https://platzi.com/profes/mcarrion/) (s.f). _La derivada gráficamente_. [Curso Básico de Cálculo Diferencial](https://platzi.com/cursos/calculo-diferencial/). [Platzi](https://platzi.com/). Recuperado el 13 de enero de 2023 de https://platzi.com/clases/2612-calculo-diferencial/43607-la-derivada-graficamente/

- [Carrión, M.](https://platzi.com/profes/mcarrion/) (s.f). _La definición de derivada_. [Curso Básico de Cálculo Diferencial](https://platzi.com/cursos/calculo-diferencial/). [Platzi](https://platzi.com/). Recuperado el 13 de enero de 2023 de https://platzi.com/clases/2612-calculo-diferencial/43608-la-definicion-de-derivada/