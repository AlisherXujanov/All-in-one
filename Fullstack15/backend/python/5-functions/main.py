def sum_up(a: int, b:list[int]) -> int:
    """This function sums up the first argument with the sum of the second argument

    Args:
        a (int): a number
        b (list[int]): list of numbers

    Returns:
        int: sum of a and sum of b
    """
    return a + sum(b)
# ----------------------------------------------------------
# def func_name(arg1, arg2, arg3):
#     print(arg1, arg2, arg3)
# func_name(1, 2, 3)
# ----------------------------------------------------------
# from typing import Union
# def func_name(arg1:Union[str, int]) -> type:
#     return arg1
# print(func_name(1))
# ----------------------------------------------------------
# default value

# def say_hello(name="World") -> None:
#     print("Hello", name)
 
# say_hello()
# say_hello("John")
# ----------------------------------------------------------
# Lambda
# def test(arg1, arg2):
#     return arg1 + arg2

# func_name = lambda arg1, arg2: arg1 + arg2
# print(func_name(1, 2))


# print("Yes" if ... else "No")

# ----------------------------------------------------------
# def show_message(a, b, *args, **kwargs):
#     # This function needs to be finished in near future!
#     # return NotImplementedError()  =>  не было создано!
#     print(args)
#     print(kwargs)


# show_message(1, 2, 3, 4, 5, third="c", first="a", second="b")
# ----------------------------------------------------------
# ----------------------------------------------------------
# RECURSION
# RULES:  
#      1. Check a condition always before the logic
#      2. Call ITSELF from inside
#      3. Change the argument when it calls itself again

def draw_stars_up(max_lines:int, counter:int=1) -> None:
    if counter > max_lines:
        return
    print("*" * counter)
    return draw_stars_up(max_lines, counter+1)

# draw_stars_up(10)
# ============================================================
# ============================================================
def draw_stars_down(max_lines:int) -> None:
    if 0 == max_lines:
        return
    print("*" * max_lines)
    return draw_stars_down(max_lines-1)

draw_stars_down(10)

