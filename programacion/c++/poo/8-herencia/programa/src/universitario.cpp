// Universitario.cpp

#include <iostream>
#include <string>
using std::string;
using std::cout;
using std::endl;

#include "Estudiante.h"
#include "Universitario.h"

Universitario::Universitario(string _nombre, int _edad, int _codigo, int _calificacion, string _carrera, string _semestre) : Estudiante(_nombre, _edad, _codigo, _calificacion){
	carrera = _carrera;
	semestre = _semestre;
}

Universitario::~Universitario(){}

void Universitario::mostrarUniversitario(){
	mostrarEstudiante();
	cout << "Carrera: " << carrera << endl;
	cout << "Semestre: " << semestre << endl;
}

void Universitario::setCarrera(string _carrera){
	carrera = _carrera;
}

void Universitario::setSemestre(string _semestre){
	semestre = _semestre;
}

void Universitario::getCarrera(){
	cout << "Carrera " << carrera << endl;
}

void Universitario::getSemestre(){
	cout << "Semetre " << semestre << endl;
}
