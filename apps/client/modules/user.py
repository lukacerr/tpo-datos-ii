import utils.io as io


def iva_to_readable(c):
    return "Consumidor final" if c == "FINAL_CONSUMER" else "Consumidor no categorizado" if "NON_CATEGORIZED_CONSUMER" else "Monotributista"


def print_user(x):
    io.print_arr([
        f"ID: {x['id']}",
        f"Nombre: {x['name']}",
        f"Dirección: {x['address']}",
        f"Documento: {x['document']}",
        f"Actividad: {x['activity']}",
        f"Condición frente al IVA: {iva_to_readable(x['IvaCondition'])}",
    ])


def exec(user): print_user(user)
