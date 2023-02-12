def menu():
    print("Bienvenido. ", end='');
    cant = lista();
    cargando();
    lista_1 = valores(cant);
    while True:
        menu = input("Eliga el número de la opción que desea realizar.\n\n1. Crear  lista.\n2. Imprimir lista original.\n3. Imprimir lista convirtiendo los valores nones negativos a positivos.\n4. Salir del programa.\n\nOpción: ");
        print()
        if menu == '1':
            cargando();
            cant = lista();
            lista_1 = valores(cant);
        elif menu == '2':
            cargando();
            lista_original(lista_1);
        elif menu == '3':
            cargando();
            lista_patito(cant, lista_1);
        elif menu == '4':
            cargando();
            print("Adiós, popo.");
            break;
        else:
            print("Error: escogiste una opción incorrecta. Inténtalo de nuevo\n");
        
def lista():
    try:
        cant = int(input("¿Cuántos números deseas capturar? "));
        print();
        if cant < 0:
            print('Error: introdujiste una cantidad negativa. Introduce una cantidad positiva y entera.\n');
            return lista();
        elif cant == 0:
            print('Error: introdujiste un valor nulo "0". Introduce un valor positivo y entero.\n');
            return lista();
        elif cant >= 50:
            while True:
                loco = input("¡¿Acaso estás loco?! ¿Seguro que quieres introducir "+ str(cant) + ' valores?. Escribe "si" o "no" como respuesta. ');
                print()
                if loco == 'si':
                    print("Tus deseos son órdenes\n");
                    break;
                elif loco == 'no':
                    print("Va de nuez, pues.\n");
                    return lista();
                    break;
                else:
                    print("¡Esto no es un juego! Introduce una respuesta correcta.\n");
        return cant;
    except:
        print("\nError: introdujiste un valor no númerico. Introduce una cantidad entera y positiva.\n");
        return lista();
        
def valores(cant):
    i=0;
    lista_1 = [];
    try:
        for i in range (cant):
            i+=1;
            vals = int(input("Introduce el valor " + str(i) + ". "));
            lista_1.append(vals);
            print();
        return lista_1;
    except:
        print("\nError: introdujiste un valor no númerico. Vuelve a intentarlo.\n");
        return valores(cant);

def lista_original(lista_1):
        print(lista_1);
        print();

def lista_patito(cant, lista_1):
        i = 0;
        lista_2 = [];
        for i in range(cant):
            if lista_1[i] >= 0:
                lista_2.append(lista_1[i]);
            elif lista_1[i] < 0:
                res = lista_1[i] % 2;
                if res > 0:
                    lista_2.append(lista_1[i]*(-1));
                elif res == 0:
                    lista_2.append(lista_1[i]);
        i+=1;
        print(lista_2);
        print();
            
def cargando():
    import time;
    tope = 0;
    print("Cargando: ", end='');
    while tope < 20:
        time.sleep(0.02);
        print("█", end='');
        tope += 1;
    print("\n");
        
menu();


