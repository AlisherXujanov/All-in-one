import random


# BEGINNER LEVEL
# ==========================================================================================

# 1. Create a function that gets only numbers from given sentence and
# separates them into two lists: evens and odds
# RU: Создайте функцию, которая получает только числа из данного предложения и
# разделяет их на два списка: четные и нечетные
# Use at least one built-in function
# RU: Используйте по крайней мере одну встроенную функцию

# INPUT: "Hello 7th World in 2023 year 2nd time"
# [7, 3] [2, 0, 2, 2]


def even_odd(sentence):
    ...

# =======================================================================================

# 2. Create a function that accepts a string and counts the number of
# upper and lower case letters.
# Sample String : 'The quick Brow Fox'
# Expected Output :
# No. of Upper case characters : 3
# No. of Lower case Characters : 12
# ---------------------------------
# RU: Создайте функцию, которая принимает строку и подсчитывает количество
# прописных и строчных букв.
# Пример строки: 'The quick Brow Fox'
# Ожидаемый результат:
# Количество прописных букв: 3
# Количество строчных букв: 12


def upper_lower(sentence):
    ...

# =======================================================================================

# 3. Create a function that counts vowel and consonant letters in a string.
# RU: Создайте функцию, которая подсчитывает гласные и согласные буквы в строке.


def vowels_and_constants(sentence):
    ...


# =======================================================================================
# 4. Write a program that takes a list of numbers as input and
# returns the sum of the even numbers.
# RU: Напишите программу, которая принимает список чисел в качестве входных
# данных и возвращает сумму четных чисел.


def sum_even_nums():
    ...


# ==========================================================================================
# 5. Write a Python program to find those numbers which are
# divisible by 7 and multiples of 5, between 1500 and 2700
# (both included).
# RU: Напишите программу на Python для поиска тех чисел,
# которые делятся на 7 и кратны 5, в диапазоне от 1500 до 2700
# (включительно).

# 7 and 5
# 1500 and 2700
def find_numbers():
    ...


# =======================================================================================
# =======================================================================================
# =======================================================================================
# =======================================================================================

# INTERMEDIATE LEVEL


# 1. Find an average number of given numbers of the list
# and return nearest integer from given list
# RU: Найти среднее число данного списка и вернуть ближайшее
# целое число из данного списка.
# INPUT:  [1, 10, 40, 35, 20, 30, 50, 60, 70]
# OUTPUT: 37.777...  =>  35  =>  index-3
def nearest_average(arr):
    ...


# print(nearest_average([1, 10, 40, 34, 20, 30, 50, 60, 70]))


# ==========================================================================================
# 2. Print stars (*) in the shape of a pyramid with N number of steps.
# RU: Напечатайте звезды (*) в форме пирамиды с N количеством ступеней.
# pyramid(4) =>
#    *
#   ***
#  *****
# *******
def pyramid(n):
    ...


# ==========================================================================================
# 4. Write a Python program to guess a number between 1 and 9.
# Note : User is prompted to enter a guess. If the user guesses wrong
# then the prompt appears again until the guess is correct, on successful
# guess, user will get a "Well guessed!" message, and the program will exit.
# ---------------------------------------------------------------
# RU: Напишите программу на Python, чтобы угадать число от 1 до 9.
# Примечание: пользователю предлагается ввести догадку. Если пользователь
# угадывает неправильно, то подсказка появляется снова, пока догадка не будет
# правильной, при успешном угадывании пользователь получит сообщение «Хорошо
# угадано!» и программа выйдет.


def guess_number():
    ...


# guess_number()
# ==========================================================================================
# 4. Create a function that takes a number of lines for stars and prints them as this pattern
# RU: Создайте функцию, которая принимает количество линий для звезд и печатает их в этом шаблоне
# *
# * *
# * * *
# * * * *
# * * *
# * *
# *


def pattern(n):
    ...


# ==========================================================================================
# 5. Write a program that takes a range of 100 numbers
# and checks if the number is dividible to 3, 5 or both.
# Then takes these numbers and sums them all together
# ----------------------------------------------------
# RU: Программа принимает диапазон 100 чисел и проверяет,
# делится ли число на 3, 5 или на оба. Затем возмите эти числа
# и суммируйте их всех вместе и скажите какое число ЧЁТНОЕ ИЛИ НЕТ.
def сумма_кратных_чисел():
    ...


# ==========================================================================================

# 6. Write a program that prints out the first 100 prime numbers.
# RU: Напишите программу, которая выводит первые 100 простых чисел.
# prime_numbers = 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ...


def n_prime_numbers(n):
    ...


# RU: Код выше - определяет функцию с именем n_prime_numbers, которая
# принимает целое число n в качестве входных данных и возвращает список первых n простых чисел.
# Функция использует цикл while для генерации простых чисел, начиная с первого простого числа 2.
# Внутри цикла while код проверяет, является ли текущее число простым, перебирая все целые числа
# от 2 до текущего числа - 1. Если текущее число делится на любое из этих чисел, то оно не является
# простым, и код устанавливает логический флаг is_prime в False. Если текущее число не делится на
# любое из этих чисел, то оно является простым, и код добавляет его в список простых чисел.
# Цикл while продолжается до тех пор, пока длина списка простых чисел не будет равна n. На этом этапе
# функция возвращает список простых чисел.
# ==========================================================================================

# 7. Write a program that calculates the sum of the first 1000 Fibonacci numbers.
# RU: Напишите программу, которая вычисляет сумму первых 1000 чисел Фибоначчи.


def sum_fibonacci(n):
    ...


# RU: Код выше - определяет функцию с именем sum_fibonacci, которая принимает целое число n в
# качестве входных данных и возвращает сумму первых n чисел Фибоначчи. Функция использует цикл
# for для генерации последовательности Фибоначчи, начиная с первых  двух чисел 0 и 1.
# Внутри цикла for код вычисляет сумму текущего числа Фибоначчи, которая является суммой двух
# предыдущих чисел Фибоначчи. Затем код обновляет значения предыдущего и текущего чисел Фибоначчи
# для подготовки к следующей итерации цикла.
# Цикл for продолжается до тех пор, пока он не сгенерирует n чисел Фибоначчи. На этом этапе функция
# возвращает сумму чисел Фибоначчи.
# ==========================================================================================


# 8. Write a program that generates a random password of length 20.


def create_password_of_length(length):
    ...


# ==========================================================================================

# 10. Guessing Game Two
#     In a previous exercise, we’ve written a program that “knows” a number and asks a user to guess it.
#     This time, we’re going to do exactly the opposite. You, the user, will have in your head a number between 0 and 100.
#     The program will guess a number, and you, the user, will say whether it is too high, too low, or your number.
#     At the end of this exchange, your program should print out how many guesses it took to get your number.
#     As the writer of this program, you will have to choose how your program will strategically guess.
#     A naive strategy can be to simply start the guessing at 1, and keep going (2, 3, 4, etc.) until you hit the number.
#     But that’s not an optimal guessing strategy. An alternate strategy might be to guess 50 (right in the middle of the range),
#     and then increase / decrease by 1 as needed. After you’ve written the program, try to find the optimal strategy!


def guessing_game_two():
    ...


# ==========================================================================================

# 9. Draw A Game Board
#     Time for some fake graphics! Let’s say we want to draw game boards that look like this:
#     --- --- ---
#     |   |   |   |
#     --- --- ---
#     |   |   |   |
#     --- --- ---
#     |   |   |   |
#     --- --- ---
#     This one is 3x3 (like in tic tac toe). Obviously, they come in many other sizes (8x8 for chess, 19x19 for Go, and many more).
#     Ask the user what size game board they want to draw, and draw it for them to the screen using Python’s print statement.


def draw_board(size):
    ...

# ==========================================================================================


# 10. MAGIC LAND GAME  => ПОЛЕ ЧУДЕС


def pick_word():
    ...


def guess_letters():
    ...


guess_letters()
# ==========================================================================================

# 10. Given a string of s, find the longest substring without repeating characters.
# RU: Дана строка s, найти самую длинную подстроку без повторяющихся символов.

s = "ThisIsLoongStringForTestingPurposes"

def find_longest_substring(str:str) -> str:
    pool = []
    for letter in str:
        if len(pool) > 0:
            if letter not in pool[-1]:
                pool[-1] += letter
            else:
                pool.append(letter)
        else:
            pool.append(letter)
    return max(pool, key=len)

r = find_longest_substring(s)
print(r)
