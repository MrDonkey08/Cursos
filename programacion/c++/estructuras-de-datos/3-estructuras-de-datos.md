# Estructuras de Datos

<!--```cpp
#include <iostream>

using namespace std;

int main(){
	char text[] = "hola";
	char text[] = {'h', 'o', 'l', 'a'};
	
	char *text = (char *) "hola";
}
```
-->

```cpp
#include <iostream>
#include <string>

using namespace std;

struct Persona{ //palabra reservada struct para declarar una estructura
	string nombre;
	int edad;
};

using namespace std;

int main(){
	Persona p1 = Persona(); // Se crea la variable p1 del tipo persona inicializando con los valores de la estructura Persona
							// En este caso, como los miembros de estructura no están inicializados, entonces te da valores por defecto
							// Para nombre te le asigna un valor vacio y para edad te le asigna 0.
	
	cout << p1.nombre << endl;
	cout << p1.edad << "\n\n";
	
	p1.nombre = "Sandra";
	p1.edad = 25;

	cout << p1.nombre << endl;
	cout << p1.edad << "\n\n";

	// Versión con punteros
	Persona *p2 = new Persona(); // Primero genera el puntero y, durante la ejecución, con new vamos a crear una nueva persona
	p2->nombre = "David";
	p2->edad = 23;
		cout << p2->nombre << endl;
	cout << p2->edad << endl;

	return 0;
}
```

<!-- ¿Cuál es la diferencia entre inicializar y no inicializar la variable "tipo Persona"?

Haciendo unas pruebas descubrí que cuando en la estructura inicializas `nombre` y `edad`, no importa si inicializas la variable tipo persona, te da los valores de que en la estructura, pero cuando no los inicializas ` nombre` y `edad`, tal como en la clase, al no inicializar persona, me da que p.nombre "" y p.edad me da es igual a 8, y cuando los inicializo, me da que es igual a p.nombre es igual "" y p.edad es igual a 0

La única diferencia que encontré entre inicializar y no inicalizar `Persona p` es que 

- Al inicializarlo te da valores nulos por defecto, para `nombre` te da un valor vacio y para `edad` te da el valor de 0
- Al no iniciarlo, con `nombre` pasa lo mismo, pero con `edad` te da un "valor random" por defecto.

Digo "random" porque en mi caso siempre me lo inicializaba con 8.

Al inicializar los miembors de la estructura `Persona` no encontré ninguna diferencia; ambos casos te dan los valores definidos en la estructura.

En conslusión, al inicializar la variable "tipo constructor" solo te asegura que, si no tiene sus miembros inicializados, te los inicializa con valores nulos por defecto
-->

<div style="page-break-after: always;"></div>

## Referencias

- [Martínez, D.](https://platzi.com/profesores/diananerd/) (s.f.). _Creando nuestra primera estructura_. [Curso de Programación Orientada a Objetos con C++](https://platzi.com/cursos/c-plus-plus-poo/). Platzi. Recuperado el 06 de mayo de 2023 de https://platzi.com/clases/2373-c-plus-plus-poo/38906-creando-nuestra-primera-estructura/