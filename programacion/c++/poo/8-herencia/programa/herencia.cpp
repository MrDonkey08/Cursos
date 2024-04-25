// herencia_persona.cpp

#include <iostream>
using namespace std;

#include "Persona.h"
#include "Estudiante.h"
#include "Universitario.h"
#include "Empleado.h"

int main(){
	Persona p1 = Persona("Rosa", 26);
	Estudiante e1 = Estudiante("Miguel", 17, 212941249, 87);
	Universitario u1 = Universitario("Cecilia", 21, 241423429, 89, "Mecatrónica", "Quinto");
	Empleado m1 = Empleado("Iker", 19, 10, "Carterista");

	p1.mostrarPersona();
	cout << "\n";
	e1.mostrarEstudiante();
    cout << "\n";
	u1.mostrarUniversitario();
	cout << "\n";
	m1.mostrarEmpleado();
	cout << "\n";

	return 0;
}
