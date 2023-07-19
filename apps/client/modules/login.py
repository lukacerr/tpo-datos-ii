import utils.request as rq
import utils.io as io


def get_iva_condition():
    io.print_arr([
        "Ingrese 1 si su condicion es Consumidor Final",
        "Ingrese 2 si su condicion es Consumidor no categorizado",
        "Ingrese 3 si su condicion es Monotributista"
    ])

    answer = io.get_option([1, 2, 3])
    return "FINAL_CONSUMER" if answer == 1 else "NON_CATEGORIZED_CONSUMER" if answer == 2 else "AUTONOMOUS"


def exec():
    io.print_arr([
        "Bienvenido a la aplicación!",
        "Ingrese 1 para registrarse",
        "Ingrese 2 para loggearse"
    ])

    option = io.get_option([1, 2])

    if option == 1:
        return rq.post('user', {
            'name': input("Ingrese su nombre completo: "),
            'address': input("Ingrese su dirección: "),
            'document': input("Ingrese su documento: "),
            'IvaCondition': get_iva_condition()
        })

    else:
        return rq.get(f'user/{input("Ingrese su DNI para ingresar: ")}')
