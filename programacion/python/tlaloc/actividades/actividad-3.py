from colorama import init, Fore, Style;

def menu_p():
    init(autoreset = True);
    opc = input(Fore.YELLOW + "Escribe el número de la opción que deseas realizar." + Fore.LIGHTGREEN_EX + "\n\n1. Convertir nones negativos a positivos\n2. Buscar y vender productos\n3. Salir del programa.\n\n" + Fore.CYAN + "Opción: " + Fore.RESET);
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
        e_opc();
        menu_p();


def p_1():
    
    print(Fore.BLUE + Style.BRIGHT + "Conversión de nones negativos a positivos.");
    print();
    cant = lista();
    lista_1 = valores(cant);
    while True:
        menu = input(Fore.YELLOW + "Eliga el número de la opción que desea realizar." + Fore.LIGHTGREEN_EX + "\n\n1. Modificar lista.\n2. Imprimir lista original.\n3. Imprimir lista convirtiendo los valores nones negativos a positivos.\n4. Volver al menú principal.\n\n" + Fore.CYAN + "Opción: " + Fore.RESET);
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
            e_opc();

def lista():
    try:
        cant = int(input(Fore.LIGHTGREEN_EX+ "¿Cuántos números deseas capturar? " + Fore.RESET));
        print();
        if cant < 0:
            e_neg();
            return lista();
        elif cant == 0:
            e_0();
            return lista();
        elif cant >= 50:
            cargando();
            while True:
                loco = input(Fore.RED + "¡¿Acaso estás loco?! " + Fore.LIGHTGREEN_EX + "¿Seguro que quieres introducir "+ str(cant) + "valores? " + Fore.YELLOW +  'Escribe "si" o "no" como respuesta. ' + Fore.RESET);
                print()
                if loco == 'si':
                    print("Tus deseos son órdenes\n");
                    cargando();
                    break;
                elif loco == 'no':
                    print("Va de nuez, pues.\n");
                    cargando();
                    return lista();
                    break;
                else:           
                    e_opc();
        return cant;
    except:
        e_num();
        return lista();
        
def valores(cant):
    i=0;
    lista_1 = [];
    while i < cant:
        try:
            i+=1;
            vals = int(input(Fore.YELLOW + "Introduce el valor " + str(i) + ". " + Fore.RESET));
            lista_1.append(vals);
            print();
        except:
            e_num();
            i-=1;
    cargando();
    return lista_1;

def lista_original(lista_1):
        print("Lista original:", lista_1, "\n");
        continuar();

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
    print("Lista modificada:", lista_2, "\n");
    continuar();


def p_2():
    agregar = True;
    producto = [];
    cant = 1;
    while agregar == True:
        print(Fore.BLUE + Style.BRIGHT + "Buscar y vender productos\n");
        nombre = nombre_p(producto, cant);
        precio = precio_p(producto, cant);
        piezas = piezas_p(producto, cant);
        print("Lista", producto, "\n");
        opc_agregar = True;
        while opc_agregar == True:
            otro = input(Fore.LIGHTGREEN_EX + '¿Desesas agregar otro producto? Escribe "si" o "no". ' + Fore.RESET);
            print();
            if otro == 'si':
                cant += 1;
                print("Has decidido agregar otro producto\n");
                cargando();
                opc_agregar = False;
            elif otro == 'no':
                print("Productos agregados exitosamente\n");
                agregar = False;
                opc_agregar = False;
            else:
                e_opc();
    print("Lista:", producto, "\n");
    continuar();
    menu_2(producto, cant);

def nombre_p(producto, cant):
    nombre = input(Fore.YELLOW + "Introduce el nombre del producto " + str(cant) +". " + Fore.RESET);
    print();
    producto.append(nombre);
    return nombre

def precio_p(producto, cant):
    try:
        precio = int(input(Fore.YELLOW + "Introduce el precio del producto " + str(cant) + ". " + Fore.RESET));
        print();
        if precio > 0:
            producto.append(precio);
        elif precio == 0:
            while True:
                gratis = input(Fore.LIGHTGREEN_EX + '¿Seguro que quieres dar gratis tu producto? Escribe "si" o "no": ' + Fore.RESET);
                print();
                if gratis == 'si':
                    producto.append(precio);
                    return precio;
                    break;
                elif gratis == 'no':
                    print("Ok, va de nuez\n");
                    cargando();
                    return precio_p(producto, cant)
                else:
                    e_opc();
        elif precio < 0:
            e_neg();
            return precio_p(producto, cant);
    except:
        e_num();
        return precio_p(producto, cant);

def piezas_p(producto, cant):
    try:
        piezas = int(input(Fore.YELLOW + "Introduce el número de piezas del producto " + str(cant)+ ". " + Fore.RESET));
        print();
        if piezas > 0:
            producto.append(piezas);
        elif piezas == 0:
            vacio = input(Fore.LIGHTGREEN_EX + '¿Seguro que quieres dejar vacío el inventario del producto? " + str(cant) + "De ser así, no podrás vender hasta que aumentes el número de piezas. Escribe "si" o "no": ' + Fore.RESET);
            print();
            if vacio == 'si':
                producto.append(piezas);
                return piezas;
            elif vacio == 'no':
                print("Ok, va de nuez\n");
                cargando();
                return piezas_p(producto, cant);
            else:
                e_opc();
        elif piezas < 0:
            e_neg();
            return piezas_p(producto, cant);
    except:
        e_num();
        return piezas_p(producto, cant);

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
        menu_2 = input(Fore.YELLOW + "Introduce el número de la opción que deseas realizar\n\n" + Fore.LIGHTGREEN_EX + "1. Buscar producto\n2. Vender producto\n3. Regresar al menú principal\n\n" + Fore.CYAN + "Opción: " + Fore.RESET);
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
            e_opc();

def buscar(producto, producto_2, cant):
    b = True;
    while b == True:
        producto_b = str(input(Fore.YELLOW + "Escribe el nombre del producto a buscar. " + Fore.RESET));
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
                    continuar();
                    b = False;
                    break;
                else:
                    num_b +=3;
        else:
            print("Producto no encontrado. Inténtalo de nuevo\n");
            i_nuevo();

def vender(producto, producto_2, cant):
    while True:
        num_b = 0;
        producto_b = str(input(Fore.YELLOW + "Escribe el nombre del producto a vender. " + Fore.RESET));
        print();
        buscar = str.lower(producto_b);
        if buscar in producto_2:
            print("Producto encontrado.", end=' ');
            while True:
                try:
                    if buscar == producto_2[num_b]:
                        cant_v = int(input(Fore.GREEN + "¿Cuántas piezas vas a vender? "));
                        print();
                        cargando();
                        if producto[num_b+2] >= cant_v and cant_v > 0:
                            print(Style.BRIGHT + Fore.BLUE + "Venta exitosa\n");
                            print(Style.BRIGHT + Fore.RED + "Cantidad: " +  Fore.RESET + str(cant_v) + ".");
                            print(Style.BRIGHT + Fore.RED + "Precio: " + Fore.RESET + "$" + str(producto[num_b+1]) + ".")
                            total = producto[num_b+1]*cant_v;
                            print(Style.BRIGHT + Fore.RED + "Total: " + Fore.RESET + "$" + str(total) + ".\n");
                            producto[num_b+2] -= cant_v;
                            print("Te restan", producto[num_b+2], "piezas de " + str(producto[num_b]) + ".");
                            print("\nLista:", producto, "\n");
                            continuar();
                            return producto;
                        elif producto[num_b+2] < cant_v:
                            print(Fore.RED + "Piezas insuficientes. Introduce una cantidad acorde al número de piezas disponibles.\n");
                            i_nuevo();
                        elif cant_v <= 0:
                            print(Fore.RED + 'No se permiten cantidades negativas o el valor "0". Inténtalo de nuevo.\n');
                            i_nuevo();
                    else:
                        num_b += 3;
                except:
                    e_num();
        else:
            print(Fore.RED + "Producto no encontrado. Inténtalo de nuevo\n")
            i_nuevo();


def cargando():
    import os;
    import time;
    tope = 0;
    print("Cargando: ", end='');
    while tope < 20:
        time.sleep(0.04);
        print("█", end='');
        tope += 1;
    print("\n");
    os.system("cls");

def i_nuevo():
    print(Fore.YELLOW + "Pulsa Enter para volver a intentar.", end='');
    input();
    print();
    cargando();

def continuar():
    print(Fore.YELLOW + "Pulsa Enter para continuar.", end='');
    input();
    print();
    cargando();


def e_num():
    print(Style.BRIGHT + Fore.RED + "\nError: has introducido un valor no númerico. Inténtalo de nuevo.")
    print();
    i_nuevo();

def e_0():
    print(Style.BRIGHT + Fore.RED + 'Error: no se permite el valor "0". Inténtalo de nuevo.')
    print();
    i_nuevo();

def e_neg():
    print(Style.BRIGHT + Fore.RED + 'Error: introdujiste una cantidad negativa. Inténtalo de nuevo.');
    print();
    i_nuevo();

def e_opc():
    print(Style.BRIGHT + Fore.RED + "¡Esto no es un juego! Introduce una respuesta correcta.");
    print();
    i_nuevo();

menu_p();