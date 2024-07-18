# 1. max()
# Return the largest item in an iterable or the largest of two or more arguments.
# RU: Возвращает наибольший элемент в итерируемом объекте или наибольший из двух или более аргументов.

# If one item is given, it should be iterable. The largest item in the iterable is returned.
# RU: Возвращает наибольший элемент в итерируемом объекте или наибольший из двух или более аргументов.
# max(iterable, *[, key, default])

# If two or more positional arguments are provided, the largest of the positional arguments is returned.
# RU: Если предоставлено два или более позиционных аргумента, возвращается наибольший из позиционных аргументов.
# max(arg1, arg2, *args[, key])


# words = ['apple', 'banana', 'cherry']
# # words = [5, 6, 5]   =>  6
# print(max(words, key=len))

# There are two optional keyword-only arguments.
# RU: Есть два необязательных аргумента только ключевых слов.

# key- key function where the iterables are passed and comparison is performed based on its return value
# RU: key- ключевая функция, в которой передаются итерируемые объекты,
# и сравнение выполняется на основе возвращаемого значения
# EX:
#   iterable = ['geeks', 'code', 'python', 'java']
#   max(iterable, key=len)  =>  'python'
# iterable = [30, 15, 20, 25, 30]   #  =>  [0, 0, 5, 10, 0]
# def keyFunc(x):
#     return x % 15

# print(max(iterable, key=lambda x: x==15))  # => 25
#   => here the remainder after dividing each element by
#      15 is calculated and the maximum of those values is returned
#      ex:  10%15 = 10,  15%15 = 0,  20%15 = 5,  25%15 = 10,  30%15 = 0

# The default argument specifies an object to return if the provided iterable is empty.
# If the iterable is empty and the default is not provided, a ValueErrors raised.
# EX:
# iterable = []
# print(max(iterable, default=100))  # =>  100
# max(iterable) # =>  ValueError: max() arg is an empty sequence
# ==================================
# 2. min()         Works the same way as max(), but returns the smallest value

# ===========================================================================================
# range, str, list, tuple
# ------------------------
# 3. map()         Returns a map object (which is an iterator) of the results after applying the
#               given function to each item of a given iterable (list, tuple etc.)
#           RU: Возвращает объект отображения (который является итератором) результатов после применения
#               заданной функции к каждому элементу заданного итерируемого объекта (список, кортеж и т. Д.)
#           EX:
# -----------------
# def wordCount(n):
#     return len(n)
# Or we could use:
# -----------------
# wordCount = lambda n: len(n)
# -----------------
# x = map(len, ('apple', 'banana', 'cherry'))
# print(list(x)) # => [5, 6, 6]

# def get_vowels(fruits) -> str:
#     return ''.join([i for i in fruits if i in 'aeiou'])
#     # 'ae' ...

# fruits = ['apple', 'banana', 'cherry', 'berry', 'orange']
# vowels = map(get_vowels, fruits)
# print(list(vowels))

# ------------------------------------------------------------------------------
# 4. filter()      Use a filter function to exclude items in an iterable object
#           RU: Используйте функцию фильтра, чтобы исключить элементы в итерируемом объекте
#           EX:
# def myFunc(n):
#     # if n > 18:
#     #     return True
#     # else:
#     #     return False
#     # -------------------
#     # return True if n > 18 else False
#     # -------------------
#     return n > 18

# x = filter(myFunc, (5, 7, 18, 25, 32))
# print(list(x)) # =>  [25, 32]
# NOTE: The callback function should return True/False 
# depending on the value in the iterable
# RU: Функция обратного вызова должна возвращать True / False 
# в зависимости от значения в итерируемом объекте
# ------------------------------------------------------------------------------
# 5. reduce()      Use a function to reduce an iterable to a single value
#           RU: Используйте функцию для сокращения итерируемого объекта до одного значения
#           EX:
from functools import reduce
# def myFunc(acc, next):
#     """
#         acc  - accumulator
#         next - next value
#         NOTE: the initial value of the accumulator is the first value of the iterable
#               if not given as last argument
#     """
    # return acc + next
    # acc == 1,   next == 2   ====>>>>  1+2   =>  3
    # acc == 3,   next == 3   ====>>>>  1+2   =>  6
    # acc == 6,   next == 4   ====>>>>  1+2   =>  10
    # ---------------------------------
    # return acc if acc > next else next

# x = reduce(myFunc, (1, 2, 3, 4))
# print(x)  # =>  10
# --------------------------------------
# x = reduce(myFunc, (1, 2, 3, 4), 50)
# print(x)  # =>  60


# ===================================================================
# ===================================================================
# GET ONLY VOWELS FROM INSIDE OF TEXT
# text = 'Hello, my name is Davron. I am a software engineer'

# def get_vowel(acc, next) -> str:
#     if next.lower() in 'aeiou':
#         return acc + next
#     else:
#         return acc

# r = reduce(get_vowel, text, '')
# print(r)  # =>  'eoaeiaoaaoaeeiee'
# ===================================================================
# ===================================================================

# def myFunc(current, next):
#     if current > next:
#         return current
#     else:
#         return next
        
# arr = [11, 22, 3, 4515, 56]
# res = reduce(myFunc, arr)
# print(res)

# ------------------------------------------------------------------------------
# 6. abs()	        Returns the absolute value of a number
#           RU: Возвращает абсолютное значение числа
#           EX:
#               x = -2   ==   abs(x) == 2
#               z = 2    ==   abs(z) == 2
#               c = complex(2)
#               print(c)
#               x = abs(c)
#               print(x)
# ------------------------------------------------------------------------------
# 7. all()	        Returns True if all items in an iterable object are true
#           RU: Возвращает True, если все элементы в итерируемом объекте истинны
#           EX:

# all()  ==  and  ==  &&
# any()  ==  or   ==  ||

# mylist = [True, 'Aziz', True, "Bemiyya"]
# x = all(mylist)  # =>  True
# print("Result", x)
# ------------------------------------------------------------------------------
# 8. any()	        Returns True if any item in an iterable object is true
#           RU: Возвращает True, если любой элемент в итерируемом объекте истинен
#           EX:
# mylist = [False, False, True]
# x = any(mylist)  # => True
# print(x)
# ------------------------------------------------------------------------------
"""
# 0 = 0
# 1 = 1
# 2 = 10
# 3 = 11
# 4 = 100
# 5 = 101
# 6 = 110
# 7 = 111
# 8 = 1000
# 9 = 1001
# 10 = 1010
# 11 = 1011
# 12 = 1100
# 13 = 1101
# 14 = 1110
# 15 = 10000

TODO: upto 200
"""
# ------------------------------------------------------------------------------
# 14. dir()	        Returns a list of the specified object's properties and methods
#           RU: Возвращает список свойств и методов указанного объекта
#           EX:
# x = dir(bool)
# print(x)
# [print(z) for z in x]
# ------------------------------------------------------------------------------
# 17. help()	    Executes the built-in help system
#           RU: Выполняет встроенную систему справки
#           EX:
#               print(help('modules'))
#               print(help('print'))
#               ...

# ------------------------------------------------------------------------------
# 18. id()	        Returns the id of an object
#           RU: Возвращает идентификатор объекта
#           EX:
# x = ('apple', 'banana', 'cherry')
# print(id(x))  # =>  140714640543488
# print(id(list))
# ------------------------------------------------------------------------------
# 21. isinstance()	Returns True if a specified object is an instance of a specified object
#           RU: Возвращает True, если указанный объект является экземпляром указанного объекта
#           EX:
#               print(isinstance(5, int))  # True
#               print(isinstance(5, str))  # False
#               print(type(5) == int)  # True
#               print(type(5) == str)  # False
# is almost similar as type(...)
# RU: почти похоже как type (...)
# ------------------------------------------------------------------------------
# 25. pow()	        Returns the value of x to the power of y
# pow(3, 4) # 81   ==>   3 ** 4    ==>   3 * 3 * 3 * 3
# 2 ** 2  # 2^2  ==  4
# pow(2, 2)  # 2^2  ==  4
# ------------------------------------------------------------------------------
# 28. set()	        Returns a new set object
# ------------------------------------------------------------------------------

#! for more info visit sites:
# * 1. Programmiz  =  https://www.programiz.com/python-programming/methods/built-in
# * 2. w3schools   =  https://www.w3schools.com/python/python_ref_functions.asp
# * 3. python.org  =  https://docs.python.org/3/library/functions.html
