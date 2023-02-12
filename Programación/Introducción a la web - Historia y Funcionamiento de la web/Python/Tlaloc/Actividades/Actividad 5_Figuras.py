from colorama import init, Fore, Cursor;
import msvcrt;


def cuadrado():
    print("o o o o o o o o o o o")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("o o o o o o o o o o o")
    input()

def circulo():
    print("      o o o o      ")
    print("    o           o    ")
    print("  o               o  ")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("o                   o")
    print("  o               o  ")
    print("    o           o    ")
    print("      o o o o o      ")
    input()

    print("          o")
    print("         o o")
    print("        o   o")
    print("       o     o")
    print("      o       o")
    print("     o         o")
    print("    o           o")
    print("   o             o")
    print("  o               o")
    print(" o                 o")
    print("o o o o o o o o o o o")
    input()

def pasos():
    print('Pulsa "1" para mover el cuadrado.');
    print('Pusla "2" para mover el círculo.');
    print('Pusla "3" para mover el triángulo.')
    print('Pulsa "a" o ')

def moverse():
    while True:
        tecla = ord(msvcrt.getch());
        #tecla = msvcrt.getch();
        if tecla == 119:
            y = y - 1;
            print(Cursor.POS(x, y)+"**");
        elif tecla == 97:
            x= x - 1
            print(Cursor.POS(x, y)+"**");

cuadrado();
circulo();
triandulo();