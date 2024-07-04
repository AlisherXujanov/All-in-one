# !TASKS
# *----------------------------------------------------------
# !----------------------BEGINER LEVEL-----------------------
# *----------------------------------------------------------
# !ЗАДАНИЕ 1

# def secondElement(arr: list) -> list:
#     return arr[1]


# r = [1, "g", 3,  4, 5, 5, 5]
# print(secondElement(r))

# *----------------------------------------------------------
# !ЗАДАНИЕ 2


# def lastLetterAndEvenOdd(arr: list[int]) -> str:
#     lastLetter = arr[-1]
#     if lastLetter % 2 == 0:
#         return f"{lastLetter} is EVEN!"
#     else:
#         return f"{lastLetter} is ODD!"


# r = [1, 67, 6, 34, 65, 753, 74, 7, 876]
# print(lastLetterAndEvenOdd(r))

# *----------------------------------------------------------
# !ЗАДАНИЕ 3

# userInput = input("Write number: ")

# if userInput.isnumeric():
#     number = int(userInput)
#     half = number / 2
#     quarter = number / 4

#     numbersList = [number, half, quarter]

#     print(numbersList)
#     print(f"Result: {sum(numbersList)}")
# else:
#     print(f"Error!!!!!!!")


# *----------------------------------------------------------
# !ЗАДАНИЕ 4

# userInput = input("Write something:")
# arr = ["apple", "banana", "car", "helicopter", "kivi", "pineapple"]
# MIDDLE = len(arr) // 2
# arr.insert(MIDDLE, userInput)
# print(arr)


# *----------------------------------------------------------
# !ЗАДАНИЕ 5

# def lastLetter(arr: list[int]) -> None:
#     last = arr.pop()
#     if last % 2 == 0:
#         return f"{last} is EVEN!!!"
#     else:
#         return f"{last} is ODD!!!"


# r = [1, 3, 567, 8, 90, 98, 76, 54, 22]
# print(lastLetter(r))

# *----------------------------------------------------------
# !--------------------INTERMIDIET LEVEL---------------------
# *----------------------------------------------------------
# !ЗАДАНИЕ 1

# def longestWord(arr: list):
#     first = max(arr, key=len)
#     return first

# r = longestWord(["apple", "banana", "car", "helicopter", "kiwi", "pineapple"])
# print(r)

# *----------------------------------------------------------
# !ЗАДАНИЕ 2

# def shortestWord(arr: list):
#     first = min(arr, key=len)
#     return first

# r = shortestWord(["apple", "banana", "car", "helicopter", "kiwi", "pineapple"])
# print(r)

# *----------------------------------------------------------
# !ЗАДАНИЕ 3

# def findMax(arr: list):
#     return max(arr)

# r = findMax([1,4,5,67,88,9,98,8,65,55,78])
# print(r)

# *----------------------------------------------------------
# !ЗАДАНИЕ 4

# def longestWord(arr: list):
#     return min(arr)

# r = longestWord([6,4,5,67,88,9,98,8,65,55,78])
# print(r)

# *----------------------------------------------------------
# !ЗАДАНИЕ 5

# def summaNum(num: int) -> int:
#     re = 0
#     for d in str(num):
#         re += int(d)
#     return re

# print(summaNum(1234567))

# *----------------------------------------------------------
# !--------------------------LOOPS---------------------------
# *----------------------------------------------------------
# !ЗАДАНИЕ 1

# def sumEven(arr:list)->int:
#     result = 0
#     for n in arr:
#         if n % 2 == 0:
#             result += n
#     print(result)

# sumEven([1,3,4,7,6,8,9,7,40,1,4,2,5,6,7,8,6,4,2])


# *----------------------------------------------------------
# !ЗАДАНИЕ 4

# def sumNumber(text: str) -> int:
#     result = 0
#     for item in text:
#         if item.isnumeric():
#             result += int(item)
#     return result

# r = sumNumber("3as3d34fg4h4jk5l")
# print(r)


# *----------------------------------------------------------
# !PYRAMID

# def pyramid(n: int) -> str:
#     for i in range(n):
        # print(" "*(n-i) + "*"*(2*i+1))
        # print(" "*(n-i) + "* "*(i))


# pyramid(10)
