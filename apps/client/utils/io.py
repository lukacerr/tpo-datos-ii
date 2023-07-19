def jsarr_tostr(v): str(v).strip("}{[]").replace("_", '').split("},{")


def print_arr(arr, separator=" \n"): print(separator.join(arr))


def simple_space(): spacing(start_space=1, custom_spacer='')


def spacing(start_space=2, end_space=0, custom_spacer="-------------------------"):
    start = '\n' * start_space
    end = '\n' * end_space
    print(f"{start}{custom_spacer}{end}")


def pause(text="Presione una tecla para continuar..."): return input(text)


def get_option(valid_options, custom_text='Ingrese un valor válido: '):
    option = int(input(custom_text))
    while option not in valid_options:
        option = get_option(valid_options)
    return option
