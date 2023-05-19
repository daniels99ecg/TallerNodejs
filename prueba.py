def suma(a,b):
    return a+b

def resta(a,b):
    return a-b   

print("[1] sumar \n[2] restar")

menu=int(input("Seleccione una opcion: "))


if menu==1:
    opcion1=int(input("Ingresa el numero A: "))
    opcion2=int(input("Ingresa el numero B: "))
    print(suma(opcion1,opcion2))    

elif menu==2:
     opcion1=int(input("Ingresa el numero A: "))
     opcion2=int(input("Ingresa el numero B: "))

     print(resta(opcion1,opcion2))