# !TASKS
# * -----------------------------------------------------------
#!--------------------------LOGICS---------------------------
# * -----------------------------------------------------------
#! TASK 1

# def multiplyEachLetter(text: str, time: int) -> str:

#     result = ""
#     for l in text:
#         result += l * time
#     return result

# print(multiplyEachLetter("Davron", 4))

# * -----------------------------------------------------------
#! TASK 2:
def choose_color(colors: str) -> str:
    suffixes = ["th", "st", "nd", "rd"]

    # for idx, color in enumerate(colors):
    #     pass
    for i in range(1, len(colors)+1):
        suff = suffixes[0] if i > 3 else suffixes[i]
        current_color = colors[i-1]
        print(f"{i}{suff} choice is {current_color}.")


# "1st choice is Blue."
# "2nd choice is Green."
# "3rd choice is Red."
r = ["Blue", "Green", "Red", "Orange", "Yellow", "Indigo", "Pink"]
# choose_color(r)

# * -----------------------------------------------------------
#! TASK 3
# def isNumber(arr: list) -> list:
#     result = []
#     for i in arr:
#         if isinstance(i, int) and i != 0:
#             result.append(i)
#     return result

# r = [0, 15, False, -22, None, 47, ""]
# print(isNumber(r))
# * -----------------------------------------------------------
#! TASK 4


def findTheDifferenceBetweenTwoArrays(arr1: list[int], arr2: list[int]) -> list[int]:
    result = []
    # for i1 in arr1:
    #     if i1 not in arr2:
    #         result.append(i1)

    # for i2 in arr2:
    #     if i2 not in arr1:
    #         result.append(i2)
    [result.append(i1) for i1 in arr1 if i1 not in arr2]
    [result.append(i2) for i2 in arr2 if i2 not in arr1]
    return result

# z = [1, 2, 3]
# x = [100, 2, 1, 10]
# Output == >> ["3", "10", "100"]
# print(findTheDifferenceBetweenTwoArrays(
#     [1, 2, 3, 5, 6, 7], [1, 21, 3, 76, 5, 66, 7]))

# * -----------------------------------------------------------
#! TASK 5


def objectFn(text: str):
    # TODO:
    ...


# print(objectFn("Hello"))

# * -----------------------------------------------------------
#! TASK 6


def countsHowManyVowelsAndConsonants(text: str) -> str:
    vowels = "aeiou"
    vow = []
    con = []
    # for i in text:
    #     if i in vowels:
    #         vow += i
    #     else:
    #         con += i
    [(vow.append(i) if i in vowels else con.append(i)) for i in text]

    return f"""
Consonants: {"".join(con)}, {len(con)}
Vovels: {"".join(vow)}, {len(vow)}
"""


# r = "Davron"
# print(countsHowManyVowelsAndConsonants(r))


# * -----------------------------------------------------------
#! TASK 7

# def triple(arr: list[int]) -> list[int]:
#     return [i * 3 for i in arr]


# r = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# print(triple(r))


# * -----------------------------------------------------------
#! TASK 8

# def findTheSimilaryBetweenTwoArrays(arr1: list[int], arr2: list[int]) -> list[int]:

#     result = []

#     for i1 in arr1:
#         if i1 in arr2:
#             result.append(i1)

#     return result

# print(findTheSimilaryBetweenTwoArrays([1, 2, 3, 5, 6, 7], [1, 21, 3, 76, 5, 66, 7]))


# * -----------------------------------------------------------
#! TASK 9

def findLongestString(arr: list[str], n: int) -> list:
    # result = []
    # for word in arr:
    #     if len(word) > n:
    #         result.append(word)
    result = [word for word in arr if len(word) > n]
    return result


r = ["apple", "banana", "carrot", "dog", "elephant",
     "frog", "giraffe", "hat", "igloo", "jacket"]

# print(findLongestString(r, 6))


# * -----------------------------------------------------------
#! TASK 10

def findEvenAndOdd(text: str) -> str:
    evens = []
    odds = []

    for letter in text:
        if letter.isnumeric() and letter != " " and letter != "0":
            if int(letter) % 2 == 0:
                evens.append(letter)
            else:
                odds.append(letter)

    return f"Even: {",".join(evens)} ; Odd: {",".join(odds)}"


r = "5h57km887l6m5j4"
# print(findEvenAndOdd(r))


# * -----------------------------------------------------------
#! TASK 11

def countEven(num: int) -> str:
    evens = [n for n in str(num) if int(n) % 2 == 0]
    result = len(evens)

    # even = ""
    # result = ""
    # for n in str(num):
    #     if int(n) % 2 == 0:
    #         even += n + ","
    #         result += n

    return f"Evens: {result} ({evens})"


r = 987654327182346
# print(countEven(r))


# * -----------------------------------------------------------
#! TASK 12

def doubleLetter(text: str) -> bool:
    # 1. with for loop
    for idx, letter in enumerate(text[:-1]):
        if letter == text[idx+1]:
            return True
    return False
    # ------------------------------------------
    # for letter in text:
    #     index_of_letter = text.index(letter)
    #     if letter != text[-1]:
    #         if letter == text[index_of_letter+1]:
    #             return True
    # return False
    # ------------------------------------------


r = "Hello"
# moon  =>  True
# noon  =>  True
# cool  =>  True
# yellow  => True
# print(doubleLetter(r))


# *------------------------------------------------------------
# !--------------------------EXTRIME---------------------------
# *------------------------------------------------------------
# ! TASK 1
def mathFn(arr: list[int], res: int):
    # TODO: shorten this code maximum
    result = []
    takes_indexes = []
    for idx1, i1 in enumerate(arr):
        for idx2, i2 in enumerate(arr):
            if i1 + i2 == res and idx1 != idx2:
                if idx1 not in takes_indexes and idx2 not in takes_indexes:
                    result.append(f"{i1} + {i2} = {res}")
                    takes_indexes.extend([idx1, idx2])
    return "\n".join(result)


print(mathFn([1, 2, 2, 3, 56, 42, 345, 67, 8, 9, 87], 4))

# *-----------------------------------------------------------
# ! TASK 2
def findTheLetterThatAppearsMostOften(text: str) -> list:
    pass


r = "Hello world of Davron"
# print(findTheLetterThatAppearsMostOften(r))
