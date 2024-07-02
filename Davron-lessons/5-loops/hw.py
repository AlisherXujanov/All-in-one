# !TASKS
# *----------------------------------------------------------
# *----------------------------------------------------------
# !ЗАДАНИЕ 1

# def vowels(text: str) -> int:
#     result = ""
#     for lett in text:
#         if lett.lower() in "aioue":
#             result += lett
#     print(f"{result}, {len(result)}")


# vowels("Davron Hasanow")

# *----------------------------------------------------------
# !ЗАДАНИЕ 2

# def countLetterInString(text: str, letter: str) -> str:
#     result = ""
#     for lett in text:
#         if lett.lower() == letter:
#             result += lett
#     print(f"{len(result)}, {result}")


# countLetterInString("Hello World", "l")

# !!!!!!!!!!!!!!!!!!!!! ADVANCED LEVEL  (Pro) !!!!!!!!!!!!!!!!!!!!!
# !----------------------------------------------------------
# !ЗАДАНИЕ 1
# Напишите функцию для извлечения уникальных символов или букв
# (которые только 1 раз указаны) из строки
import random


def get_unique_values(text: str) -> str:
    result = ""
    # H -> "_ello world"
    # e -> "H_llo world"
    # l -> "He_lo world"
    # l -> "Hel_o world"
    # o -> "Hell_ world"
    # ...
    counter = 0
    for letter in text:
        before = text[:counter].lower()
        after = text[counter+1:].lower()
        if letter.lower() not in before and letter.lower() not in after:
            result += letter
        counter += 1

    return result


r = get_unique_values("Hello World")
# print(r)

# *----------------------------------------------------------
# !ЗАДАНИЕ 2


EASY = "easy"
MEDIUM = "medium"
HARD = "hard"


def randomPassword(length: int,  difficulty: str = "easy") -> None:
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    alpha_upper = alphabet.upper()
    numbers = "1234567890"
    symbols = "!@#$%^&*()_+"

    total = ''
    match difficulty:
        case "easy":
            total = alphabet + numbers
        case "medium":
            total = alphabet + numbers + alpha_upper
        case 'hard':
            total = alphabet + numbers + alpha_upper + symbols

    result = ""
    for _ in range(length):
        random_int = random.randrange(0, len(total))
        result += total[random_int]
    return result


r = randomPassword(10)  # "abs123bwqe"
# print(r)
r = randomPassword(10, difficulty=HARD)  # "abs123bwqe"
# print(r)


# *----------------------------------------------------------
# !ЗАДАНИЕ 3

# ?READY


# *----------------------------------------------------------
# !ЗАДАНИЕ 4

def reverseEveryStrInList(arr: list[str]) -> str:
    result = []
    for text in arr:
        result.append(text[::-1])
    return result


r = reverseEveryStrInList(["Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo", "Sukuna", "Maki Zenin", "Panda", "Kento Nanami", "Aoi Todo", "Choso",
                           "Mahito", "Junpei Yoshino", "Geto Suguru", "Kiyotaka Ijichi", "Mahoraga", "Naobito Zenin", "Noritoshi Kamo", "Kokichi Muta", "Haruta Shigemo", "Mei Mei"])
# print(r)

# *----------------------------------------------------------
# ЗАДАНИЕ 5
# Напишите функцию, которая принимает строку слов и возвращает строку,
# отсортированную по длине слов.


def get_shortest(arr: list[str]) -> list[str]:
    shortest = arr[0]
    for word in arr:
        if len(word) < len(shortest):
            shortest = word
    return shortest


def sortedStr(arr: list[str]) -> list[str]:
    # return sorted(arr, key=len)
    # ---------------------------
    result = []
    arr_copy = arr.copy()
    for _ in range(len(arr)):
        min_len = get_shortest(arr_copy)
        result.append(min_len)
        arr_copy.remove(min_len)
    return result


fruits = ['pineapple', "apple", "banana", "cherry", "kiwi", "mango"]
r = sortedStr(fruits)
# print(r)


# *----------------------------------------------------------
# !ЗАДАНИЕ 6
# Напишите функцию, которая принимает строку и возвращает символ,
# который появляется больше всего раз.

def find_most_frequent(string: str) -> str:
    result = string[0]
    for letter in string:
        if string.count(letter) > string.count(result):
            result = letter
    return result


r = find_most_frequent("Hello World")
# print(r)


# *----------------------------------------------------------
# !ЗАДАНИЕ 7
# Напишите функцию, которая принимает строку и возвращает новую строку,
# в которой каждая гласная заменена на следующую гласную в алфавите.

def replaceVowels(text: str) -> str:
    vowels = "aeiou"
    result = ""

    for letter in text:
        if letter.lower() in vowels:
            if letter != vowels[-1]:
                indexOfLetter = vowels.index(letter.lower())
                result += vowels[indexOfLetter + 1]
            else:
                result += vowels[0]
        else:
            result += letter
    print(result)

# replaceVowels("Hello, World!")

# !---------------------------------------
# !------------- W3RESOUCE ---------------
# !---------------------------------------
# ?АДАНИЕ 1
# !Получить разницу между заданным числом и 17, если число больше 17 вернуть двойную абсолютную разницу

# def difference(num: int) -> int:
#     if num <= 17:
#         print(17 - num)
#     else:
#         print((num - 17) * 2)


# difference(300)

# !---------------------------------------
# ?АДАНИЕ 2
# !Получить новую строку из заданной строки, где 'Is' был добавлен в начало. Если заданная строка уже начинается с 'Is', то вернуть строку без изменений


# def addIs(text: str) -> str:
#     if len(text) >= 2 and text[:2] == "Is":
#         print(text)
#     else:
#         print("Is" + text)


# addIs("Davron")
# !---------------------------------------
# ?АДАНИЕ 3
# !Напишите программу  на Python для подсчета числа 4 в заданном списке.

# def listCount4(nums: int) -> int:
#     result = 0

#     for num in nums:
#         if num == 4:
#             result = result + 1

#     print(result)


# listCount4([4, 8, 4, 2, 1, 9, 4, 8, 7, 4,])


# !---------------------------------------
# ?АДАНИЕ 4
# !Напишите программу  Python для сложения трех заданных целых чисел. Однако, если два значения равны, сумма будет равна нулю.

# def sumThree(num1: int, num2: int, num3: int) -> int:
#     if num1 == num2 or num2 == num3 or num1 == num3:
#         print(0)
#     else:
#         sum = num1 + num2 + num3
#         print(sum)

# sumThree(2, 1, 2)

# !---------------------------------------
# ?АДАНИЕ 4
# !Напишите программу  на Python для создания гистограммы из заданного списка целых чисел.

# def gistogram(nums: list) -> None:
#     for num in nums:
#         result = '*' * num
#         print(result)


# gistogram([9, 6, 7, 5, 2])
