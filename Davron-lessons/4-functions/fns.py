# def sum_up(num1:int, num2:int) -> int:
#     """This function takes two numbers and returns their sum"""
#     return num1 + num2
# sum_up(5, 6)  # 11
# ====================================================
# ====================================================
# LAMBDA

# sum_up = lambda num1, num2: num1 + num2
# print(sum_up(5, 6))  # 11
# ====================================================
# ====================================================
# RECURSIONS
# *
# * *
# * * *
# * * * *
# * * * * *
# * * * * * *
def draw_stars(lines: int, counter: int = 1) -> None:
    # WITH LOOP
    # for i in range(lines):
    #     print("*" * i)
    # ----------------------
    # WITH RECURSION
    # print("*" * counter)
    # if counter == lines:
    #     return
    # return draw_stars(lines, counter + 1)
    # ----------------------
    if lines == 0:
        return
    print("*" * lines)
    return draw_stars(lines - 1)

# draw_stars(10)
# ====================================================
# ====================================================
# ====================================================
# FACTORIAL
# !5    =>  1*2*3*4*5 = 120
# !10   =>  1 *...*10 = 3628800

# def factorial(num: int) -> int:
#     if num == 0:
#         return 1
#     return num * factorial(num-1)

# # 5 * 4 * 3 * 2 * 1 * 1
# r1 = factorial(5)  # 120
# r2 = factorial(10)  # 3628800
# print(r1, r2)

# ====================================================
# ====================================================
# ====================================================
# FIBONACCI
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...
def fibonacci(num: int) -> int:
    """
    This function takes a number and returns 
    the fibonacci sequence up to that number
    """
fibonacci(20) # 0, 1, 1, 2, 3, 5, 8, 13
# ----------------------------------------
# 2-nd VERSION
def n_fibonacci(in_total:int) -> None:
    """
    This function takes a number and returns
    the fibonacci sequence up to that number
    """
n_fibonacci(20) # 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 
# 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181


