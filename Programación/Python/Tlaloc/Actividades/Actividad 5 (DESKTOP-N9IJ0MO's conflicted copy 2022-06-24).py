from colorama import init, Fore, Cursor;
import os;
import msvcrt;
os.system("cls")

def pasos():
    print('Pulsa "1" para mover el cuadrado.');
    print('Pulsa "2" para mover el círculo.');
    print('Pulsa "3" para mover el triángulo.');
    print('Pulsa "4" para finalizar el programa');
    print('Pulsa "a" o "🠔" para mover la figura hacia la izquierda');
    print('Pulsa "d" o "🠖" para mover la figura hacia la derecha');
    print('Pulsa "w" o "🠕" para mover la figura hacia arriba');
    print('Pulsa "s" o "🠗" para mover la figura hacia abajo');

def cuadrado(x, x_1, x_2, y, y_1, y_2, cont):
    figura = 1;
    if cont > 0 :
        tecla = entrada();
        if tecla == 49:
            x = eje_x(x, x_1, x_2, figura);
            y = eje_y(y, y_1, y_2, figura);
    print(Cursor.POS(x, y)    + " o o o o o o o o o o o ")
    print(Cursor.POS(x, y+1)  + " o                   o ")
    print(Cursor.POS(x, y+2)  + " o                   o ")
    print(Cursor.POS(x, y+3)  + " o                   o ")
    print(Cursor.POS(x, y+4)  + " o                   o ")
    print(Cursor.POS(x, y+5)  + " o                   o ")
    print(Cursor.POS(x, y+6)  + " o                   o ")
    print(Cursor.POS(x, y+7)  + " o                   o ")
    print(Cursor.POS(x, y+8)  + " o                   o ")
    print(Cursor.POS(x, y+9)  + " o                   o ")
    print(Cursor.POS(x, y+10) + " o o o o o o o o o o o ", end='')

def circulo(x, x_1, x_2, y, y_1, y_2, cont):
    figura = 2;
    if cont > 0:
        tecla = entrada();
        if tecla == 50:
            x_1 = eje_x(x, x_1, x_2, figura);
            y_1 = eje_y(y, y_1, y_2, figura);
    print(Cursor.POS(x_1+6, y_1)    + " o o o o o ")
    print(Cursor.POS(x_1+4, y_1+1)  + " o           o ")
    print(Cursor.POS(x_1+2, y_1+2)  + " o               o ")
    print(Cursor.POS(x_1, y_1+3)    + " o                   o ")
    print(Cursor.POS(x_1, y_1+4)    + " o                   o ")
    print(Cursor.POS(x_1, y_1+5)    + " o                   o ")
    print(Cursor.POS(x_1, y_1+6)    + " o                   o ")
    print(Cursor.POS(x_1, y_1+7)    + " o                   o ")
    print(Cursor.POS(x_1+2, y_1+8)  + " o               o ")
    print(Cursor.POS(x_1+4, y_1+9)  + " o           o ")
    print(Cursor.POS(x_1+6, y_1+10) + " o o o o o ", end='')

def triangulo(x, x_1, x_2, y, y_1, y_2, cont):
    figura = 3;
    if cont > 0:
        tecla = entrada();
        if tecla == 51:
            x_2 = eje_x(x, x_1, x_2, figura);
            y_2 = eje_y(y, y_1, y_2, figura);
    print(Cursor.POS(x_2+10, y_2)  + " o ")
    print(Cursor.POS(x_2+9, y_2+1) + " o o ")
    print(Cursor.POS(x_2+8, y_2+2) + " o   o ")
    print(Cursor.POS(x_2+7, y_2+3) + " o     o ")
    print(Cursor.POS(x_2+6, y_2+4) + " o       o ")
    print(Cursor.POS(x_2+5, y_2+5) + " o         o ")
    print(Cursor.POS(x_2+4, y_2+6) + " o           o ")
    print(Cursor.POS(x_2+3, y_2+7) + " o             o ")
    print(Cursor.POS(x_2+2, y_2+8) + " o               o ")
    print(Cursor.POS(x_2+1, y_2+9) + " o                 o ")
    print(Cursor.POS(x_2, y_2+10)  + " o o o o o o o o o o o ", end='')


def eje_x(x, x_1, x_2, figura):
    tecla = ord(msvcrt.getch());
    if figura == 1:
        if tecla == 97:
            x -= 1;
            return x;
        elif tecla == 100:
            x += 1;
            return x;
        else:
            return x;
    elif figura == 2:
        if tecla == 97:
            x_1 -= 1;
            return x_1;
        elif tecla == 100:
            x_1 += 1;
            return x_1;
        else:
            return x_1;
    elif figura == 3:
        if tecla == 97:
            x_2 -= 1;
            return x_2;
        elif tecla == 100:
            x_2 += 1;
            return x_2;
        else:
            return x_2;


def eje_y(y, y_1, y_2, ):
        tecla = ord(msvcrt.getch());
        if tecla == 119:
            y -= 1;
            return y;
        elif tecla == 115:
            y += 1;
            return y;
        else:
            return y;
 
def entrada():
        tecla = ord(msvcrt.getch());
        return tecla
        
def main():
    x = 2;
    x_1 = 46;
    x_2 = 92;
    y = 20;
    y_1 = 20;
    y_2 = 20;
    cont = 0;
    while True:
        cuadrado(x, x_1, x_2, y, y_1, y_2, cont);
        circulo(x, x_1, x_2, y, y_1, y_2, cont);
        triangulo(x, x_1, x_2, y, y_1, y_2, cont);
        cont += 1;
    

main();