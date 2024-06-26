# ЗАДАНИЕ 1
# name = 'Джон'
# admin = name
# print("Admin: ", admin)
# ----------------------------------------------------------
# ----------------------------------------------------------
# ЗАДАНИЕ 2

# def income(deposit:int,interestRate:int):
#     depositIncome = deposit / 100 * interestRate
#     print(depositIncome)

# income(10000,0.1)

# ----------------------------------------------------------
# ----------------------------------------------------------
# ЗАДАНИЕ 3

# def restoraunt(friends:int,bill:int,tip:int):
#     all_tip = bill / 100 * tip
#     bill_with_tip = all_tip + bill
#     result = bill_with_tip / friends
#     print("Каждому нужно заплатить по ",result)


# restoraunt(2,47.28,15)
# ----------------------------------------------------------
# ----------------------------------------------------------
# ЗАДАНИЕ 4

# ----------------------------------------------------------
# ----------------------------------------------------------
# ЗАДАНИЕ 5

# def priceWithDiscount(price:int,discount:int):
#     discountInMoney = price / 100 * discount
#     result = price + discountInMoney
#     print(result)

# priceWithDiscount(5000,0.2)


# ----------------------------------------------------------
# ----------------------------------------------------------
# ЗАДАНИЕ 6
# print(2+2/((2+2)+(2**2)))

# ----------------------------------------------------------
# ----------------------------------------------------------
# ----------------------------------------------------------
# ----------------------------------------------------------

# BEGINNER LEVEL

# ----------------------------------------------------------
# ЗАДАНИЕ 1

# def number(num:int):
#     if num > 0:
#         print("Число",num,"положительная!")
#     elif num < 0:
#         print("Число",num,"отрицательное!")
#     else:
#         print("Число",num," Ноль!")

# number(2)
# ----------------------------------------------------------
# ЗАДАНИЕ 2

# def even_odd(num:int):
#     if num % 2 == 0:
#         print(f"{num}: Even")
#     else:
#         print(f"{num}: Odd")

# answer = input("Enter number: ")

# if answer.isnumeric():
#     even_odd(int(answer))
# else:
#     print("Please enter a number ‼️")

# ----------------------------------------------------------
# ЗАДАНИЕ 3

# def threeFive(num:int):
#     if num % 5 == 0 and num % 3 == 0:
#         print("YES")
#     else:
#         print("NO")

# threeFive(10)

# ----------------------------------------------------------
# ЗАДАНИЕ 4

# def isEmpty(something):
#     return len(something) == 0

# answer = input("Enter something: ")
# result = isEmpty(answer)
# if result:
#     print("Empty")
# else:
#     print("Not empty")

# ----------------------------------------------------------
# ЗАДАНИЕ 5

# def include(text: str, letter: str):
#     if letter in text:
#         print("YES!")
#     else:
#         print("NO!")


# include("Hello world", "l")

# ----------------------------------------------------------
# ЗАДАНИЕ 6
# startswith(...)

# text = input("Enter something: ")
# letter = input("Enter letter: ")

# if text.lower().startswith(letter.lower()):
#     print(f"{text} starts with {letter}")
# else:
#     print(f"{text} DOES NOT start with {letter}")

# ----------------------------------------------------------
# ЗАДАНИЕ 7
# def fizzBuzz(num:int):
#     if num % 15 == 0:
#         print("FIZZBUZZ")
#     elif num % 5 == 0:
#         print("BUZZ")
#     elif num % 3 == 0:
#         print("FIZZ")
#     else:
#         print(num)

# fizzBuzz(9)

# ----------------------------------------------------------
# ЗАДАНИЕ 8
# def polindrome(something):
#     perevornutiy = something[::-1]
#     if perevornutiy == something:
#         print("POLINDROME")
#     else:
#         print("NOTPOLINDROME")

# polindrome("madam")

# ----------------------------------------------------------
# ЗАДАНИЕ 9
# PRIME NUMBER   ->   1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 37 

# number = input("Enter number: ")
# if number.isnumeric():   #  if "123..."
#     number = int(number) #  "123"  =>  123
#     # if number == 1 or number == 2 or number == 3 or number == 5 or number == 7:
#     if number in [1, 2, 3, 5, 7]:
#         print("Prime")
#     elif number % 2 == 0 or number % 3 == 0 or number % 5 == 0 or number % 7 == 0:
#         print("NOT Prime")
#     else:
#         print("Prime")
# else:
#     print("Please enter a number ‼️")

