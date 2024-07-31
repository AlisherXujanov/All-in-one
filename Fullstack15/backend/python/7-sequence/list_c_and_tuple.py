# LIST COMPREHENSION
# RU: Списковое включение - это способ построения нового списка,
# применяя выражение к каждому элементу последовательности.

# SYNTAX:  [... for ... in [...] if condition == True]

# nums = [1, 2, 3, 4, 5]
# pool = [n for n in nums if n % 2 != 0]
# pool = ["Even" if n % 2 == 0 else "Odd" for n in nums]
# print(pool)
# pool = []
# for n in nums:
#     if n % 2 != 0:
#         pool.append(n)
# print(pool)


# ===============================================================================
# ===============================================================================
# ===============================================================================
# ===============================================================================

############################ List comprehension
# [ <expression> for x in <sequence> if <condition> ]
##-----------------------------------------------------
data = [2,3,5,7,11,13,17,19,23,29,31]

# Ex1: List comprehension: updating the same list
data = [x+3 for x in data]
print("Updating the list: ", data)

# Ex2: List comprehension: creating a different list with updated values
new_data = [x*2 for x in data]
print("Creating new list: ", new_data)

# Ex3: With an if-condition: Multiples of four:
fourx = [x for x in new_data if x%4 == 0 ]
print("Divisible by four", fourx)

# Ex4: Alternatively, we can update the list with the if condition as well
fourxsub = [x-1 for x in new_data if x%4 == 0 ]
print("Divisible by four minus one: ", fourxsub)

# Ex5: Using range function:
nines = [x for x in range(100) if x%9 == 0]
print("Nines: ", nines)
# ---------------------------------------------
users = ['Aziz', 'Jomol', "Farzod", "Diana", "Laziz"]

# [x…() for … in … if … ]

z = [ name for name in users if name.endswith('z') ]
for name in users:
    if name.endswith('z'):
        z.append(name)
        
# ---------------------------------------------

# [if … else for … in … ]
a = [ name if name.endswith('z') else 'Not Found' for name in users ]
for name in users:
    if name.endswith('z'):
        a.append(name)
    else:
        a.append('Not Found')

# ---------------------------------------------
        
arr = range(100)
s = [f"Even {num}" if num%2==0 else f"Odd {num}" for num in list(arr) if num<50]
# for num in list(arr):
#     if num%2==0:
#         s.append(f"Even {num}")
#     else:
#         s.append(f"Odd {num}")
# print(s)
# ---------------------------------------------
# def double(arr):
#     return [num*2 for num in arr]
# print(double([1,2,3,4,5,6,7,8,9,10]))
# ---------------------------------------------


############################ TUPLE
# []  =>  mutable           =>  Можно изменять
# ()  =>  immutable         =>  Нельзя изменять
# ---------------------------------------------
# Tuple comprehension
# x = tuple([fruit.title() for fruit in x])
# for item in x:
#     print(item.upper())
# ---------------------------------------------
# ordered      =>  means that every item has its own index starting from 0 
#              RU: каждый элемент имеет свой индекс, начиная с 0
# unchangeable =>  means that we can not change the items after the tuple 
#                  has been created
#              RU: после создания кортежа мы не можем изменить его элементы
# Tuple Length  =>  len()

########### Двоичная система
# 0 = 0
# 1 = 1
# 2 = 10
# 3 = 11
# 4 = 100
# 5 = 101
# 6 = 110
# 7 = 111
# 8 = 1000
# 9 = 1001
# 10 = 1010
# 11 = 1011
# 12 = 1100
# ...


########### Fibonacci
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...
# We have to add the last two numbers to get the next number
# RU: Мы должны добавить последние два числа, чтобы получить следующее число
# --------------------------------------------------------------------------

# Create Tuple With One Item   =>   ('...',)
# tuple()                      =>   tuple([..., ...])
# Change Tuple Values          =>   x = list(("apple", "banana", "cherry")) 

# Unpacing 
# let [x,y] = [1, 2]

# Using Asterisk*   ||    _ * _   ||   _ _ *
# a, *b, c = ("apple", "banana", 'berry', "cherry")
# a = "apple"
# b = ["banana", "berry"]
# c = "cherry"
# -------------------------------------------------------------------
# -------------------------------------------------------------------
# Multiply 
# print(("apple", "banana", "cherry") * 2)

# -------------------------------------------------------------------
# append()	Adds an element at the end of the list
# RU:      Добавляет элемент в конец списка
# clear()	Removes all the elements from the list
# RU:      Удаляет все элементы из списка
# copy()	Returns a copy of the list
# RU:      Возвращает копию списка
# count()	Returns the number of elements with the specified value
# RU:      Возвращает количество элементов с указанным значением
# extend()	Add the elements of a list (or any iterable), to the end of the current list
# RU:      Добавляет элементы списка (или любого итерируемого объекта) в конец текущего списка
# index()	Returns the index of the first element with the specified value
# RU:      Возвращает индекс первого элемента с указанным значением
# insert()	Adds an element at the specified position
# RU:      Добавляет элемент в указанную позицию
# pop()	    Removes the element at the specified position
# RU:      Удаляет элемент в указанной позиции
# remove()	Removes the item with the specified value
# RU:      Удаляет элемент с указанным значением
# reverse()	Reverses the order of the list
# RU:      Изменяет порядок списка на обратный
# sort()	Sorts the list (changes the original)          [].sort()
# RU:      Сортирует список (изменяет оригинал)
# sorted()	Sorts the list (does not change the original)  sorted([])
# RU:      Сортирует список (не изменяет оригинал)