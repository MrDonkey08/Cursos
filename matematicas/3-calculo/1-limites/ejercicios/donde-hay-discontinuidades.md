# ¿Dónde hay discontinudades?

**Parte 1**. Resuelve los siguientes límites algebraicamente. Recuerda que el primer paso es evaluar la función en el valor de estudio (el valor al que se aproxima 𝑥). En los casos en que la evaluación resulta en 0/0 debes utilizar una técnica algebraica (factorización o racionalización) para encontrar la respuesta. Claro, también puedes intentar la aproximación numérica para determinar la respuesta (utilizando una calculadora o una hoja electrónica de cálculo), o graficar las funciones con algún recurso en línea (pero no olvides que eso puede ser engañoso en algunos casos.

---

1. $\lim\limits_{x\to-1} 5$

==$\lim\limits_{x\to-1} 5 = 5$==

---
2. $\lim\limits_{x\to0} x^2+2x-3$

$\lim\limits_{x\to0} x^2+2x-3$ $=(0)^2+2(0)-3 = -3$

==$\lim\limits_{x\to0} x^2+2x-3 = -3$==


---
3. $\lim\limits_{x\to-0} \cfrac{x-2}{x^2-3x+2}$

 $\lim\limits_{x\to-0} \cfrac{x-2}{x^2-3x+2}$ $=\cfrac{0-2}{0^2-3(0)+2}$ $=\cfrac{-2}{2} = -1$

$\lim\limits_{x\to-0} \cfrac{x-2}{x^2-3x+2} = -1$


---
4. $\lim\limits_{x\to-1} \cfrac{x^2-x-2}{x+1}$

$\lim\limits_{x\to-1} \cfrac{x^2-x-2}{x+1}$ $=\cfrac{(-1)^2-(-1)-2}{-1+1}$ $=\cfrac{-1+1-2}{0}$ $= \text{indeterminado}$

$\lim\limits_{x\to-1} \cfrac{x^2-x-2}{x+1}$ $=\cfrac{\cancel{(x+1)}(x-2)}{\cancel{x+1}}$ $=x-2$ $=-1-2$ $=-3$

==$\lim\limits_{x\to-1} \cfrac{x^2-x-2}{x+1} = -3$==

---
5. $\lim\limits_{x\to 5} \cfrac{\sqrt{9-x}-2}{x-5}$

$\lim\limits_{x\to 5} \cfrac{\sqrt{9-x}-2}{x-5}$ $=\cfrac{\sqrt{9-5}-2}{5-5}$ $=\cfrac{\sqrt{4} -2}{0}$ $=\text{indeterminado}$


$\lim\limits_{x\to 5} \cfrac{\sqrt{9-x}-2}{x-5}$ $=\cfrac{\sqrt{9-x}-2}{x-5} \cdot \cfrac{\sqrt{9-x}+2}{\sqrt{9-x}+2}$ $=\cfrac{(\sqrt{9-x}-2) (\sqrt{9-x}+2))}{(x-5)(\sqrt{9-x}+2)}$ $=\cfrac{(\sqrt{9-x})^2-(-2)^2}{(\sqrt{9-x}+2)(x-5)}$ $=\cfrac{9-x-4}{(\sqrt{9-x}+2)(x-5)}$ $=\cfrac{-x+5}{(\sqrt{9-x}+2)(x-5)}$ $=\cfrac{-\cancel{(x-5)}}{(\sqrt{9-x}+2)\cancel{(x-5)}}$ $= -\cfrac{1}{(\sqrt{9-x}+2)}$

$=\lim\limits_{x\to 5} -\cfrac{1}{(\sqrt{9-x}+2)}$ $= -\cfrac{1}{(\sqrt{9-5}+2)}$ $= -\cfrac{1}{4}$

==$\lim\limits_{x\to 5} \cfrac{\sqrt{9-x}-2}{x-5}$ $= -\cfrac{1}{4}$==

---
**Parte 2**. Determina si las siguientes funciones son continuas en el valor de 𝑥 que se indica. Antes de iniciar, revisa en el video cuáles son las tres condiciones que deben cumplirse para declarar que una función es continua en un punto y escríbelas en los espacios correspondientes.

---
**Condición 1:** $f(x)$ debe estar definida en $a$
**Condición 2:** $\lim\limits_{x\to a} f(x)$ debe existir
**Condición 3:** $\lim\limits_{x\to a} f(x) = f(a)$

---
6. Determina si en $x = 0$ es continua la función $f(x) = 3x^2 -2x$

$f(0) = 3(0)^2 -2(0)$ $=0$ 

==Es continua==

---
7. Determina si en $x=2$ es continua la función $f(x) = \cfrac{x-2}{x^2-3x+2}$

$f(2) = \cfrac{(2)-2}{(2)^2-3(2)+2}$ $=\cfrac{0}{4-6+2}$ $=\cfrac{0}{0}$ $=\text{indeterminado}$ 

==Es discontinua==

---
8. Determina si en $x = 1$ es continua la función $f(x) = \cfrac{\sqrt{5-x}-2}{x-1}$

$f(1) = \cfrac{\sqrt{5-(1)}-2}{(1)-1}$ $=\cfrac{0}{0}$ $=\text{indeterminado}$

==Es discontinua==