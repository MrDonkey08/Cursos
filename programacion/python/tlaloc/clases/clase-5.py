def texto_1():
    print("Este es el texto de prueba 1...");

def texto_2():
    print("Este es el texto de prueba 2...");

def e1():
    tecla=str(input("Presione una tecla"));
    if tecla == "s":
        print("presionaste la tecla: ", tecla);
    else:
        Print("Presionaste tecla desconocida");

def e2(): #detecta tecla
    import msvcrt;
    while True:
        tecla = msvcrt.getch();
        print("Codigo assci? -> ", ord(tecla)); #'\000'  '\xe0 224 teclas especiales
        print("Codigo interno? ->", tecla);

e2();


def e3(): #no funciona por usar ord en el getch
    import msvcrt;
    while True:
        tecla=ord(msvcrt.getch());
        print(tecla);
        if tecla == 49:  #observe que no se cumple ORD regre
            print("Presiono la tecla 1");
def e4():
    import msvcrt;
    while True:
        tecla=msvcrt.getch();
        print(tecla);
        if tecla == b's':
            print("Presiono la tecla s");


def e5(): #llamada a funcion texto en pantalla
    import msvcrt; # el msvcrt puede hacer uso del teclado
    while True:
        print("Mientras no presione la tecla 's' no se imprime nada en pantalla");
        tecla=msvcrt.getch();
        print(tecla);
        if tecla == b's':
            texto1();


'''__'''

def clean_1():
    import os;
    texto_1();
    input();
    os.system("cls");
    texto_2();
    input();

def clean_2():
    import os; #el os manda a llamar al sistema operativo
    while True:
        texto1();
        input();
        os.system("cls");  #el cls limpia la pantalla


'''__'''

def pon_color_1():
    import os;
    from colorama import Back, Fore, init, Stile, Cursor;
    init();
    texto_1();
    print(Back.BLUE+Fore.LIGHTYELLOW_EX);
    texto_2();
    texto_1();
    input();


def pon_color_2():
    import os;
    from colorama import Back, Fore, init, Style, Cursor;
    init();
    texto_1();
    print(Back.BLUE+Fore.LIGHTYELLOW_EX, end='');
    texto_2();
    texto_1();
    input();


def mueve():  #este codigo poner en diferentes lugares algun texto u otra cosa
    from colorama import Back, Fore, init, Style, Cursor;
    init();
    print(Cursor.POS(20,5)+"**");

def mueve ():
    from colorama import Cursor, init;
    init();
    print(Cursor.POS(50, 20)+"***************");
    input();

def eloco(): #detecta la tecla
    import msvcrt;
    while True:
        tecla = msvcrt.getch();
        print("Código Assci")

#//////////////////////////////////////////////////////////////////////////////////////////////////
def mueve():
    from colorama import Cursor, init;
    init();
    print(Cursor.POS(50, 20)+"**");
    input();


def eloco(): #detecta tecla
    import msvcrt;
    while True:
        tecla = msvcrt.getch();
        print("Codigo assci? -> ", ord(tecla)); #'\000'  '\xe0 224 teclas especiales
        print("Codigo interno? ->", tecla);

def teclado():
    import msvcrt;
    from colorama import Cursor, init;
    init();
    x = 10;
    y = 10;
    while True:
        tecla = ord(msvcrt.getch());
        #tecla = msvcrt.getch();
        if tecla == 119:
            y = y - 1;
            print(Cursor.POS(x, y)+"**");
        elif tecla == 97:
            x = x - 1;
            print(Cursor.POS(x, y)+"**");

teclado();

#////////////////////////////////////////////////////////////////////////////
def no_parpadea():
    from colorama import Cursor, init;
    init();
    print(Cursor.POS(50, 10)+"**********************")
    input();
    print(Cursor.POS(50, 10)+"                      ");
    input();