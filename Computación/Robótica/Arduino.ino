	Inicio
	ent led_verde = 2
	ent led_amarillo = 4
	ent led_rojo = 7
	
	vacío configurar() {
	modo de pin(led_verde, salida)
	modo de pin (led_amarillo, salida)
	modo de pin (led_rojo, salida)}
	
	Vacío loop () {}
	Escritura digital (led_verde, alto)
	Retraso(3000)
	Escritura digital (led_verde, bajo)
	Retraso(3000)}
	
	Escritura digital (led_amarilllo, alto)
	Retraso(2000)
	Escritura digital (led_amarillo, bajo)
	Retraso(2000)}
	
	Escritura digital (led_rojo, alto)
	Retraso(1000)
	Escritura digital (led_rojo, bajo)
	Retraso(1000)}