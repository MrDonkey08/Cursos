//Estudiante.cpp

#include <iostream>
using std::string;
using std::cout;
using std::endl;

#include "Persona.h"
#include "Estudiante.h"

Estudiante::Estudiante(string _nombre, int _edad, int _codigo, int _calificacion) : Persona(_nombre, _edad){
	codigo = _codigo;
	calificacion = _calificacion;
}

Estudiante::~Estudiante(){}

void Estudiante::mostrarEstudiante(){
	mostrarPersona();
	cout << "Código: " << codigo << endl;
	cout << "Calificación" << calificacion << endl;
}

void Estudiante::setCodigo(int _codigo){
	codigo = _codigo;
}

void Estudiante::setCalificacion(int _calificacion){
	calificacion = _calificacion;
}

void Estudiante::getCodigo(){
	cout << "Código: " << codigo << endl;
}

void Estudiante::getCalificacion(){
	cout << "Calificación: " << calificacion << endl;
}
