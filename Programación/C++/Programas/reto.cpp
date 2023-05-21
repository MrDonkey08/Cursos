#include <iostream>
#include <locale.h>  

using namespace std;

int main(){
    setlocale(LC_CTYPE, "Spanish"); 
    int edad = 0;

    cout << "Introduce tu edad: ";
    cin >> edad;

    if (edad < 18 || edad > 40 ){
        cout << "Tienes " << edad << ". No puedes votar.\n";
    } 
    else  {
        cout << "Tienes " << edad << ". Puedes votar.\n";
    }
    
    return 0;
}