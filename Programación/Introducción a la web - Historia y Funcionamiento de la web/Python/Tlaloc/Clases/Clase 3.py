'''
Aprendiendo colorama
El archivo no se puede llamar colorama
o colorama.py
porque pueden pasar cosas malas ja, ja, ja.
'''

def ej_1():
    from colorama import init, Back, Fore;
    init();
    print(Back.GREEN + Fore.LIGHTYELLOW_EX + "Carlos y Lupe");
    # Al ponerle el prefijo "LIGHT, agregar el sufijo _EX
    # Back. de prefijo para el color del fondo y Fore. para el color de la letra
    input();

def ej_2():
    from colorama import init, Back, Fore;
    init();
    print(Back.GREEN + Fore.LIGHTYELLOW_EX + "Mi Lalo loco");
    print("Este es otro texto");
    input();

def ej_3():
    from colorama import init, Back, Fore, Style;
    init();
    print(Style.DIM + "Mi Lalo loco");
    print(Style.NORMAL + "sino");
    print(Style.BRIGHT + "tas todo loco");
    print(Style.BRIGHT + "LALOCOSOWER 1234", Style.RESET_ALL + Fore.GREEN + "En python");
    input();

def ej_4():
    from colorama import  init, Back, Fore;
    init(autoreset = True);
    print(Fore.GREEN + "Con Colorama");
    print("Sin colorama");
    input();

def ej_5():
    from colorama import init, Back, Fore;
    init();
    print(Fore.GREEN);
    print(Back.RED);
    print("Con colorama");
    print("Con colorama\n"*4);
    print(Fore.RESET + Back.RESET)
    print("Sin colorama\n"*4);
    print();
    input();
    
def ej_6():
    import time;
    from colorama import Cursor, Fore, init;
    init();
    x = 20;
    y = 10
    print(Cursor.POS(50, 10) + "*"*20);
    input ();
    for i in range (30):
        print(Cursor.POS(x, y) + "*"*20);
        x += 1;
    input();

def ej_7():
    import time;
    import os;
    from colorama import Cursor, Fore, init;
    init();
    x = 20;
    y = 10
    print(Cursor.POS(50, 10) + "*"*20);
    input ();
    for i in range (30):
        os.system("cls");
        print(Cursor.POS(x, y)+ Fore.LIGHTYELLOW_EX + "*"*20);
        time.sleep(0.05);
        x += 1;
    input();

ej_1();
ej_2();
ej_3();
ej_4();
ej_5();
ej_6();
ej_7();