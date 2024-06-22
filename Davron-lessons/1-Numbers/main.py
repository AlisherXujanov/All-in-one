# import math

# integer  = int()       # 1
# float    = float()     # 1.0
# complex  = complex()   # 1j

# math.ceil    => 3.33 => 4
# math.floor() => 3.33 => 3

# x = 2.624132
# print(math.ceil(x))  # 3
# print(math.floor(x))   # 2
# print(round(x, 3))  


# round()      => 3.5  => 4   => is used to round the number by 
#                               deleting the decimal part if it is 
#                               less than 5
#                       2nd param => number of digits after the decimal point
#                       RU: используется для округления числа путем 
#                           удаления десятичной части, если она меньше 5
#                       2-й параметр => количество цифр после десятичной точки
# ----------------------------------------------------------------------
import random
# ----------------------------------------------------------------------
# random.randrange(.., ..?) # gives random number between start and end numbers
#            RU: дает случайное число между начальным и конечным числами
# ex:  random.randrange(0, 10, step=2)  # 0, 2, 4, 6, 8
# print(random.randrange(10))     # 0-10   ->  random-number
# print(random.randrange(10, 100))  # 10-20   ->  random-number
# print(random.randrange(10, 30, 5))  # 10-30   ->  random-number
# ----------------------------------------------------------------------
# random.randint(.., ..)   # gives random number between start and end numbers
#            RU: дает случайное число между начальным и конечным числами
# ex: random.randint(0, 10)  # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
# print("randint:",   random.randint(10, 15))  # 10-20   ->  random-number
# print("randrange:", random.randrange(10, 15))  # 10-20   ->  random-number
# ----------------------------------------------------------------------
# random.random()    # gives random float number between 0 and 1
#            RU: дает случайное число с плавающей запятой между 0 и 1
# ex: round(random.random() * 100, 5)
# random.random()   =>  0.0 - 1.0
# print(random.random())
# ----------------------------------------------------------------------
# FIND PERCENTAGE
# (60 / 100) * 17  # 10.2
# 60 * 0.17        # 10.2
# ------------------
# 500.000  sum
# 25%      скидка   |  125.000 sum
# 500 - 125 = 375.000 sum
# ----------------------------------------------------------------------

# +	    Addition	    x + y	
# -	    Subtraction	    x - y	
# *	    Multiplication	x * y	
# /	    Division	    x / y	   
# %	    Modulus	        x % y	   =>    10 % 3  =>  1
# **	Exponentiation	x ** y	   =>    2 * 2 * 2 * 2   =   2**4   => 16
# #! //	Floor division	x // y     =>    x // 2   => 3.5 => 3
# print("/", 9/2)
# print("//", 9 // 2)  # 4.5 => 4

#! -------------------------------------------------

# =	    x = 5	 x = 5	  
# -------------
# +=	x += 3	 x = x + 3
# x = 5
# x += 5
# print(x)
# -------------
# -=	x -= 3	 x = x - 3	
# -------------
# *=	x *= 3	 x = x * 3	
# -------------
# /=	x /= 3	 x = x / 3
# -------------
# %=	x %= 3	 x = x % 3
# -------------
# **=	x **= 3	 x = x ** 3
# -------------
#! //=	 x //= 3	 x = x // 3
# -------------
# ----------------------------------------------------------------------
# x = 5

# ==	Equal	        x == y	  =>  Равно
# print(x == 5) # True
# print(x == 6)  # False
# print(x == 20%15) # True
# ------------------------
# !=	Not equal	    x != y	  =>  Не равно
# print(5 != 6)  # True
# print(x != 105%100) # False
# ------------------------
# >	    Greater than	x > y	  =>  Больше
# ------------------------
# <	    Less than	    x < y	  =>  Меньше
# ------------------------
# >=	Greater than or equal to	x >= y	  =>  Больше или равно
# ------------------------
# <=	Less than or equal to	    x <= y    =>  Меньше или равно
# ----------------------------------------------------------------------

# and 	Returns True if both statements are true	    x < 5 and  x < 10	
#     RU: Возвращает True, если оба выражения истинны
# or	Returns True if one of the statements is true	x < 5 or x < 4	
#     RU: Возвращает True, если одно из выражений истинно
# not	Reverse the result, returns False if the result is true	not(x < 5 and x < 10
#     RU: Инвертирует результат, возвращает False, если результат истинен

# x = 5
# print(x == 5 and x == 2**2)  # False
# print(x == 5 or x == 2**2) # True 


# x = []
# print("Result: ", x == [])  # True
# print("Result: ", x is [])  # False

# print("Result: ", x != [])  # False
# print("Result: ", x is not [])  # True

# print(id(x))
# print(id([]))

# ----------------------------------------------------------------------

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

# z = "Hello"	
# print("i" in z)      # False
# print("i" not in z)  # True

 
# not in	Returns True if a sequence with the specified value is 
#           not present in the object
#       RU: Возвращает True, если последовательность с указанным значением
#           отсутствует в объекте
# ex:    x not in y


# ----------------------------------------------------------------------
#!     *args  => is used receive an arbitrary number of arguments
#  RU: используется для получения произвольного количества аргументов

# DRY  ->  Don't Repeat Yourself

# def sum(*args) -> int:
#     # This function returns sum of two numbers
#     # RU: Эта функция возвращает сумму двух чисел
#     result = 0
#     for num in args:
#         result += num
#     return result

# print(sum(1, 2, 3, 4, 5))


# def blender(fruit):
#     for letter in fruit:
#         print(letter)

# blender("apple")


# def del_index(text:str, index:int):
#     first = text[:index]
#     last = text[index+1:]
#     print(first+last)
# del_index("Hello", 2)  # "Helo"
# del_index("Davron", 1)  # "Dvron"
# del_index("School", 4)  # "Schol"


# SLICE  ->  Часть
# SYNTAX   "..."[start-index:end-index:step]
# DEFAULT  "..."[0:len("..."):1]


# print("Hello world"[3])  # l
# print("Hello world"[0:4])  # Hell
# print("Hello world"[:])  # "Hello world"
# print("Hello world"[::2])  # "Hlowrd"
# print("Hello world"[::-1])  # "dlrow olleH"
# ----------------------------------------------------------------------

# "Hello world"