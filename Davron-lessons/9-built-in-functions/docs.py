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
# * 0 - 0
# * 1 - 1
# * 2 - 10
# * 3 - 11
# * 4 - 100
# * 5 - 101
# * 6 - 110
# * 7 - 111
# * 8 - 1000
# * 9 - 1001
# * 10 - 1010 
# * 11 - 1011
# * 12 - 1100
# * 13 - 1101
# * 14 - 1110
# * 15 - 1111
# * 16 - 10000
# * 17 - 10001
# * 18 - 10010
# * 19 - 10011
# * 20 - 10100
# * 21 - 10101
# * 22 - 10110
# * 23 - 10111
# * 24 - 11000
# * 25 - 11001
# * 26 - 11010
# * 27 - 11011
# * 28 - 11100
# * 29 - 11101
# * 30 - 11110
# * 31 - 11111
# * 32 - 100000
# * 33 - 100001
# * 34 - 100010
# * 35 - 100011
# * 36 - 100100
# * 37 - 100101
# * 38 - 100110
# * 39 - 100111
# * 40 - 101000
# * 41 - 101001
# * 42 - 101010
# * 43 - 101011
# * 44 - 101100
# * 45 - 101101
# * 46 - 101110
# * 47 - 101111
# * 48 - 110000
# * 49 - 110001
# * 50 - 110010
# * 51 - 110011
# * 52 - 110100
# * 53 - 110101
# * 54 - 110110
# * 55 - 110111
# * 56 - 111000
# * 57 - 111001
# * 58 - 111010
# * 59 - 111011
# * 60 - 111100
# * 61 - 111101
# * 62 - 111110
# * 63 - 111111
# * 64 - 1000000
# * 65 - 1000001
# * 66 - 1000010
# * 67 - 1000011
# * 68 - 1000100
# * 69 - 1000101
# * 70 - 1000110
# * 71 - 1000111
# * 72 - 1001000
# * 73 - 1001001
# * 74 - 1001010
# * 75 - 1001011
# * 76 - 1001100
# * 77 - 1001101
# * 78 - 1001110
# * 79 - 1001111
# * 80 - 1010000
# * 81 - 1010001
# * 82 - 1010010
# * 83 - 1010011
# * 84 - 1010100
# * 85 - 1010101
# * 86 - 1010110
# * 87 - 1010111
# * 88 - 1011000
# * 89 - 1011001
# * 90 - 1011010
# * 91 - 1011011
# * 92 - 1011100
# * 93 - 1011101
# * 94 - 1011110
# * 95 - 1011111
# * 96 - 1100000
# * 97 - 1100001
# * 98 - 1100010
# * 99 - 1100011
# * 100 - 1100100
# * 101 - 1100101
# * 102 - 1100110
# * 103 - 1100111
# * 104 - 1101000
# * 105 - 1101001
# * 106 - 1101010
# * 107 - 1101011
# * 108 - 1101100
# * 109 - 1101101
# * 110 - 1101110
# * 111 - 1101111
# * 112 - 1110000
# * 113 - 1110001
# * 114 - 1110010
# * 115 - 1110011
# * 116 - 1110100
# * 117 - 1110101
# * 118 - 1110110
# * 119 - 1110111
# * 120 - 1111000
# * 121 - 1111001
# * 122 - 1111010
# * 123 - 1111011
# * 124 - 1111100
# * 125 - 1111101
# * 126 - 1111110
# * 127 - 1111111
# * 128 - 10000000
# * 129 - 10000001  
# * 130 - 10000010  
# * 131 - 10000011  
# * 132 - 10000100  
# * 133 - 10000101  
# * 134 - 10000110  
# * 135 - 10000111  
# * 136 - 10001000  
# * 137 - 10001001  
# * 138 - 10001010  
# * 139 - 10001011  
# * 140 - 10001100  
# * 141 - 10001101  
# * 142 - 10001110  
# * 143 - 10001111  
# * 144 - 10010000  
# * 145 - 10010001  
# * 146 - 10010010  
# * 147 - 10010011  
# * 148 - 10010100  
# * 149 - 10010101  
# * 150 - 10010110  
# * 151 - 10010111  
# * 152 - 10011000  
# * 153 - 10011001  
# * 154 - 10011010  
# * 155 - 10011011  
# * 156 - 10011100  
# * 157 - 10011101  
# * 158 - 10011110  
# * 159 - 10011111  
# * 160 - 10100000  
# * 161 - 10100001  
# * 162 - 10100010  
# * 163 - 10100011  
# * 164 - 10100100  
# * 165 - 10100101  
# * 166 - 10100110  
# * 167 - 10100111  
# * 168 - 10101000  
# * 169 - 10101001  
# * 170 - 10101010  
# * 171 - 10101011  
# * 172 - 10101100  
# * 173 - 10101101  
# * 174 - 10101110  
# * 175 - 10101111  
# * 176 - 10110000  
# * 177 - 10110001  
# * 178 - 10110010  
# * 179 - 10110011  
# * 180 - 10110100  
# * 181 - 10110101  
# * 182 - 10110110  
# * 183 - 10110111  
# * 184 - 10111000  
# * 185 - 10111001  
# * 186 - 10111010  
# * 187 - 10111011  
# * 188 - 10111100  
# * 189 - 10111101  
# * 190 - 10111110  
# * 191 - 10111111  
# * 192 - 11000000  
# * 193 - 11000001  
# * 194 - 11000010  
# * 195 - 11000011  
# * 196 - 11000100  
# * 197 - 11000101  
# * 198 - 11000110  
# * 199 - 11000111  
# * 200 - 11001000
"""
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
