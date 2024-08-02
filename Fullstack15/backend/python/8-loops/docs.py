
# ----------WHILE LOOP
# SYNTAXIS
# while condition == True:
#   do something
# ----------FOR LOOP
# SYNTAXIS
# for x in []:
#   print(x)
# ----------ENUMERATE
# enumerate is used to get an index for the item that we are taking from list
# ex:
# for index, item in enumerate(list):
#     print(index, item)

# ==============================================================================
# break     => breaks up the current loop
# RU: прерывает текущий цикл
# continue  => skips the current iteration of the loop
# RU: пропускает текущую итерацию цикла
# ---------
# fruits = ["apple", "banana", "kiwi", "disgusting cherry", "mango"]
# for fruit in fruits:
#     if 'disgusting' in fruit:
#         break
#     elif 'kiwi' == fruit:
#         continue
#     else:
#         print(fruit)
# ==================================================================
# round((time.time() - start_time), 2)
# ------------
# round   => rounds the number to the specified number of digits
# RU: округляет число до указанного количества цифр
# EX: print(round(3.454, 2)) => 3.45
# ------------
# import time
# time.time() => returns the number of seconds passed since epoch
# EX: start_time = time.time()
#     end_time = time.time()
#     difference = end_time - start_time

# from datetime import datetime as dt

# start_time = dt.now()

# for n in range(100):
#     for n2 in range(100):
#         print("Hello world")

# end_time = dt.now()
# print("Execution time: ", end_time - start_time)
# ==================================================================
# for i in range(10):
#     pass
# for i in "Some text":
#     pass
# ==================================================================
# itr1 = list('abcdefghijklmnopqrstuvwxyz')
# itr2 = range(len(itr1))
# zipped = zip(itr1, itr2)

# for (item, item2) in zipped:
#     print(item, item2)
# ==================================================================
# loop with dictionaries
# for key, value in dict.items():
#     print(key, value)
# ==================================================================
# import random
# letters = "abcdefghijklmnopqrstuvwxyz"
# letters_ru = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
# numbers = "1234567890"
# symbols = "@#$%^&*"

# total_symbols_for_password = 20
# everything_included = letters + numbers + symbols

# created_password = ""
# for i in range(total_symbols_for_password):
#     random_int = random.randint(0, len(everything_included)-1)
#     created_password += everything_included[random_int]

# print(created_password)
# ==================================================================
