# Constructor, destructor y encapsulamiento

- **Contructor:** Método que nos permite inicializar los atributos de un objeto.
- **Destructor:** Método que nos permite reducir el uso de memoria a través de eliminar variables u objetos dinámicos. El **destructor** se ejecuta al finalizar la función main.
- **Encapsulamiento:** Proceso en el cual se restringe el acceso de los atributos a todo menos a los métodos de la clase.

Además del **destructor** existe una manera manual de eliminar una variable u objeto dinámico: `delete variable`

```cpp
#include <iostream>
#include <string>
#include <locale.h> // Para poder introducir símbolos de idiomas diferentes al Inglés.

using namespace std;

class Persona{
	private: // Encapsulamiento
		string nombre = "Juan";
		int edad = 20;

	public:
		Persona(string, int);
		void leer();
		void correr();
};

// Constructor: Nos sirve para inicializar los atributos
Persona::Persona(string _nombre, int _edad){ // Con Persona:: Indico que el método Persona pertenece a la clase Persona
	edad = _edad;
	nombre = _nombre;
}

// Persona:: para indicar que el método leer pertenece a la clase Persona.
void Persona::leer(){ // en clases no es necesario el paso de parámetros.
	cout << "Soy " << nombre << " y estoy leyendo un libro.\n\n";
}

void Persona::correr(){
	cout << "Soy " << nombre << " y estoy corriendo un maratón y tengo " << edad << " años.\n\n";
}

int main(){
    setlocale(LC_CTYPE, "spanish"); // Añadiendo los símbolos del Español (tílde, ñ, ¿, ¡...) al main.

	Persona p1 = Persona("Enrique", 19); // Inicialización por medio del constructor.
	Persona p2("Mauricio", 40); // Manera corta.
	Persona *p3 = new Persona("Lucero", 23); // Inicialización por medio de un apuntador y un constructor.

	p1.leer();
	p2.correr();
	p3->leer();

	delete p3; // Se elimina el objeto p3 para liberar memoria. 

	return 0;
}
```

En este ejemplo estamos utilizando el **encapsulamiento** al utilizar la palabra reservada `private`

<div style="page-break-after: always;"></div>

## Referencias

- [Programación ATS](https://www.youtube.com/@ProgramacionATS) (09 de enero de 2017). _127. Programación en C++ || POO || Clases y objetos en C++_. [Archivo de Video]. Youtube. https://www.youtube.com/watch?v=tbVHbfIVxs4&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh&index=128

- [Martínez, D.](https://platzi.com/profesores/diananerd/) (s.f.). _Creando nuestro primer objeto_. [Curso de Programación Orientada a Objetos con C++](https://platzi.com/cursos/c-plus-plus-poo/). Platzi. Recuperado el 06 de mayo de 2023 de https://platzi.com/clases/2373-c-plus-plus-poo/38909-creando-nuestro-primer-objeto/