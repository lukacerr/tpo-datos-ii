import utils.io as io
import utils.request as rq


def print_product(x):
    io.print_arr([
        f"ID: {x['_id']}",
        f"Título: {x['title']}",
        f"Precio: ${x['price']}",
        f"Descripción: {x['description']}",
        f"Multimedia: {', '.join(x['multimedia'])}",
    ])


def create_product():
    print_product(rq.post("product", {
        'title': input("Ingrese el titulo del producto: "),
        'price': int(input("Ingrese el precio del producto: ")),
        'description': input("Ingrese la descripción del producto: "),
        'multimedia': input("Ingrese links (separado por comma) para multimedia: ").split(', ')
    }))


def add_to_cart(user):
    res = rq.post('cart', {
        'userId': user['id'],
        'productId': input("Ingrese el ID del producto: "),
        'quantity': int(input("Ingrese cantidad: "))
    })
    print(f"Producto añadido. Actual cantidad: {res}")


def update_product():
    pId = input("Ingrese el id del producto a modificar: ")
    print_product(rq.get(f'product/{pId}'))

    updated = {
        '_id': pId,
        'title': input("Ingrese el nuevo titulo del producto: "),
        'price': int(input("Ingrese el nuevo precio del producto: ")),
        'description': input("Ingrese la nueva descripción del producto: "),
        'multimedia': input("Ingrese links de la multimedia del producto (separados por coma): ").split(', ')
    }

    rq.put(f'product/{pId}', updated)
    print("PRODUCTO ACTUALIZADO:")
    print_product(updated)


def show_products():
    print(f"LISTA DE PRODUCTOS: \n")
    productos = rq.get('product')
    for prod in productos:
        io.simple_space()
        print_product(prod)


def exec(user):
    io.print_arr([
        "Bienvenido al asistente de productos, por favor, elija una opción a continuación:",
        "Ingrese 1 si desea crear un producto",
        "Ingrese 2 si desea agregar un producto al carrito",
        "Ingrese 3 si desea modificar un producto",
        "Ingrese 4 para mostrar la lista de productos",
        "Ingrese 0 para regresar al menú principal"
    ])

    match io.get_option([1, 2, 3, 4, 0]):
        case 1: create_product()
        case 2: add_to_cart(user)
        case 3: update_product()
        case 4: show_products()
