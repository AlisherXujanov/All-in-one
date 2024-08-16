# 5. reduce()      Use a function to reduce an iterable to a single value
#           RU: Используйте функцию для сокращения итерируемого объекта до одного значения
#           EX:
# from functools import reduce
# def myFunc(acc, next):
#     """
#         acc  - accumulator
#         next - next value
#         NOTE: the initial value of the accumulator is the first value of the iterable
#               if not given as last argument
#     """
#     return acc + next
#     # return acc if acc > next else next

# x = reduce(myFunc, (1, 2, 3, 4))
# print(x)  # =>  10

# 1.  acc==1,  next==2   =>   3
# 2.  acc==3,  next==3   =>   6
# 3.  acc==6,  next==4   =>   10

# --------------------------

# def myFunc(acc, next):
#     if acc > next:
#         print("acc > next", acc)
#         return acc
#     else:
#         print("acc > next", next)
#         return next

# arr = [11, 22, 3, 4515, 56]
# res = reduce(myFunc, arr, 0)
# print(res)

# --------------------------
# ==========================================================================
# ==========================================================================
# ==========================================================================
# RU: Создайте функцию, которая принимает
# строку и находит все числа из этой строки
# Результат должен сообщать, сколько у нас четных и нечетных чисел в строке
# -------------------------------------------
# "This is 2nd task for 3rd day of 30 days of JavaScript"
# OUTPUT: "Evens 2, 0 ... Odds: 3, 3"
# -------------------------------------------
# "Это 2-я задача на 3-й день 30 дней JavaScript"
# Результат: "Четные 2, 0 ... Нечетные: 3, 3"


# def get_numbers_from_txt(acc, next):
#     evens = acc[0]
#     odds = acc[1]
#     if next.isnumeric():
#         if int(next) % 2 == 0:
#             evens.append(int(next))
#         else:
#             odds.append(int(next))
#     return [evens, odds]

# string = "Это 2-я задача на 3-й день 30 дней JavaScript"
# r = reduce(get_numbers_from_txt, string, [[], []])
# result = f"Результат: Четные {r[0]} ... Нечетные: {r[1]}"
# print(result)
# ==========================================================================
# ==========================================================================
# ==========================================================================
# Создайте функцию, которая принимает строку и число,
# затем повторяет каждый символ строки number раз
# Security, 2 = > SSeecckkuurriittyy
# Cyber, 3 = > CCCyyybbbeeerrr


# def repeat_letter_n_times(string:str, n:int) -> str:
#     def repeat_n_times(acc, next):
#         return acc + next*n
#     return reduce(repeat_n_times, string, "")

# text = "Cyber"
# times = 3
# result = repeat_letter_n_times(text, times)
# print(result)
# ------------------------------------------------------------------------------
# 6. abs()	        Returns the absolute value of a number
#           RU: Возвращает абсолютное значение числа
#           EX:
# x = -2        # ==   abs(x) == 2
# z = 2         # ==   abs(z) == 2
# c = complex(2)
# print(c)
# x = abs(c)
# print(x)
# ------------------------------------------------------------------------------
# 7. all()	        Returns True if all items in an iterable object are true
#           RU: Возвращает True, если все элементы в итерируемом объекте истинны
#           EX:

# all()  ==  and  ==  &&
# any()  ==  or   ==  ||

# mylist = [True, 'Aziz', "", "Bemiyya"]
# x = all(mylist)  # =>  True
# print("Result", x)
# ------------------------------------------------------------------------------
# 8. any()	        Returns True if any item in an iterable object is true
#           RU: Возвращает True, если любой элемент в итерируемом объекте истинен
#           EX:
# mylist = [True, "", 0]
# x = any(mylist)  # => True
# print(x)
# ------------------------------------------------------------------------------
# 9. ascii()	    Returns a readable version of an object. Replaces none-ascii characters with escape character
#       American Standard Code for Information Interchange
#           RU: Возвращает читаемую версию объекта. Заменяет символы, не являющиеся ASCII-символами, символом экранирования
#               ASCII - американский стандартный код для обмена информацией
# #           EX:
# x = ascii("My name is Ståle")  # => 'My name is St\xe5le'
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
# 15 = 1111
"""
# 10. bin()	        Returns the binary version of a number
#           RU: Возвращает двоичную версию числа
#           EX:
#               x = bin(36)  =>  0b100100
# vice versa is =>  int(0b100100)  =>  36

# To get a binary (10101010) version of letters we can use:
# print(ord('A'))       # =>  65
# print(bin(ord('A')))  # =>  0b1000001

# ------------------------------------------------------------------------------
# 11. bool()	    Returns the boolean value of the specified object
#               Anything that is not empty, or 0, or None is True
#           RU: Возвращает логическое значение указанного объекта
#               Любое значение, которое не является пустым, или 0, или None, является True
#           EX:

#               x = bool(5) => True,     x = bool(0) => False,   ...
# ------------------------------------------------------------------------------
# 12. complex()	    Returns a complex number (x+yj) or converts a string or number to a complex number
#           RU: Возвращает комплексное число (x + yj) или преобразует строку или число в комплексное число
#           EX:
#               x = complex(3, 5)  =>  (3+5j)
# ------------------------------------------------------------------------------
# 13. dict()	    Returns a dictionary (Array)
#           RU: Возвращает словарь (массив)
#           EX:
# x = dict(name = 'John', age = 36, country = 'Norway')
# ------------------------------------------------------------------------------
# 14. dir()	        Returns a list of the specified object's properties and methods
#           RU: Возвращает список свойств и методов указанного объекта
#           EX:
# x = dir(bool)
# print(x)
# [print(z) for z in x]
# ------------------------------------------------------------------------------
# 15. enumerate()	Takes a collection (e.g. a tuple) and returns it as an enumerate object
#           RU: Принимает коллекцию (например, кортеж) и возвращает ее в виде объекта перечисления
#           EX:
# x = ['apple', 'banana', 'cherry']
# for idx, item in enumerate(x):
#     print(idx, item)


# print(list(y))  # =>  [(0, 'apple'), (1, 'banana'), (2, 'cherry')]
# for (index, value) in enumerate(x):
#     print(f'{index} => {value}')

# ------------------------------------------------------------------------------
# 16. float()	    Returns a floating point number
# print(float(2)) # => 2.0
# ------------------------------------------------------------------------------
# 17. help()	    Executes the built-in help system
#           RU: Выполняет встроенную систему справки
#           EX:
# print(help('modules'))
# print(help('print'))
#               ...

# ------------------------------------------------------------------------------
# 18. id()	        Returns the id of an object
#           RU: Возвращает идентификатор объекта
#           EX:
# x = ('apple', 'banana', 'cherry')
# print(id(x))  # =>  140714640543488
# print(id(list))
# ------------------------------------------------------------------------------
# 19. input()	    Allowing user input
# ------------------------------------------------------------------------------
# 20. int()	        Returns an integer number
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
# 22. len()	        Returns the length of an object
# ------------------------------------------------------------------------------
# 23. list()	    Returns a list
# ------------------------------------------------------------------------------
# 24. open()	    Opens a file and returns a file object
# ------------------------------------------------------------------------------
# 25. pow()	        Returns the value of x to the power of y
# pow(3, 4) # 81   ==>   3 ** 4    ==>   3 * 3 * 3 * 3
# 2 ** 2  # 2^2  ==  4
# pow(2, 2)  # 2^2  ==  4
# ------------------------------------------------------------------------------
# 26. print()	    Prints to the standard output device
# ------------------------------------------------------------------------------
# 27. range()	    Returns a sequence of numbers, starting from 0 and increments by 1 (by default)
# ------------------------------------------------------------------------------
# 28. set()	        Returns a new set object
# ------------------------------------------------------------------------------
# 29. str()	        Returns a string object
# ------------------------------------------------------------------------------
# 30. sum()	        Sums the items of an iterator
# ------------------------------------------------------------------------------
# 31. tuple()	    Returns a tuple
# ------------------------------------------------------------------------------
# 32. type()	    Returns the type of an object
# ------------------------------------------------------------------------------
# 33. zip()	        Returns an iterator, from two or more iterators
#           RU: Возвращает итератор из двух или более итераторов
#           EX:
#               x = zip(['apple', 'banana', 'cherry'], ['orange', 'lemon', 'pineapple'])
#               print(next(x))  =>  ('apple', 'orange')
fruits = ['apple', 'banana', 'cherry', 'orange', 'lemon', 'pineapple']
cars = ['BMW', 'Volvo', 'Ford', 'Mazda']
numbers = [1, 2, 3]
z = zip(fruits, cars, numbers)
print(list(z))
# for (fruit, car) in z:
#     print(fruit, car)

# x = [1, 2, 3, 4, 5]
# z = ['a', 'b', 'c']

# for num, letter in zip(x, z):
#     print(num, letter)


#! for more info visit sites:
# * 1. Programmiz  =  https://www.programiz.com/python-programming/methods/built-in
# * 2. w3schools   =  https://www.w3schools.com/python/python_ref_functions.asp
# * 3. python.org  =  https://docs.python.org/3/library/functions.html
