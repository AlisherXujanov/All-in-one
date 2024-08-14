# r = max([1, 2, 3, 4, 5])  # => 5
# print(r)


# words = ['apple', 'banana', 'cherryyyyy', 'orange..', 'kiwi', 'melon', 'mango']
#       [5,        6,        10,           6,        4,      5,      5]
# -----------------------------------------
# r = max(words, key=len) # => 'cherryyyyy'
# print(r)
# -----------------------------------------
# vowels_counts = [2,  3,  1,  3,  2,  2,  2]
# def count_vowels(word:str) -> int:
#     return len([l for l in word if l.lower() in 'aeiou'])

# r = max(words, key=count_vowels)
# print(r)
# -----------------------------------------
# def count_vowels_and_get_longest(word: str) -> int:
#     return len([l for l in word if l.lower() in 'aeiou'])


# r = max(words,  key=count_vowels_and_get_longest)
# print(r)
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# -----------------------------------------
# 1. max()
# Return the largest item in an iterable or the largest of two or more arguments.
# RU: Возвращает наибольший элемент в итерируемом объекте или наибольший из двух или более аргументов.

# If one item is given, it should be iterable. The largest item in the iterable is returned.
# RU: Возвращает наибольший элемент в итерируемом объекте или наибольший из двух или более аргументов.
# max(iterable, *[, key, default])

# If two or more positional arguments are provided, the largest of the positional arguments is returned.
# RU: Если предоставлено два или более позиционных аргумента, возвращается наибольший из позиционных аргументов.
# max(arg1, arg2, *args[, key])

# There are two optional keyword-only arguments.
# RU: Есть два необязательных аргумента только ключевых слов.

# key- key function where the iterables are passed and comparison is performed based on its return value
# RU: key- ключевая функция, в которой передаются итерируемые объекты,
# и сравнение выполняется на основе возвращаемого значения
# EX:
#   iterable = ['geeks', 'code', 'python', 'java']
#   max(iterable, key=len)  =>  'python'
# iterable = [30, 15, 20, 25, 30]
# print(max(iterable, key=lambda x: x%15))  # => 25
#   => here the remainder after dividing each element by
#      15 is calculated and the maximum of those values is returned
#      ex:  10%15 = 10,  15%15 = 0,  20%15 = 5,  25%15 = 10,  30%15 = 0

# The default argument specifies an object to return if the provided iterable is empty.
# If the iterable is empty and the default is not provided, a ValueErrors raised.
# EX:
# iterable = []
# max(iterable, default=100)  # =>  100
# max(iterable)  # =>  ValueError: max() arg is an empty sequence
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# 2. min()         Works the same way as max(), but returns the smallest value

# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# 3. map()         Returns a map object (which is an iterator) of the results after applying the
#               given function to each item of a given iterable (list, tuple etc.)
#           RU: Возвращает объект отображения (который является итератором) результатов после применения
#               заданной функции к каждому элементу заданного итерируемого объекта (список, кортеж и т. Д.)
#           EX:
#               def wordCount(n):
#                   return len(n)
#               # Or we could use:

# ===================================================
# wordCount = lambda n: len(n)
# def wordCount(n):
#     return len(n)

# x = map(wordCount, ('apple', 'banana', 'cherry'))
# # print(x)        # => map object
# print(list(x))  # => [5, 6, 6]
# ===================================================
# Hello world   =>  olleH dlrow 

# def reverse_word(word:str) -> str:
#     return word[::-1]

# r = list(map(lambda w: w[::-1], input("Enter a word: ").split()))
# # print(r)
# print(" ".join(r))
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
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
# -----------------------------------------------------------
words = ['apple', 'banana', 'cherryyyyy', 'orange..', 'kiwi', 'melon', 'mango']

def count_vowels_and_get_longest(word: str) -> int:
    return len([l for l in word if l.lower() in 'aeiou'])


r = max(words,  key=count_vowels_and_get_longest)
r_holds_n_vowels = len([l for l in r if l.lower() in 'aeiou'])


def get_same_len_of_vowels(word:str) -> bool:
    vowels_len = len([l for l in word if l.lower() in 'aeiou'])
    if vowels_len == r_holds_n_vowels:
        return True
    else:
        return False

samle_len_as_r = list(filter(get_same_len_of_vowels, words))
print(max(samle_len_as_r, key=len))
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================
# ===========================================================================================







