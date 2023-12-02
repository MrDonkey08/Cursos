// Universitario.h

#ifndef UNIVERSITARIO_H
#define UNIVERSITARIO_H

#include <string>
using std::string;

#include "Estudiante.h"

class Universitario : public Estudiante{
	private: // Atributos
		string carrera, semestre;

	public: // Métodos
		Universitario(string, int, int, int, string, string);
		~Universitario();
		void mostrarUniversitario();
		void setCarrera(string);
		void setSemestre(string);
		void getCarrera();
		void getSemestre();
};

#endif
