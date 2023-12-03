# Sobrecarga de Constructores

La **sobrecarga de constructores** es el hecho de que haya _más de un **constructor**_ en una _clase_.

Para crear más _constuctores_, solo es necesario que todos los _constructores_ tengan diferente _cantidad de **parámetros**_.

```cpp
#include <iostream>
#include <string>
#include <clocale>

using namespace std;

class Tiempo{
	private: // Atributos
		unsigned int horas, min, seg; // Como el tiempo es siempre positivo utilizamos usingned int
		string periodo;


	public: // Métodos
		Tiempo(unsigned int, unsigned int, unsigned int); // Constructor 1
		Tiempo(unsigned int); // Constructor 2
		~Tiempo(); // Destructor
		void mostrarHora();
};

Tiempo::Tiempo(unsigned int _horas, unsigned int _min, unsigned int _seg){
	horas = _horas;

	if (horas > 12){
		horas -=12;
		periodo = "p. m.";
	}
	else if(horas == 12){
        periodo = "p. m";
	}
	else{
		periodo = "a. m.";
	}

	min = _min;
	seg = _seg;
}

Tiempo::Tiempo(unsigned int tiempoSeg){
	horas = tiempoSeg/3600;

	if (horas > 12){ // Para convertirlo a formato de 12 h (a. m y p. m.)
		horas -= 12;
		periodo = "p. m.";
	}
	else if(horas == 12){
        periodo = "p. m";
	}
	else{
		periodo = "a. m.";
	}

	tiempoSeg %= 3600;
	min = tiempoSeg/60;
	seg = tiempoSeg%60;
}

Tiempo::~Tiempo(){}

void Tiempo::mostrarHora(){
	cout << "La hora es: " << horas << ":" << min << ":" << seg << " " << periodo << endl;
}

int main(){
	setlocale(LC_CTYPE, "spanish");

	Tiempo h1 = Tiempo(12, 30, 05);
	Tiempo h2 = Tiempo(50305);

	h1.mostrarHora();
	h2.mostrarHora();

	return 0;
}
```


<div style="page-break-after: always;"></div>

## Referencias

- [Programación ATS](https://www.youtube.com/@ProgramacionATS) (11 de enero de 2017). _129. Programación en C++ || POO || Sobrecarga de constructores_. [Archivo de Video]. Youtube. https://www.youtube.com/watch?v=dn3E4QlTevo&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh&index=130

- [Programación ATS](https://www.youtube.com/@ProgramacionATS) (12 de marzo de 2018). _130. Programación en C++ || POO || Ejercicio 2 - Clase Tiempo (Sobrecarga de Constructores)_. [Archivo de Video]. Youtube. https://www.youtube.com/watch?v=qVQnwh4HkLo&list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh&index=131