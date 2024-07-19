# NUMBERS
# ======================================================================
# import math
# x = 3.3
# print(math.ceil(x))   # 4
# print(math.floor(x))  # 3
# print(round(x))       # 3
# print(round(3.545123, 2))   # 3.55

# math.ceil    => 3.33 => 4
# math.floor() => 3.33 => 3
# round()      => 3.5  => 4   => is used to round the number by
#                               deleting the decimal part if it is
#                               less than 5
#                       2nd param => number of digits after the decimal point
#                       RU: используется для округления числа путем
#                           удаления десятичной части, если она меньше 5
#                       2-й параметр => количество цифр после десятичной точки
# ======================================================================
# ----------------------------------------------------------------------
import random
# ----------------------------------------------------------------------
# random.randrange(.., ..?) # gives random number between start and end numbers
#            RU: дает случайное число между начальным и конечным числами
# ex:  random.randrange(0, 10, step=2)  # 0, 2, 4, 6, 8
# print(random.randrange(100))     # 0 - 99
# print(random.randrange(1, 101))  # 1 - 100
# print(random.randrange(1, 101, 2))  # 1 - 100, кажное второе число
# print(random.randrange(1, 101, 5))  # 1 - 100, кажное пятое число
# ----------------------------------------------------------------------
# random.randint(.., ..)   # gives random number between start and end numbers
#            RU: дает случайное число между начальным и конечным числами
# ex: random.randint(0, 10)  # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
# print(random.randint(1, 10))  # 1 - 10
# ----------------------------------------------------------------------
# random.random()    # gives random float number between 0 and 1
#            RU: дает случайное число с плавающей запятой между 0 и 1
# ex: round(random.random() * 100, 5)
# print(random.random())    0-1     ex: 0.123456789
# ----------------------------------------------------------------------
# random.choice([.., .., ..])  # gives random element from the list
# l = [1, 2, 3, 4, 5]
# print(random.choice(l))  # 1, 2, 3, 4, 5
# ----------------------------------------------------------------------
# random.shuffle([.., .., ..])  # mixes the list
#                               # changes the original list in place
#         RU: перемешивает список
#             изменяет исходный список на месте
# l = [1, 2, 3, 4, 5]
# random.shuffle(l)
# print(l)  # [3, 1, 5, 2, 4]
# ----------------------------------------------------------------------
# int()       # 1
# float()     # 1.0
# complex()   # 1j
# ----------------------------------------------------------------------

# FIND PERCENTAGE
# (60 / 100) * 17  # 10.2
# 60 * 0.17        # 10.2

# ----------------------------------------------------------------------
# +	    Addition	    x + y
# RULES:
# CAN NOT ADD two different data-types
# CAN ONLY ADD two same data-types
# --------------
# -	    Subtraction	    x - y
# --------------
# *	    Multiplication	x * y
# 2 * 2         => 4
# "Farzod" * 2  => "FarzodFarzod"
# --------------
# /	    Division	    x / y
# --------------
# %	    Modulus	        x % y	   =>    10 % 3  =>  1
# --------------
# **	Exponentiation	x ** y	   =>    2 * 2 * 2 * 2   =   2**4   => 16
# math.pow(2, 4)  => 16
# --------------
#! //	Floor division	x // y     =>    x // 2   => 3.5 => 3
#! -------------------------------------------------
#! -------------------------------------------------
# x = 11
# x %= 4
# print(x)


# =	    x = 5	 x = 5
# +=	x += 3	 x = x + 3
# -=	x -= 3	 x = x - 3
# *=	x *= 3	 x = x * 3
# /=	x /= 3	 x = x / 3
# %=	x %= 3	 x = x % 3
# **=	x **= 3	 x = x ** 3
#! //=	 x //= 3	 x = x // 3

#! -------------------------------------------------
# ----------------------------------------------------------------------
# x = 5
# print(x == 3)  # False
# print(x == 15 % 10)  # True
# print(x-1 == (x-1)//2)  # True
# print(x-1 != (x-1)) # False
# print(x != 101%97) # True

# ==	Equal	        x == y	  =>  Равно
# !=	Not equal	    x != y	  =>  Не равно
# >	    Greater than	x > y	  =>  Больше
# <	    Less than	    x < y	  =>  Меньше
# >=	Greater than or equal to	x >= y	  =>  Больше или равно
# <=	Less than or equal to	    x <= y    =>  Меньше или равно
# ----------------------------------------------------------------------
# ----------------------------------------------------------------------

# x = 5

# print(x == 5 and x < 10 and x == 2+3)  # True
# print(x == 5 and x < 10 and x == 2+2)  # False

# print(x != 5 or x > 10 or x == 2+3)  # True
# print(x != 5 or x > 10 or x == 2+2)  # False

# print(not True  == True)  # False
# print(not False == True)  # True

# and 	Returns True if both statements are true	    x < 5 and  x < 10
#     RU: Возвращает True, если оба выражения истинны
# or	Returns True if one of the statements is true	x < 5 or x < 4
#     RU: Возвращает True, если одно из выражений истинно
# not	Reverse the result, returns False if the result is true	not(x < 5 and x < 10
#     RU: Инвертирует результат, возвращает False, если результат истинен

# ----------------------------------------------------------------------
# There are two types of variables in Python:
# Primitive and Non-Primitive
# Primitive -> int, float, bool, str
# Non-Primitive -> list, tuple, dict, set

# a = 2
# print(a == 2)
# print(a is 2)

# x = [1, 2, 3]
# print(x == [1, 2, 3])  # True
# print(x is [1, 2, 3])  # False

# ----------------------------------------------------------------------
# x = [1, 2, 3]
# print(x == [1, 2, 3])  # True
# print(x is [1, 2, 3])  # False

# print(id(x))
# print(id([1, 2, 3]))

# is 	    Returns True if both variables are the same object
#       RU: Возвращает True, если обе переменные являются одним и тем же объектом
# ex:   x is y

# is not	Returns True if both variables are not the same object
# ex:   x is not y
#       RU: Возвращает True, если обе переменные не являются одним и тем же объектом

# ----------------------------------------------------------------------

# in 	    Returns True if a sequence with the specified value is
#           present in the object
#       RU: Возвращает True, если последовательность с указанным значением
#           присутствует в объекте
# ex:    x in y

# x = [1, 2, 3]
# print(1 in x)  # True
# print(5 in x)  # False
# print('a' in 'auioe')  # True
# print('b' in 'auioe')  # False
# print('b' not in 'auioe')  # True

# not in	Returns True if a sequence with the specified value is
#           not present in the object
#       RU: Возвращает True, если последовательность с указанным значением
#           отсутствует в объекте
# ex:    x not in y


# ----------------------------------------------------------------------
#!     *args  => is used receive an arbitrary number of arguments
#  RU: используется для получения произвольного количества аргументов

def sum(a, *args) -> int:
    # a == 1
    # args == [2,3,4,5]
    # This function returns sum of two numbers
    # RU: Эта функция возвращает сумму двух чисел
    result = a
    for num in args:
        result += num
    return result

# print(sum(1, 2, 3, 4, 5))
# ----------------------------------------------------------------------
# PRIME NUMBERS
# num = 18

# if num == 1 or num == 2 or num == 3 or num == 5 or num == 7:
#     print("PRIME")
# elif num % 2 == 0 or num % 3 == 0 or num % 5 == 0 or num % 7 == 0:
#     print("NOT PRIME")
# else:
#     print("PRIME")


