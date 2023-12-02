// Empleado.cpp

#include <iostream>
#include <string>

using std::cout;
using std::endl;
using std::string;

#include "Persona.h"
#include "Empleado.h"

Empleado::Empleado(string _nombre, int _edad, int _horasTrabajo, string _puesto) : Persona(_nombre, _edad){
	horasTrabajo = _horasTrabajo;
	puesto = _puesto;
}

Empleado::~Empleado(){}

void Empleado::mostrarEmpleado(){
	mostrarPersona();
	cout << "Horas de trabajo " << horasTrabajo << endl;
	cout << "Puesto: " << puesto << endl;
}

void Empleado::setHorasTrabajo(int _horasTrabajo){
	horasTrabajo = _horasTrabajo;
}

void Empleado::getHorasTrabajo() {
	cout << "Horas de trabajo: " << horasTrabajo << endl;
}

void Empleado::setPuesto(string _puesto){
	puesto = _puesto;
}

void Empleado::getPuesto() {
	cout << "Puesto: " << puesto << endl;
}
