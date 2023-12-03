# Puntero this y  Métodos Constructores y Modificadores (getters y setters) 

**Error de Ambiguedad:** Cuando se quiere utilizar la misma variable, tanto en el paso de parámetro como en la asignación, te encuentras con que el compilador no sabe a cuál de los te refieres; para resolver este problema se utiliza el puntero `this`. 

```cpp
#include <iostream>

using namespace std;

class Coordenada {
	private: // Atributos
		int x, y, z;

	public: // Métodos
		Coordenada(int, int, int); // Constructor
		~Coordenada();
		void setXY(int, int);
		void setX(int);
		void setY(int);
		void setZ(int);
		
		int getX();
		int getY();
		int getZ();
};

Coordenada::Coordenada(int x, int y, int z){ // Constructor
	this->x = x; // this sirve para resolver el problema de ambiguedad. 
	this->y = y; // this se utiliza para indicar cuál es la variable es el atributo de la clase.	
	this->z = z;
}

Coordenada::~Coordenada(){} // Destructor

void Coordenada::setXY(int x, int y){ // Modificador de 2 atributos: x & y
	this->x = x; 
	this->y = y;
}

void Coordenada::setX(int x){ // Modificador de x
	this->x = x;
}

void Coordenada::setY(int y){ // Modificador de y
	this->y = y;
}

void Coordenada::setZ(int z){ // Modificador de z
	this->z = z;
}

int Coordenada::getX(){
	return x;
}

int Coordenada::getY(){
	return y;
}

int Coordenada::getZ(){
	return z;
}

int main(){
	Coordenada *c1 = new Coordenada(2, 3, 0);

	cout << "(x, y) = (" << c1->getX() << ", " << c1->getY() << ")\n\n";

	c1->setXY(7, 4);
	c1->setZ(8);

	cout << "(x, y, z) = (" << c1->getX() << ", " << c1->getY() << ", " << c1->getZ() << ")\n\n";

	return 0;
}
```

Como podras observar, el hecho de tener que estar modificando los valores de los atributos puede llegar a ser una tarea ardúa, sin embargo, existe una alternativa de hacerlo más sencillo:

```cpp
#include <iostream>

using namespace std;

class Coordenada {
	private: // Atributos
		int x, y, z;

	public: // Métodos
		Coordenada(int, int, int); // Constructor
		~Coordenada();
		Coordenada &setXY(int, int);
		Coordenada &setX(int);
		Coordenada &setY(int);
		Coordenada &setZ(int);
		
		int getX();
		int getY();
		int getZ();
};

Coordenada::Coordenada(int x, int y, int z){ // Constructor
	this->x = x; // this sirve para resolver el problema de ambiguedad. 
	this->y = y; // this se utiliza para indicar cuál es la variable es el atributo de la clase.	
	this->z = z;
}

Coordenada::~Coordenada(){} // Destructor

Coordenada &Coordenada::setXY(int x, int y){ // Función que devuelve una dirección de memoria
	this->x = x; 
	this->y = y;
	return *this; // Devuelve la entidad o identidad del objeto.
}

Coordenada &Coordenada::setX(int x){ // Modificador de x
	this->x = x;
	return *this;
}

Coordenada &Coordenada::setY(int y){ // Modificador de y
	this->y = y;
	return *this;
}

Coordenada &Coordenada::setZ(int z){ // Modificador de z
	this->z = z;
	return *this;
}

int Coordenada::getX(){
	return x;
}

int Coordenada::getY(){
	return y;
}

int Coordenada::getZ(){
	return z;
}

int main(){
	Coordenada *c1 = new Coordenada(2, 3, 0);

	cout << "(x, y) = (" << c1->getX() << ", " << c1->getY() << ")\n\n";

	c1->setXY(7, 4).setZ(8); // Forma concatenada. Puedes concatenar cuantas veces quieras 
							 // aquellas funciones que devuelven la identidad del objeto

	cout << "(x, y, z) = (" << c1->getX() << ", " << c1->getY() << ", " << c1->getZ() << ")\n";

	return 0;
}
```

<div style="page-break-after: always;"></div>

## Referencias

- [Programación ATS](https://www.youtube.com/@ProgramacionATS) (18 de enero de 2017). _132. Programación en C++ || POO || Métodos constructores y modificadores (Getters y Setters)_. [Archivo de Video]. Youtube. https://www.youtube.com/watch?v=ReyphyJ7qqc&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh&index=134

- [Martínez, D.](https://platzi.com/profesores/diananerd/) (s.f.). _This_. [Curso de Programación Orientada a Objetos con C++](https://platzi.com/cursos/c-plus-plus-poo/). Platzi. Recuperado el 06 de mayo de 2023 de https://platzi.com/clases/2373-c-plus-plus-poo/38912-this/