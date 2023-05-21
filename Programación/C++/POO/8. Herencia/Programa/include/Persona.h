// Persona.h

#ifndef PERSONA_H // Forma alternativa #if !defined (_PERSONA_H_)
#define PERSONA_H // Forma alternativa #define _PERSONA_H_

#include <string>
using std::string;

class Persona{
	private: // Atributos
		string nombre;
		int edad;

	public: // Métodos
		Persona(string, int);
		~Persona();
		void mostrarPersona();
		void setNombre(string);
		void setEdad(int);
		void getNombre();
		void getEdad();
};

#endif // Forma alternativa #endif
