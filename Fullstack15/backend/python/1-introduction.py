# Syntax
# print(..., end=’’, sep=’’)
# Variables
# de + structuring
# global variables
# del
# Casting
# int(), str(), float(), type()
# Simple functions
# ====================================================================


# IN Python
# ------------
# name_of_var = "Hello world"
# # print(name_of_var)
# print(f"""
#     This is test
#     {name_of_var}
# """)

# triple "   =>   Multiline comment
# '''...'''   =>  Multiple comment
# "..."   =>   String (text)
# '...'   =>   String (text)

# String(123) => "123"  => in JS
# str(123)    => "123"  => in Python

# 123  ->  int
# my_num = 123

# print("Hello world")
# print(str(my_num))

# ----------------------------------------
# int()   =>   parseInt()
# type()  =>   typeof()
# ----------------------------------------
# print(int(123.5))  # 123
# print(float(123))  # 123.0

# print(int("123"))    # 123  == int
# print(float("123"))  # 123.0 == float

# print(int("123"))    # Error
# ----------------------------------------
# print(type("123"))      # <class 'str'>
# print(type(int("123")))  # <class 'int'>
# print(type(float("123")))  # <class 'float'>
# ----------------------------------------
# `${...}`  => String template   => JS
# f'..{}.'   =>  Formatted string  => Python
# ----------------------------------------
# print("This is", test,  end="!!!", sep="---")
# print("Hello", "World", "again", '...', sep="-", end="!!!")
# ----------------------------------------
# TEST = 'Hello world'       # Global variable
# TEST = "Updated text"      # Update global variable
# print(TEST)
# ----------------------------------------
# x = [1, 2, 3]
# x = '1234567890'
# a = x[0]
# b = x[1]
# c = x[-1]
# a, b, *c = x
# print(a, b, c, sep="-")
# ----------------------------------------
# x = [1, 2, 3, 4, 5, 6, '...']
# first, *others, last = x
# print(first)
# print(others)
# print(last)
# ----------------------------------------
# function ...() {}
# def ...():   #  =>  def == define
# ____...

# def test():
#     global x, y
#     x = 10
#     y = 20
#     print("Hello world")  # this is inside function

# test()                # This line calls function
# print("Hello world")  # this line is out of function
# print(x)              # This line calls global variable
# -------------------------------------------------------
# x = 10
# print(x)
# del x
# print(x)
# -------------------------------------------------------

# let x = {
#     name: 'John',
# }
# x = {"name": 'John'}
# del x['name']
# print(x)

# -------------------------------------------------------
# input   =>  allows us to get input from user
# answer = input("How are you? ")
# print("You typed: " + answer)
# -------------------------------------------------------
# if ...:
#     ...
# elif ...:
#     ...
# else:
#     ...

# n = 20
# if n == 5:
#     print("n is 5")
# elif n == 10:
#     print("n is 10")
# elif n == 15:
#     print("n is 15")
# else:
#     print("n is not 5, 10, 15")