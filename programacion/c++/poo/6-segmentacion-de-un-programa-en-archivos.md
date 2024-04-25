# Segmentación de un programa orientado a objetos en archivos

En ejemplos anteriores, hemos definido la _clase_, sus _métodos_ y el _main_ en un mismo _archivo cpp_, pero para fines prácticos, cada uno de estos se puede establecer en archivos separados.

El _main_, como siempre, se establece en un .cpp, mientras que la _definición de la clase_ es un .h (archivo de cabecera) y la _definición de los métodos de la clase_ en otro archivo .cpp; en restrospectiva, _crearemos un **.cpp** para el **main**  y, por cada **clase** que creemos, definiremos un **.h** y un **.cpp**._

> "Uno de los beneficios de crear definiciones de clases es que, cuando se empaquetan en forma apropiada, nuestras clases pueden ser reutilizadas por los programadores, potencialmente desde cualquier parte del mundo."

Antes de explicar cómo separar el programa en archivos, es necesario que sepas _qué es un proyecto_ y _cómo crear un proyecto_ en tu _entorno de desarrollo_. Aquí te dejo un artículo: [Definición de un proyecto](../../Definición%20de%20un%20proyecto.md)

## Archivos de encabezado (.h)

Crearemos un _.h_ por cada _clase_. p. ej:

```cpp
// Rectangulo.h
// Definición de la clase Rectangulo
// Si bien se podrían definir las funciones en este archivo, por fines prácticos lo
// haremos en un .cpp

class Rectangulo {
	private: // Atributos
		float largo, ancho;

	public: // Métodos
		Rectangulo(float, float); // Constructor
		~Rectangulo(); //Destructor
		void perimetro();
		void area();
};
```

## Archivos (.cpp)

En cada _.cpp_, se definiran los _métodos de cada clase_.

```cpp
// Rectangulo.cpp
// Definición de los métodos de la clase Rectangulo

#include <iostream>
#include <string>

using namespace std;

#include "Rectangulo.h" // Incluye la definición de la clase Rectangulo

Rectangulo::Rectangulo(float _largo, float _ancho){
	largo = _largo;
	ancho = _ancho;
}

Rectangulo::~Rectangulo(){}

void Rectangulo::perimetro(){
	cout << "Perimetro: " << 2*largo + 2*ancho << endl;
}

void Rectangulo::area(){
	cout << "Área: " << largo*ancho << endl;
}
```

## Programa controlador (.cpp)

Un archivo de código fuente separado que contiene la _función main_ para probar nuestras clases; a éste se le conoce como **programa controlador**.

```cpp
// Programa Rectangulo.cpp

#include <iostream>
#include <string>

using namespace std;

#include "Rectangulo.h"

int main(){
	Rectangulo r1 = Rectangulo(3, 5);

	r1.perimetro();
	r1.area();

	return 0;
}
```

## Referencias

- [Programación ATS](https://www.youtube.com/@ProgramacionATS) (12 de marzo de 2018). _128. Programación en C++ || POO || Ejercicio 1 - Clase Rectángulo_. [Archivo de Video]. Youtube. https://www.youtube.com/watch?v=h9U-4I0WIkg&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh&index=129

- M. H & J., P. (2008). 3.8 Colocar una clase en un archivo separado para fi nes de reutilización. En Luis Cruz (Ed.), _Cómo programar en C++_ (6<sup>a</sup> ed.). (pp. 84-87). Editorial Pearson Educación.

- M. H & J., P. (2008). 3.9 Separar la interfaz de la implementación (Ed.), _Cómo programar en C++_ (6<sup>a</sup> ed.). (pp. 87-93). Editorial Pearson Educación.