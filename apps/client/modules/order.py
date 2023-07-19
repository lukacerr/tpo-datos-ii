import utils.io as io
import utils.request as rq


def input_payment_method():
    io.print_arr([
        "1 = Cash",
        "2 = Crédito",
        "3 = Débito",
        "4 = Transferencia"
    ])

    return ['Cash', 'Credit card', 'Debit card', 'Transfer'][io.get_option([1, 2, 3, 4], "Ingrese método de pago: ")-1]


def get_readable_products(p): return ", ".join(
    map(lambda x: f"{x['id']} (x{x['quantity']})", p))


def print_order(x):
    io.print_arr([
        f"ID de orden: {x['_id']}",
        f"ID de productos: {get_readable_products(x['products'])}",
        f"Precio total: ${x['totalPrice']}",
        f"Facturación: {x['billing']}",
    ])


def generate_order(user):
    print_order(rq.post(f"order", user))


def pay_order(user):
    rq.put('order', {
        'orderId': input("Ingrese el ID de la orden: "),
        'method': input_payment_method()
    })

    print("Orden pagada.")


def show_orders(user):
    print(f"LISTA DE ORDENES de '{user['name']}': \n")
    ordenes = rq.get(f"order/{user['id']}")
    for order in ordenes:
        io.simple_space()
        print_order(order)


def exec(user):
    io.print_arr([
        "Bienvenido al asistente de orden de compra, por favor, elija una opción a continuación:",
        "Ingrese 1 para crear la orden de compra con el carrito actual",
        "Ingrese 2 para pagar una orden de compra",
        "Ingrese 3 para mostrar una lista de las ordenes de compra",
        "Ingrese 0 para regresar al menú principal"
    ])

    match io.get_option([1, 2, 3, 0]):
        case 1: generate_order(user)
        case 2: pay_order(user)
        case 3: show_orders(user)
