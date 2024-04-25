//Estudiante.h

#ifndef ESTUDIANTE_H
#define ESTUDIANTE_H

#include "Persona.h"

class Estudiante : public Persona{ // Public significa que puede acceder a todo lo p�blico de la clase base, la clase Persona
	private: // Atributos
		int codigo, calificacion;

	public: // M�todos
		Estudiante(string, int, int, int); // Hereda los atributos de la clase Persona, por lo que podemos crear un constructor con estos.
		~Estudiante();
		void mostrarEstudiante();
		void setCodigo(int);
		void setCalificacion(int);
		void getCodigo();
		void getCalificacion();
};

#endif
