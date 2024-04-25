---
title: Clases y Objetos
author: Alan Yahir Juárez Rubio

tags: poo, c++, cpp, clases, objetos

creation date: 06-05-2023
last modification date: 06-05-2023

type: Note
---

# Clases y objetos

```cpp
#include <iostream> // Para entrada y salida de datos
#include <string> // Para el uso de strings

using namespace std;

class Persona {
	public:  // Public para que pueden ser accedidos desde cualquier parte del programa.
		// Atributos
		string nombre = "Rodrigo";
		int edad = 19;
		
		// Métodos
		void saludar(){
			cout << "Hola, mi nombre es " << nombre << endl;
		}
};

int main(){
	Persona p1 = Persona(); // Objeto con Atributos y Métodos originales de la clase Persona
	
	Persona p2 = Persona();
	// Modificación de los atributos del objeto
	p2.nombre = "Martha"; 
	p2.edad = 28;

	Persona *p3 = new Persona();
	
	// Modificación de los Atributos del objeto mediante el uso de Apuntadores.
	p3->nombre = "Pablo";
	p3->edad = 30;

	// Llamada de los Métodos del objeto.
    p1.saludar();
	p2.saludar();

	// Llamada de los Métodos del objeto por medio de apuntadores
	p3->saludar();

	return 0;
}
```

<div style="page-break-after: always;"></div>

## Referencias

- [Martínez, D.](https://platzi.com/profesores/diananerd/) (s.f.). _Creando nuestro primer objeto_. [Curso de Programación Orientada a Objetos con C++](https://platzi.com/cursos/c-plus-plus-poo/). Platzi. Recuperado el 06 de mayo de 2023 de https://platzi.com/clases/2373-c-plus-plus-poo/38909-creando-nuestro-primer-objeto/