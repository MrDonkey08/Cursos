// Persona.cpp

#include <iostream>
using std::cout;
using std::endl;

#include "Persona.h"

Persona::Persona(string _nombre, int _edad){
	nombre = _nombre;
	edad = _edad;
}

Persona::~Persona(){}

void Persona::mostrarPersona(){
	cout << "Nombre: " << nombre << endl;
	cout << "Edad: " << edad << endl;
}

void Persona::setNombre(string _nombre){
	nombre = _nombre;
}

void Persona::setEdad(int _edad){
	edad = _edad;
}

void Persona::getNombre(){
	cout << "Nombre: " << nombre << endl;
}

void Persona::getEdad(){
	cout << "Edad: " << edad << endl;
}
