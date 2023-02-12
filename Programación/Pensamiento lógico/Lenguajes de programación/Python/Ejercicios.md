# Ejercicios
## Calculadora 
	# Crear una calculadora con las operaciones matemáticas básicas.
	
	# Concatenar con coma (,) porque son números, si fueran cadenas de texto se podrían concatenar con más (+).
	# Al concatenar con coma (,) te agrega un espacio en blanco automáticamente, en cambio con más (+) no te lo agrega. Si quisieras concatenar un número con más (+) tuvieras que convertirlo a cadena de texto, ejemplo str(a) + str(b) + " Un texto cualquiera "...
	
	def suma(a, b):
	  resultado = a + b
	  print("El resultado de ", a, "+", b, " = ", resultado)
	
	def resta(a, b):
	  resultado = a - b
	  print("El resultado de", a, "-", b, "=", resultado)
	
	def multiplicacion(a, b):
	  resultado = a * b
	  print("El resultado de", a, "*", b, "=", resultado)
	
	def division(a, b):
	  resultado = a / b
	  print("El resultado de", a, "/", b, "=", resultado)
	
	opcion = 0
	
	while opcion != 5:
	  try:
	    # \n en una cadena de texto para hacer un salto de línea.
	    opcion = int(input("Introduce el número de la opción que deseas realizar\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Finalizar programa.\n\nOpción: "))
	    print()
	    if opcion >= 1 and opcion <= 5:
	      if opcion != 5:
	        a = int(input("Introduce el primer valor. "))
	        b = int(input("\nIntroduce el segundo valor. "))
	        print()
	      if opcion == 1:
	        suma(a, b)
	      elif opcion == 2:
	        resta(a, b)
	      elif opcion == 3:
	        multiplicacion(a, b)
	      elif opcion == 4:
	        division(a, b)
	      elif opcion == 5:
	        print("¡Qué tengas excelente día! ¡Vuelve pronto!")
	      else: print("Opción inválida. Inténtalo de nuevo.\n")
	      print()
	  except:
	    print("\nError: has introducido un valor no númerico o decimal. Introduce un valor entero.")
---
## Extracción de palabras de una oración

	frase = "las flores amarillas"
	p_inicial = 4
	p_final = 10
	p = frase[inicial:final]
	print(p)
---
## Referencias
- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.).[*Primeros pasos con Python*](https://platzi.com/clases/3223-pensamiento-logico-lenguajes/50711-primeros-pasos-con-python/). [Nuevo Curso de Pensamiento Lógico: Lenguajes de Programación](https://platzi.com/cursos/pensamiento-logico-lenguajes/). [Platzi](https://www.platzi.com/home). [Consultado el 21/08/2022].
- [Belisa, A.](https://platzi.com/profesores/anabelisam_/) (s.f.).[*Programando un algoritmo con Python*](). [Nuevo Curso de Pensamiento Lógico: Lenguajes de Programación](https://platzi.com/cursos/pensamiento-logico-lenguajes/). [Platzi](https://www.platzi.com/home). [Consultado el 21/08/2022].


  
