import utils.io as io
import utils.request as rq

from functools import reduce


def print_product(total):
    x = total['product']
    io.print_arr([
        f"Cantidad: {total['quantity']}",
        f"ID: {x['_id']}",
        f"Título: {x['title']}",
        f"Precio: ${x['price']}",
    ])


def show_cart(user):
    print(f"CARRITO de '{user['name']}': \n")
    res = rq.get(f"cart/{user['id']}")
    totalPrice = reduce(
        lambda a, b: a+b, map(lambda x: x['product']['price'] * x['quantity'], res))
    print(f"PRECIO TOTAL: ${totalPrice}")
    for x in res:
        io.simple_space()
        print_product(x)


def delete_product(user):
    rq.delete('cart', {
        "userId": user['id'],
        "productId": input("Ingrese el id del producto a quitar: ")
    })

    print("Producto eliminado con éxito")


def exec(user):
    io.print_arr([
        "Bienvenido al asistente de carrito, por favor, elija una opción a continuación:",
        "Ingrese 1 para mostrar el carrito",
        "Ingrese 2 para eliminar producto del carrito",
        "Ingrese 0 para regresar al menú principal"
    ])

    match io.get_option([1, 2, 0]):
        case 1: show_cart(user)
        case 2: delete_product(user)
