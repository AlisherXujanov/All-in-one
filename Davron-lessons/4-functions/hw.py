# LAST TASK

# def dontTouchFirstLetter(text: str, symbol: str) -> str:
#     firstLetter = text[0]
#     withoutFirstLetter = text[1:]
#     result = firstLetter + withoutFirstLetter.lower().replace(firstLetter.lower(), symbol)
#     print(result)

# dontTouchFirstLetter("This is test text Test text Test text test texT", "$")

# ----------------------------------------------
# ЗАДАНИЕ 1
# def minuteToSecunds(num: int) -> int:
#     print(num * 60)


# minuteToSecunds(30)

# ----------------------------------------------
# ЗАДАНИЕ 2
# def returnsTheDataTypeOfItsFirstElement(l: list) -> bool:
#     result = type(l[0])
#     print(result)


# returnsTheDataTypeOfItsFirstElement([1, "2", "t", 5])

# ----------------------------------------------
# ЗАДАНИЕ 3


# def bigNumber(num1: int, num2: int) -> int:
#     if num1 < num2:
#         print(f"{num2} is BIG!")
#     elif num1 == num2:
#         print("Both are equal!")
#     else:
#         print(f"{num1} is BIG!")


# bigNumber(5, 6)

# ----------------------------------------------
# ЗАДАНИЕ 4
# def reverseStr(text: str) -> str:
#     print(text[::-1])


# reverseStr("Davron")

# ----------------------------------------------
# ЗАДАНИЕ 5

# def reverseInt(num: int) -> int:
#     result = int(str(num)[::-1])
#     print(result)


# reverseInt(12345)

# ----------------------------------------------
# ЗАДАНИЕ 6

# READY!

# ----------------------------------------------
# ЗАДАНИЕ 7

# READY!

# ----------------------------------------------
# ЗАДАНИЕ 8

# def biggestOfThree(num1: int, num2: int, num3: int) -> int:
#     if num1 > num2 and num1 > num3:
#         print(f"{num1} is BIG!")
#     elif num2 > num1 and num2 > num3:
#         print(f"{num2} is BIG!")
#     elif num3 > num2 and num3 > num1:
#         print(f"{num3} is BIG!")
#     elif num1 == num2 and num1 == num3:
#         print("All of them EQUAL!")

# biggestOfThree(4, 4, 4)

# ----------------------------------------------
# ЗАДАНИЕ 9

# def plus(*args) -> int:
#     # args ===  [..., ...]
#     # print(sum(args))
#     # -----------------
#     result = 0
#     for num in args:
#         result += num
#     print(result)


# plus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

# ----------------------------------------------
# ЗАДАНИЕ 10

# def multiply(*args:list) -> int:
#     result = 1
#     for num in args:
#         result *= num
#     print(result)

# multiply(1, 2, 3, 4, 5)

# ----------------------------------------------
# ЗАДАНИЕ 11
# Напишите функцию Python, которая принимает
# список и возвращает новый список с уникальными элементами первого списка.

# def get_uniques(l: list) -> list:
#     result = []
#     for item in l:
#         IDX_OF_ITEM = l.index(item)    # Индекс элемента
#         BEFORE = l[:IDX_OF_ITEM]       # ЧАСТЬ листа до элемента
#         AFTER = l[IDX_OF_ITEM+1:]      # ЧАСТЬ листа после элемента
#         if item not in BEFORE and item not in AFTER:
#             # Если элемент не встречается в BEFORE и AFTER
#             result.append(item)
#     return sorted(result)


# r = get_uniques([1, 2, 1, 4, 3, 5, 5])
# print(r)  # [2, 3, 4]

# ----------------------------------------------
# ЗАДАНИЕ 12
# Напишите функцию Python для вычисления факториала числа. 
# Функция принимает число в качестве аргумента.
# !5   =>  1*2*3*4*5            = 120
# !10  =>  1*2*3*4*5*6*7*8*9*10 = 3628800

# def get_factorial(num:int) -> int:
#     # ========================
#     # SIMPLE FOR LOOP
#     # result = 1
#     # for num in range(1, num+1):  # [1, 2, 3, 4, 5]
#     #     result *= num  
#     # return result
#     # ======================== 
#     # RECURSION
#     if num == 0:
#         return 1
#     return num * get_factorial(num-1)


# ----------------------------------------------
# ЗАДАНИЕ 13
# from datetime import datetime

# def century(name: str, age: int) -> None:
#     needed_years = range(age, 100)
#     years = len(needed_years)
#     result = years + datetime.now().year
#     print(f"{name} {years} years later, in {result} you will be 100 years old")

# century("Davron", 14)

# ----------------------------------------------
# ЗАДАНИЕ 14

# def firstLastList(list: list) -> list:
#     first, *middle, last = list
#     print(first , last)


# firstLastList([1, 2, 4, 56, 76])

# ----------------------------------------------
# ЗАДАНИЕ 15
# Напишите функцию, которая принимает строку в качестве 
# параметра и преобразует первую букву каждого слова строки в верхний регистр.

# def make_title(text: str) -> str:
#     print(text.title())

# make_title("my name is davron hasanow i am fourteen years old.")
