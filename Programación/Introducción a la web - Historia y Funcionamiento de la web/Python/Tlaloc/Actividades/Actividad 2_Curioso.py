def menu_p():
    while True:
        opc = input("\nEscribe el número de la opción que deseas realizar.\n\n1. Convertir nones negativos a positivos\n2. Buscar y vender productos\n3. Salir\n\nOpción: ");
        print();
        if opc == '1':
            cargando();
            p_1();
        elif opc == '2':
            cargando();
            p_2();
        elif opc == '3':
            cargando();
            print("Has salido del programa. Vuelve pronto");
            break;
        else:
            print("Has introducido una opción inválida. Inténtalo de nuevo");

def p_1():

    print("Conversión de nones negativos a positivos.\n ");
    cant = lista();
    cargando();
    lista_1 = valores(cant);
    while True:
        menu = input("Eliga el número de la opción que desea realizar.\n\n1. Crear  lista.\n2. Imprimir lista original.\n3. Imprimir lista convirtiendo los valores nones negativos a positivos.\n4. Volver al menú principal.\n\nOpción: ");
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
            return menu_p();
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
        

def p_2():
    agregar = True;
    producto = [];
    cant = 1;
    while agregar == True:
        print("Buscar y vender productos\n");
        nombre = nombre_p(producto);
        precio = precio_p(producto, nombre);
        piezas = piezas_p(producto, nombre);
        print(producto);
        print();
        opc_agregar = True;
        while opc_agregar == True:
            otro = input('¿Desesas agregar otro producto? Escribe "si" o "no." ')
            print();
            if otro == 'si':
                cant += 1;
                print("Has decidido agregar otro producto\n")
                opc_agregar = False;
            elif otro == 'no':
                print("Productos agregados exitosamente\n")
                agregar = False;
                opc_agregar = False;
            else:
                print("Has escrito una opción incorrecta. Inténtalo de nuevo.\n");
    menu_2(producto, cant)

           
def nombre_p(producto):
    nombre = input("Introduce el nombre del producto. ");
    print();
    producto.append(nombre);
    return nombre

def precio_p(producto, nombre):
    try:
        precio = int(input("Introduce el precio del producto " + nombre + ". "));
        print();
        if precio > 0:
            producto.append(precio);
        elif precio == 0:
            while True:
                gratis = input('Seguro que quieres dar gratis tu producto. Escribe "si" o "no": ');
                print();
                if gratis == 'si':
                    producto.append(precio);
                    return precio;
                    break;
                elif gratis == 'no':
                    print("Ok, va de nuez\n");
                    return precio_p(producto, nombre)
                else:
                    print("Has introducido una repuesta inválida. Vuelve a intentarlo\n");
        elif precio < 0:
            print("No puedes tener precios negativos. Introduce un número positivo.\n");
            return precio_p(producto, nombre);
    except:
        print("\nHas introducido un valor no númerico. Inténtalo de nuevo\n");
        return precio_p(producto, nombre);

def piezas_p(producto, nombre):
    try:
        piezas = int(input("Introduce el número de piezas "));
        print();
        if piezas > 0:
            producto.append(piezas);
        elif piezas == 0:
            vacio = input('Seguro que no quieres dejar vacío el inventario del producto', producto, '; de ser así, no podrás vender hasta que aumentes tu número de piezas. Escribe "si" o "no": ');
            print();
            if vacio == 'si':
                producto.append(producto);
                return piezas();
            elif vacio == 'no':
                print("Ok, va de nuez\n");
                return piezas_p(producto, nombre);
            else:
                print("Has introducido una repuesta inválida. Vuelve a intentarlo\n");
        elif piezas < 0:
            print("Tener un precio negativo no está permitido. Introduce un precio positivo.\n");
    except:
        print("\nHas introducido un valor no númerico, Inténtalo de nuevo\n");
        return piezas_p(producto, nombre)


def menu_2(producto, cant):
    menu_2 = input("Introduce el número de la opción que deseas realizar\n\n1. Buscar producto\n2. Vender producto\n3. Regresar al menú principal\n\nOpción: ");
    print();
    if menu_2 == '1':
        buscar(producto, cant);
    elif menu_2 == '2':
        vender(producto);
    elif menu_2 == '3':
        menu_p();
    else:
        print("Error: opción inválida. Inténtalo de nuevo.")

def buscar(producto, cant):
    print(producto)
    print();
    producto_2 = producto
    i = 0;
    num = 0;
    for i in range(cant):
        producto_2[num] = str.lower(producto_2[num]);
        num += 3;
    producto_b = str(input("Escribe el nombre del producto a buscar. "));
    print();
    buscar = str.lower(producto_b);
    num_b = 0;
    if buscar in producto_2:
        print("Producto encontrado\n");
        if buscar == producto_2[num_b]:
            print("Nombre: ", producto[num_b]);
            print("Precio: ", producto[num_b+1]);
            print("Precio: ", producto[num_b+2]); 
    else:
        print("Producto no encontrado. Inténtalo de nuevo\n");
        return buscar(producto, cant);
    print(producto);

def vender(producto):
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



menu_p()
    