import modules.login as loginModule
import modules.user as userModule
import modules.product as productModule
import modules.cart as cartModule
import modules.order as orderModule

import utils.io as io
from utils.runtime import *


user = loginModule.exec()
if (not user):
    end_execution("No se encontró un usuario. Terminando ejecución...")


def restart_main():
    io.spacing()
    io.print_arr([
        "Ingrese 1 si quiere realizar acciones con productos",
        "Ingrese 2 si quiere realizar acciones con el carrito",
        "Ingrese 3 si quiere realizar acciones con la orden de compra",
        "Ingrese 4 si quiere ver la información de usuario",
        "Ingrese 0 para terminar la ejecución"
    ])

    return io.get_option([1, 2, 3, 4, 0])


option = restart_main()
while option in [1, 2, 3, 4]:
    io.simple_space()

    match option:
        case 1: productModule.exec(user)
        case 2: cartModule.exec(user)
        case 3: orderModule.exec(user)
        case 4: userModule.exec(user)

    io.simple_space()
    io.pause()
    option = restart_main()


end_execution("Terminando ejecución...")
