# BUILT IN FUNCTIONS
# =======================================================================================

# 1. Create a function that sums up all the numbers in a list and compare
# it with the highest number from the same list. Then, get the difference and
# show the message that if it is even or odd number.
# RU: Создайте функцию, которая суммирует все числа в списке и сравнивает
# это с самым большим числом из того же списка. Затем получите разницу и
# покажите сообщение, четное это число или нечетное.
from functools import reduce


def sum_and_compare(arr):
    ...
# print(sum_and_compare([1, 2, 3, 4, 5]))
# =======================================================================================

# 2. Create a function that takes a list of numbers and returns third biggest.
# RU: Создайте функцию, которая принимает список чисел и возвращает третий по величине.
def third_biggest_number(list):
    ...
# second_highest = min([x for x in list if x != highest])
# return min([x for x in list if x != highest and x != second_highest])

# =======================================================================================
# RU: Напишите программу, которая принимает список строк в качестве входных
# 3. Write a program that takes a list of strings as input and returns the longest string.
# данных и возвращает самую длинную строку.


def longest_word():
    ...

# =======================================================================================
# 4. Write a program that takes a string as input and returns the number of letters in each string.
# RU: Напишите программу, которая принимает строк в качестве входных данных
# и возвращает количество букв в каждой строке.


def letters_in_string():
    ...

# =======================================================================================
# 5. Write a program that takes a list of numbers as input and
# returns the average of the numbers.
# RU: Напишите программу, которая принимает список чисел в качестве
# входных данных и возвращает среднее значение чисел.
# [13, 22, 35, 41, 52]   => 13+24+35+41+52+5+2 = 170 / 7 = 24.28


def average_of_numbers():
    ...

# =======================================================================================
# 6. Write a program that takes a string as input and returns the string with all vowels removed.
# RU: Напишите программу, которая принимает строку в качестве входных
# данных и возвращает строку без гласных.


def words_without_vowels():
    ...


# =======================================================================================
# 7. Write a program that takes a list of strings as input and 
# returns a new list with all strings capitalized.
# RU: Напишите программу, которая принимает список строк в 
# качестве входных данных и возвращает
# новый список со всеми строками прописными.
words = ['AbsAbs', "ObsOO", "PstqR"]


def capitalized_words():
    ...


def count_caps(words):
    ...
   

print(count_caps(words))


# =======================================================================================
# 8. Write a program that takes a list of numbers as input and returns the largest number.
# RU: Напишите программу, которая принимает список чисел в 
# качестве входных данных и возвращает
# самое большое число.


def largest_number():
    ...

# =======================================================================================
# 9. Write a program that takes a list of strings as input and returns a new list with
# all strings of length 4 or greater.
# RU: Напишите программу, которая принимает список 
# строк в качестве входных данных и возвращает
# новый список со всеми строками длиной 4 или больше.


def words_length():
    ...

# =======================================================================================

# 10. Write a function that takes a list of integers as input
# and returns the sum of the squares of the even numbers
# in the list. Use the reduce() function to perform the calculation.
# RU: Напишите функцию, которая принимает список целых чисел
# в качестве входных данных и возвращает сумму квадратов четных
# чисел в списке. Используйте функцию reduce() для выполнения вычислений.

# INPUT: [1, 2, 3, 4, 5, 6, 7, 8, 9]
# >> 2**2 + 4**2 + 6**2 + 8**2 = 120
# OUTPUT: 120


def sum_of_squares():
    ...

# =======================================================================================
# =======================================================================================

# 11. Use map() to convert a list of strings to a list of integers.
# RU: Используйте map(), чтобы преобразовать список строк в список целых чисел.

# INPUT:   ["www", "12345", "qwe", 124, '54321', 'aaaaa']
# OUTPUT:  [3, 12345, 3, 124, 54321, 5]


def get_as_nums(arr: list) -> list:
    ...

test_arr = [3, "12345", "qwe", 124, '54321', 'aaaaa']
total = get_as_nums(test_arr)
print(total)


# =======================================================================================
# 12. Use filter() to remove all odd numbers from a list.
# RU: Используйте filter(), чтобы удалить все нечетные числа из списка.
def remove_odd_numbers(arr: list) -> list:
    ...


# =======================================================================================
# 13. Use map() and filter() together to convert a list of
# strings and numbers to a list of only integers and then remove all odd numbers.
# NOTE: If the item is str then get the length of the string
# if the item is int in quotes "..." then convert it to int
# RU: Используйте map() и filter() вместе, чтобы преобразовать список
# строк и чисел в список только целых чисел, а затем удалите все нечетные числа.
# ПРИМЕЧАНИЕ. Если элемент - это строка, то получите длину строки
# если элемент - это int в кавычках "...", то преобразуйте его в int


def map_and_filter(arr: list) -> list:
    ...


test_arr = [22, "wwww", "12345", "qwe", 124, '54321', 'aaaaa']
print(map_and_filter(test_arr))


# =======================================================================================
# 14. Write a function that takes an input from user and deletes all duplicate
# letters using filter or map somehow. Then, count each letter within the original str
# RU: Напишите функцию, которая принимает ввод от пользователя и удаляет все дублирующиеся
# буквы с помощью filter() или map() каким-то образом. Затем подсчитайте каждую букву в исходной строке


def remove_duplicates_and_count_letters():
    ...


remove_duplicates_and_count_letters()

# =======================================================================================

# 15. Create a function that can take a list of positive or negative numbers
# and get the difference between smallest positive and largest negative numbers
# Do this with the help of filter or map or reduce.
# Then find nearest number to this difference
# EX:
#   l = [1, -2, 10, 4, 5, -6, 7, 8, 9]
#   distance = 3
#   result = 3nd index that is 4
