# BEGINNER LEVEL
# 1. Write a Python function to find the maximum of three numbers.
# RU: Напишите функцию Python для поиска максимума из трех чисел.
def max_of_three(a, b, c):
    ...

# 2. Write a Python function to sum all the numbers in a list.
# RU: Напишите функцию Python для суммирования всех чисел в списке.


def sum_of_list(lst):
    ...

# 3. Write a Python function to multiply all the numbers in a list.
# RU: Напишите функцию Python для умножения всех чисел в списке.


def multiply_of_list(lst):
    ...

# 4. Write a Python function that takes a list and returns a new list with unique elements of the first list.
# RU: Напишите функцию Python, которая принимает список и возвращает новый список с уникальными элементами первого списка.


def unique_elements(lst):
    ...

# 5. Write a Python function to calculate the factorial of a number (a non-negative integer). The function accepts the number as an argument.
# RU: Напишите функцию Python для вычисления факториала числа (неотрицательное целое число). Функция принимает число в качестве аргумента.


def factorial(n):
    # 1*2*3*4*5*6*7*8*9*10
    pool = 1
    for n in range(1, n+1):
        pool * n
    return pool

# 6. Create a program that asks the user to enter their name and their age. Print out a message addressed to them that tells them the year that they will turn 100 years old.
# RU: Создайте программу, которая просит пользователя ввести свое имя и возраст. Выведите сообщение, адресованное им, которое сообщает им, в каком году они отметят 100-летие.

# 7. Write a program that takes a list of numbers (for example, a = [5, 10, 15, 20, 25]) and makes a new list of only the first and last elements of the given list.
# RU: Напишите программу, которая принимает список чисел (например, a = [5, 10, 15, 20, 25]) и создает новый список только первого и последнего элементов заданного списка.

# 8. Write a function that takes an ordered list of numbers
# (a list where the elements are in order from smallest to largest) and another number. The function decides whether or not the given number is inside the list
# and returns (then prints) an appropriate boolean. (Use binary search.)
# RU: Напишите функцию, которая принимает упорядоченный список чисел
# (список, в котором элементы упорядочены от наименьшего к наибольшему)
# и другое число. Функция решает, находится ли заданное число в списке,
# и возвращает (затем печатает) соответствующий булевый результат.
# (Используйте бинарный поиск.)

# =====================================================================================================
# =====================================================================================================

# Advanced LEVEL
# 1. Factorial      =>   !5  =  5*4*3*2*1
# factorial(10)     =>   !10 =  10*9*8*7*6*5*4*3*2*1


def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n-1)

# print(factorial(5))
# ====================================================================
# ====================================================================
# 2. Fibonacci  =>   0, 1  =  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
# fibbo(50)     =>   0, 1, 1, 2, 3, 5, 8, 13, 21, 34
# def fibonacciLoop(max_num:int) -> list[int]:
#     fb = [0, 1]
#     while max_num > fb[-1] + fb[-2]:
#         fb.append(fb[-1] + fb[-2])
#     return fb
# r = fibonacciLoop(100)
# print(r)
# =====================================
# def fibonacciRecursive(max_num: int, fb: list[int] = [0, 1]) -> list[int]:
#     if max_num > fb[-1] + fb[-2]:
#         fb_copy = fb.copy()
#         fb_copy.append(fb_copy[-1] + fb_copy[-2])
#         return fibonacciRecursive(max_num, fb_copy)
#     else:
#         return fb

# r = fibonacciRecursive(100)
# print(r)
# =====================================
# def fibonacci(max, first=0, second=1):
#     if first > max:
#         return []
#     return [first, *fibonacci(max, second, first+second)]
#     #              *[...] = >  ...
# print(fibonacci(100))
# =====================================
# ====================================================================
# ====================================================================
# 3. Piramid
# piramid(10)
#          *
#         ***
#        *****
#       *******
#      *********
#     ***********
#    *************
#   ***************
#  *****************
# *******************


def piramid_recursion(n_times, counter: int = 1):
    # for i in range(1, n_times+1):
    #     lacking_spaces = n_times-i
    #     print(" "*lacking_spaces + "*"*(i*2-1))
    if n_times < counter: return
    lacking_spaces = n_times-counter
    print(" "*lacking_spaces + "*"*(counter*2-1))
    return piramid_recursion(n_times, counter+1)

# piramid_recursion(10)
# ====================================================================
# ! USE RECURSION
def rotate_string_recursively(string, remaining_str=""):
    ...

rotate_string_recursively("Hello world")
# >> Hello world
# >> dHello worl
# >> ldHello wor
# >> rldHello wo
# >> orldHello w
# >> worldHello
# >>  worldHello
# >> o worldHell
# >> lo worldHel
# >> llo worldHe
# >> ello WorldH
# >> Hello World
# ========================================================================
# ------------------------------- ADVANCED -------------------------------
# ========================================================================
# 5 -----------------------------
# Напишите функцию, которая принимает строку слов и 
# возвращает строку, отсортированную по длине слов.

def sort_by_length(sentence:str) -> str:
    splitted_text = sentence.split(" ")
    pool = []

    # TODO: finish this
    for i in range(len(splitted_text)):
        min_length = ...
        pool.append(min_length)
        splitted_text.remove(min_length)

    return pool


# ========================================================================
# 7 -----------------------------
vowels = 'aeiou'


def change_vowels_to_next(sentence: str) -> str:
    pool = ""
    ...

change_vowels_to_next("hello world")  # hillu wurld



