# Ejercicios

## Calculadora

```js
//suma, resta, multiplicación y división

operacion = 0;

while (operacion != 5) {

  console.log(`Introduce el número de la opción que deseas realizar.
  1. Suma.
  2. Resta.
  3. Multiplicación.
  4. División.
  5. Salir del programa.
  `);

  operacion = Number(prompt("Opción: "));
  console.log("")

  if (operacion >= 1 && operacion <= 4) {
	a = Number(prompt("Introduce el primer número. "));
	b = Number(prompt("Introduce el segundo número. "));
	console.log("")

	function suma(a, b) {
	  resultado = a + b;
	  console.log("El resultado de " + a + " + " + b + " = " + resultado);
	  console.log("");
	}

	function resta(a, b) {
	  resultado = a - b;
	  console.log("El resultado de " + a + " - " + b + " = " + resultado);
	  console.log("");
	}

	function multiplicacion(a, b) {
	  resultado = a * b;
	  console.log("El resultado de " + a + " * " + b + " = " + resultado);
	  console.log("");
	}

	function division(a, b) {
	  resultado = a / b;
	  console.log("El resultado de " + a + " / " + b + " = " + resultado);
	  console.log("");
	}

  }
  switch (operacion) {
	case 1:
	  suma(a, b);
	  break;
	case 2:
	  resta(a, b);
	  break;
	case 3:
	  multiplicacion(a, b);
	  break;
	case 4:
	  division(a, b);
	  break;
	case 5:
	  console.log("¡Qué tengas un excelente día! ¡Vuelve pronto!")
	  break;

	default: console.log("Error: introdujiste una opción incorrecta. Inténtalo de nuevo.");
	  console.log("");
  }
}
```

## Número máximo de un arreglo

```js
// Programa que determina el número más grande de un arreglo/lista.
   
  Creando un arreglo vacío.
  Lista = []
  
  // <Nombre del arreglo>.push para agregar elementos al arreglo.
  Lista.push(Number(prompt("Escribe un número")));
  console.log();
  
  r = 0;
  
  while (r != 'no') {
	r = prompt('¿Deseas agregar otro número? Escribe "si" o "no" como respuesta. ');
	console.log();
	switch (r) {
	  case 'si':
		Lista.push(Number(prompt("Escribe un número. ")));
		console.log();
		console.log("Lista = " + Lista);
		break;
	  case 'no':
		console.log("Lista guardada con éxito");
		break;
		
	  default: console.log("Error: respuesta inválida. Inténtalo de nuevo.");
	}
	console.log();
  }
  
  max = 0;
  
  // <Nombre de la lista.lenght> = al número de elementos que contiene.
  
  for (i = 0; i <= Lista.length; i++) {
	if (max < Lista[i]){
	  max = Lista[i];
	}
  }
  
  console.log("El número más grande de la lista " + Lista + " es " + max);
```

## Referencias

- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.). _Reto 9: traduce un algoritmo a JavaScript_. [Nuevo Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones](https://platzi.com/cursos/pensamiento-logico-estructuras/). [Platzi](https://platzi.com/home). https://platzi.com/clases/3223-pensamiento-logico-lenguajes/50708-reto-de-diagramas-de-flujo-a-javascript/

- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.). _Programando un algoritmo con Javascript_. [Nuevo Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones](https://platzi.com/cursos/pensamiento-logico-estructuras/). [Platzi](https://platzi.com/home). https://platzi.com/clases/3223-pensamiento-logico-lenguajes/50709-programando-un-algoritmo-con-javascript/

