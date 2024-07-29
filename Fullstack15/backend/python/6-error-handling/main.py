# Errors in python

# 1. Compile time  
#    ex: Syntax error
# 2. Logical
#    ex: 2 + 2 == 5 ?
# 3. Run time 
#    ex: 1/0

# answer = int('input("Enter a number: ")')
# print("answer: ", answer)
# print("10 / answer: ", 10 / answer)

# =========================================================================
# =========================================================================
# ERROR TYPES
# 1. SyntaxError  =>  '...  => not closed string
#     RU: не закрытая строка
#     ex: print('Hello world)

# 2. TypeError    =>  1 + '...'  =>  unsupported operand type(s) for +: 'int' and 'str'
#     RU: неподдерживаемый тип операнда (ы) для +: 'int' и 'str'
    
#     ex: print(1 + 'Hello world')

# 3. NameError    =>  x  =>  name 'x' is not defined
#     RU: имя 'x' не определено

#     ex: print(x)

# 4. IndexError   =>  [1, 2, 3][3]  =>  list index out of range
#     RU: индекс списка вне диапазона

#     ex: print([1, 2, 3][3])

# 5. ValueError   =>  int('...')  =>  invalid literal for int() with base 10: '...'
#     RU: недопустимый литерал для int() с основанием 10: '...'

#     ex: print(int('Hello world'))


# 6. KeyError     =>  {'a': 1}['b']  =>  'b' =>  not in dictionary
#     OBJECT in JS     ===     DICTIONARY in Python
#     RU: 'b' => не в словаре

#     ex: print({'a': 1}['b'])

# 7. AttributeError  =>  'Hello'.append('!')  =>  'str' object has no attribute 'append'
#     RU: объект 'str' не имеет атрибута 'append'

#     ex: print('Hello'.append('!'))
    
# 8. ZeroDivisionError  =>  1 / 0  =>  division by zero
#     RU: деление на ноль

#     ex: print(1 / 0)
    
# 9. ImportError  =>  import test  =>  No module named 'test'
#     RU: нет модуля с именем 'test'

# 10. IndentationError  =>  def func():  =>  expected an indented block
#     RU: ожидался отступный блок

#     - Forgetting to indent the code inside a function, while, for, or if statement.
#     RU: Забывая отступить код внутри функции, while, for или if оператора.

# print('BEFORE ...')
# print("Open refregirator")
# try:
#     # print(int("w"))
#     print(10 / 0)
#     # "".append()
# except ZeroDivisionError as e:
#     print("Can not devide by 0")
# except TypeError as e:
#     print("TYPE error")
# except ValueError as e:
#     print("VALUE error")
# except Exception as e:
#     print("UNKNOWN ERROR HAPPENED ...")
# finally:
#     print("Close refregirator")

# print('AFTER ...')


# -----------------
# usage of KEYWORD  ==>>  raise
# -----------------
# def my_fn(x:int) -> int:
#     # if not isinstance(x, int):
#     # if not x.isnumeric():
#     if type(x) != int:
#         raise TypeError('Bemiyya!!!  Nomer yoz!!!')
#         # throw new Error(...)
#     return x*x

# print(my_fn(10))

# =========================================================================
# =========================================================================
# In JavaScript
# try {}  catch {}  =>  попробуй, если получится, а если нет то перехвати ошибку

# In Python
# try: ...   except: ...  => попробуй, если получится, а если нет то пропускай ошибку

# x = 2
# z = "123"

# print("BEFORE ...")
# try:
#     print(x/z)
# except ZeroDivisionError as error:
#     print("Нельзя делить на ноль! - ", error)
# except Exception as error:
#     print("Вообще не понял - ", error)

# print("AFTER ...")
# -----------------------------------------------
# IF WE WANT TO USE MULTIPLE EXCEPTIONS

# try:
#     print(x)
# except (NameError, TypeError) as e:
#     print('Переменная не объявлена')
# -----------------------------------------------
# Block - FINALLY
# Works in any case  ->  сработает в любом случае

# try:
#     print("open file")
#     print(2/0)
# except Exception as e:
#     print(e)
# finally:
#     print("close file")

# ============================================================================
# =============================================================================
# 2==2 ? True : False  => In JavaScript
# -------------------------------------
# Ternary operator in Python
# "Yes" if condition==True else "No"
# print(True) if 2==2 else print(False)

# if 2==2:
#     print('Yes')
# else:
#     print('No')
# =========================================================================
# =========================================================================
# SSD => Solid State Drive
# HDD => Hard Disk Drive

# 2e10  # 2 * 10^10
# 20000000000

# Generators
# def fibonacci(n):
#     # for i in range(3e9): # 3000000000
#     #     print(i)
#     a, b = 0, 1
#     for _ in range(n):
#         yield a
#         a, b = b, a + b

# # Create a generator for the first 10 Fibonacci numbers
# fib = fibonacci(10)

# # Print the Fibonacci numbers
# for num in fib:
#     print(num)

# In this example, the fibonacci function is a generator that yields 
# the first n Fibonacci numbers. We create a generator fib for the first 
# 10 Fibonacci numbers, and then we use a for loop to print each number. 
# This is more memory-efficient than creating a list of the first n 
# Fibonacci numbers, especially for large n.