'''
paso de parámetros
'''

def suma(a,b):
    return a+b;

def resta(a,b):
    return a-b;

def multi(a,b):
    return a*b

def div(a,b):
    return a/b;

def e1():
    a = float(input("Dame un valor: "));
    b = float(input("Dame un valor: "));
    print("Suma:", suma(a, b));
    print("Resta:", resta(a, b));
    print("División:", div(a, b));
    print("Multiplicación:", mult(a, b));

e1();

#///////

def nombre():
    nombre=str(input("Dame un nombre: "));
    return nombre;

def apellido():
    apellido=str(input("Dame un apellido: "));
    return apellido;

def e2():
    concateno=nombre()+" "+apellido();
    print(concateno);