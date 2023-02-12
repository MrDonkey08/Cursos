def menu_p():
    opc = input("Escribe el número de la opción que deseas realizar.\n\n1. Convertir nones negativos a positivos\n2. Buscar y vender productos\n3. Salir del programa.\n\nOpción: ");
    print();
    if opc == '1':
        cargando();
        p_1();
    elif opc == '2':
        cargando();
        p_2();
    elif opc == '3':
        cargando();
        print("Has salido del programa. Vuelve pronto.\n");
    else:
        print("Has introducido una opción inválida. Inténtalo de nuevo");
        menu_p();


def p_1():
    print("Conversión de nones negativos a positivos.\n ");
    cant = lista();
    cargando();
    lista_1 = valores(cant);
    while True:
        menu = input("Eliga el número de la opción que desea realizar.\n\n1. Modificar lista.\n2. Imprimir lista original.\n3. Imprimir lista convirtiendo los valores nones negativos a positivos.\n4. Volver al menú principal.\n\nOpción: ");
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
    while i < cant:
        try:
            i+=1;
            vals = int(input("Introduce el valor " + str(i) + ". "));
            lista_1.append(vals);
            print();
        except:
            print("\nError: introdujiste un valor no númerico. Vuelve a intentarlo.\n");
            i-=1;
    return lista_1;

def lista_original(lista_1):
        print(lista_1, "\n");

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
    print(lista_2, "\n");
        

def p_2():
    agregar = True;
    producto = [];
    cant = 1;
    while agregar == True:
        print("Buscar y vender productos\n");
        nombre = nombre_p(producto, cant);
        precio = precio_p(producto, cant);
        piezas = piezas_p(producto, cant);
        print(producto, "\n");
        opc_agregar = True;
        while opc_agregar == True:
            otro = input('¿Desesas agregar otro producto? Escribe "si" o "no". ')
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
    cargando();
    menu_2(producto, cant);
          
def nombre_p(producto, cant):
    nombre = input("Introduce el nombre del producto " + str(cant) +". ");
    print();
    producto.append(nombre);
    return nombre

def precio_p(producto, cant):
    try:
        precio = int(input("Introduce el precio del producto " + str(cant) + ". "));
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
            return precio_p(producto, cant);
    except:
        print("\nHas introducido un valor no númerico. Inténtalo de nuevo\n");
        return precio_p(producto, nombre);

def piezas_p(producto, cant):
    try:
        piezas = int(input("Introduce el número de piezas del producto " + str(cant)+ ". "));
        print();
        if piezas > 0:
            producto.append(piezas);
        elif piezas == 0:
            vacio = input('Seguro que no quieres dejar vacío el inventario del producto' + str(cant) + '; de ser así, no podrás vender hasta que aumentes tu número de piezas. Escribe "si" o "no": ');
            print();
            if vacio == 'si':
                producto.append(producto);
                return piezas();
            elif vacio == 'no':
                print("Ok, va de nuez\n");
                return piezas_p(producto, cant);
            else:
                print("Has introducido una repuesta inválida. Vuelve a intentarlo\n");
        elif piezas < 0:
            print("Tener un precio negativo no está permitido. Introduce un precio positivo.\n");
            return piezas_p(producto, nombre);
    except:
        print("\nHas introducido un valor no númerico, Inténtalo de nuevo\n");
        return piezas_p(producto, nombre);

def producto2(producto, cant):
    producto_2 = []
    for i in range(cant*3):
        producto_2.append(producto[i]);
    num = 0;
    for i in range(cant):
        producto_2[num] = str.lower(producto_2[num]);
        num += 3;
    return producto_2;

def menu_2(producto, cant):
    producto_2 = producto2(producto, cant);
    while True:
        menu_2 = input("Introduce el número de la opción que deseas realizar\n\n1. Buscar producto\n2. Vender producto\n3. Regresar al menú principal\n\nOpción: ");
        print();
        if menu_2 == '1':
            cargando();
            buscar(producto, producto_2, cant);
        elif menu_2 == '2':
            cargando();
            producto = vender(producto, producto_2, cant);
        elif menu_2 == '3':
            cargando();
            menu_p();
            break;
        else:
            cargando();
            print("Error: opción inválida. Inténtalo de nuevo.")


def buscar(producto, producto_2, cant):
    b = True;
    while b == True:
        producto_b = str(input("Escribe el nombre del producto a buscar. "));
        print();
        buscar = str.lower(producto_b);
        num_b = 0;
        if buscar in producto_2:
            print("Producto encontrado\n");
            while True: 
                if buscar == producto_2[num_b]:
                    print("Nombre:", producto[num_b]);
                    print("Precio:", producto[num_b+1]);
                    print("Piezas:", producto[num_b+2]);
                    print()
                    b = False;
                    break;
                else:
                    num_b +=3;
        else:
            print("Producto no encontrado. Inténtalo de nuevo\n");


def vender(producto, producto_2, cant):
    while True:
        num_b = 0;
        producto_b = str(input("Escribe el nombre del producto a vender. "));
        print();
        buscar = str.lower(producto_b);
        if buscar in producto_2:
            print("Producto encontrado.\n")
            while True:
                try:
                    if buscar == producto_2[num_b]:
                        cant_v = int(input("¿Cuántas piezas vas a vender? "));
                        print();
                        if producto[num_b+2] >= cant_v and cant_v > 0:
                            print("Venta exitosa\n");
                            print("Cantidad:" + str(cant_v) + ".")
                            print("Precio: $" + str(producto[num_b+1]) + ".")
                            total = producto[num_b+1]*cant_v;
                            print("Total: $" + str(total) + ".");
                            producto[num_b+2] -= cant_v;
                            print("Te restan", producto[num_b+2], "piezas de " + str(producto[num_b]) + ".");
                            print("\nLista:", producto, "\n");
                            return producto;
                        elif producto[num_b+2] < cant_v:
                            print("Piezas insuficientes. Introduce una cantidad acorde al número de piezas disponibles.\n");
                        elif cant_v <= 0:
                            print('No se permiten cantidades negativas o con valor "0". Inténtalo de nuevo.\n');
                    else:
                        num_b += 3;
                except: 
                        print("Introdujiste un valor no númerico o un valor decimal. Inténtalo de nuevo.");
        else:
            print("Producto no encontrado. Inténtalo de nuevo\n"); 

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
    