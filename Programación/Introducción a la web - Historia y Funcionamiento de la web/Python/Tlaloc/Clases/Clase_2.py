'''
Ciclo for y continuación de listas
'''

def ej_1():
    lista = ["", "", ""];
    lista_2 = [None]*3;
    print(lista)
    print(lista_2)
    pito = 500;
    lista_2[2] = pito;
    print(lista);
    print(lista_2);
    
def ej_1_2():
    cont = int(input("¿Cuántos nombres quieres capturar? "));
    nombre = [None]*cont;
    for i in range(cont):
        print(i);
        nombre[i] = str(input("Dame el nombre "));
    print(lista);

def ej_2():
    cont = int(input("¿Cuántos nombres quieres capturar? "));
    nombre = [None]*cont;
    for i in range(cont):
        print(i);
        minusculas = str(input("Dame el nombre: "));
        nombre[i] = str.lower(minusculas);
        #nombre[i] = str.upper(minúsculas);
    print(nombre)
    buscar = str(input("Dame el nombre a buscar"));
    minusculas_buscar = str.lower(buscar);
    if minusculas_buscar in nombre:
        print("Nombre encontrado");
    else:
        print("Nombre no encontrado");

def ej_3():
    num = int(input("Dame un número"));
    for i in range(6):
        print(chr(num));
        num +=1;

def ej_4():
    tope = int(input("Dame un número: "));
    for i in range(tope):
        print("Contando %0.2f: arst:" %(i+1));

def ej_5():
    for i in [3, 4, 10]:
        print(i);

def ej_6():
    lista = ["Lalito", "Carlito", "Alanito"];
    for i in lista:
        print(i);

def ej_7():
    mensaje = str(input("Escribe lo que quieras, mamahuevo"))
    print(mensaje);
    mensaje = str.split(mensaje);
    for i in mensaje:
        print(" Separado: ", i);
    print("lista: ", mensaje);
    for i in range(mensaje):
        print("Separado: ", i);

def ej_8():
    frase = '''Mensaje principal

    opcion 1 loco''';
    for i in frase:
        print("Separado: ", i);

def ej_9():
    numero = str(input("Escribe números separados por espacio "));
    suma = 0;
    lista = str.split(numero);
    print("Lista: ", lista);
    lista = [int(i) for i in lista];
    print(lista);
    for i in lista:
        suma += i;
    print("La suma de la lista es: ", suma);

def ej_10():
    print("BONUS... :C\n");
    import time;
    frase = "Tengo hambre";
    for letra in frase:
        print(letra, end='');
        time.sleep(0.005);


    
ej_2()