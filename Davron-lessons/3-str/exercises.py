# BEGINNER LEVEL
# ----------------------------------------------------------
# ЗАДАНИЕ 1

# def firstHalf(text:str):
#     halfLen = len(text) // 2
#     result = text[:halfLen]
#     print(result)

# firstHalf("Davron")

# ----------------------------------------------------------
# ЗАДАНИЕ 2

# def secondHalf(text:str):
#     halfLen = len(text) // 2
#     result = text[halfLen:]
#     print(result)

# secondHalf("Davron")

# ----------------------------------------------------------
# ЗАДАНИЕ 3

# def change(text:str,whatToChange:str,whatToChangFor:str):
#     result=text.replace(whatToChange,whatToChangFor).lower()
#     print(result.title())

# change("DAvron Hasanov","a","e")

# ----------------------------------------------------------
# ЗАДАНИЕ 4


# ----------------------------------------------------------
# ЗАДАНИЕ 5

# def start(text:str, number:int):
#     print(text.center(number,"*"))

# start(input("Enter something: "), 15)

# ---------------------------------------------------------
# ЗАДАНИЕ 6

# def swap(text:str):
#     first = text[:1].lower()
#     middle =text[1:-1]
#     last = text[-1].upper()
#     result = last+middle+first
#     print(result)

# swap("Davron") # Navrod

# ---------------------------------------------------------
# ЗАДАНИЕ 7

# def turnOver(text:str):
#     print(text.lower()[::-1].capitalize())

# turnOver("Davron")

# ---------------------------------------------------------
# ЗАДАНИЕ 8

# def deleteIndex(text:str,  n:int):
#     first= text[:n]
#     last = text[n+1:]
#     print(first + last.title())

# deliteIndex("Davron",0)
# ---------------------------------------------------------
# ЗАДАНИЕ 9
# text = "Hello world"
# [START:END:STEP]

# print(text[::2])

# ---------------------------------------------------------
# ЗАДАНИЕ 10

# def twoLetters(text:str):
#     if len(text) < 2:
#         print("Result: Empty String")
#     else:
#         first = text[:2]
#         last = text[-2:]
#         print(first + last)

# twoLetters("Davron")


# -------------------------------------------------------
# INTERMEDIATE LEVEL
# ЗАДАНИЕ 1

# def fio(fullName: str):
#     first = fullName.split(" ")
#     a, b, c = first
#     second = b[0]
#     third = a[0]
#     print(f"{c} {second}. {third}")


# fio("Vladimir Vladimirovich Putin")

# ---------------------------------------------------------
# ЗАДАНИЕ 2

# def repeatName(name: str, n: int):
#     middle = len(name) // 2
#     first = name[:middle] * n
#     last = name[middle:] * n
#     result = first + last
#     print(result)


# repeatName("Davron", 3)

# ---------------------------------------------------------


# ---------------------- ADVANCED LEVEL ---------------------
# 1. У вас есть строка. Вам нужно получить первую букву и заменить ее во всех
#    остальных местах кроме первого на любой желаемый знак "$, #, @, *, ..."

# ДАЁМ: 
# let string = "This is test text"
# let symbol = "$"

# БЕРЁМ: "This is $es$ $ex$"
# -------------------------
# let string = "Hello world hhh HHH"
# let symbol = "$"

# БЕРЁМ: "Hello world $$$ $$$"
# -------------------------

# ============================================================================
# ============================================================================
# 2. ...

# ============================================================================
# ============================================================================
# 3. Напишите программу на Python, чтобы добавить 'ing' в конец заданной 
# строки (длина должна быть не менее 3).
# Если заданная строка уже заканчивается на 'ing', вместо этого добавьте 'ly'.
# Если длина строки заданной строки меньше 3, оставьте ее без изменений.

# def add_ing(string:str):
#     if len(string) > 3:
#         if string.endswith("ing"):
#             return string + "ly"
#         else:
#             return string + "ing"
#     else:
#         return string
    
# r1 = add_ing("play")
# print("Result 1: ", r1)

# r2 = add_ing("playing")
# print("Result 2: ", r2)

# r3 = add_ing("go")
# print("Result 3: ", r3)
# ============================================================================
# ============================================================================

# 4. Напишите функцию на Python для проверки повторяющихся букв.
# Он должен принимать строку, то есть предложение. Функция должна возвращать
# True, если в предложении есть слово с повторяющимися буквами, иначе возвращать False.

# Hello    =>  True
# world    =>  False
# Alballo  =>  True
def check_same_letters(string:str):
    index = 0
    for letter in string[:-1]:
        if string[index+1].lower() == letter.lower():
            return True
        index += 1
    return False

r1 = check_same_letters("Hello")
r2 = check_same_letters("world")
r3 = check_same_letters("Alballo")

print(r1)
print(r2)
print(r3)

