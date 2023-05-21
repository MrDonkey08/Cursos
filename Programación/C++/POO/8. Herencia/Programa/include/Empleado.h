// Empleado.h

#ifndef EMPLEADO_H
#define EMPLEADO_H

#include <string>
using std::string;

#include "Persona.h"

class Empleado : public Persona{
	private: // Atributos
		int horasTrabajo;
		string puesto;

	public: // Métodos
		Empleado(string, int, int, string);
		~Empleado();
		void mostrarEmpleado();
		void setHorasTrabajo(int);
		void getHorasTrabajo();
		void setPuesto(string);
		void getPuesto();
};

#endif
