from colorama import init, Fore, Back, Cursor;


def cuadrado():
    print(Cursor.POS(x+4, y) + " o o o o o o o o o o o ");
    print(Cursor.Pos(x, y+1) + " o                   o ");
    print(Cursor.POS(x+7, y+2) + " o o o o o o o o o o o ")

def triangulo():
    print(Cursor.POS(x+6, y)); + " o "
    print(Cursor.POS(X+10, y+1) + " o o ")

def circulo():
    print(Cursor.POS() + "o o o o ")

cuadrado();