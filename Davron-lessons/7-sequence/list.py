# 1. list   => [1, 2, 3, 4, 5]
# 2. tuple  => (1, 2, 3, 4, 5)
# 3. text   => "Hello, World!"
# 4. range  => range(10)


# ---------------------------------------------------------
# range(10)              => range(0, 10)
# list(range(10))        => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# range(10, 20)    #     => range(10, 20)
# range(10, 20, 2) #     => range(10, 20, 2)
# list(range(10, 20, 2)) => [10, 12, 14, 16, 18]
# ---------------------------------------------------------
# for (let i=0; i<10; i++) {}
# for num in range(10):
#     print(num)
#     # num = num + 1
#     num += 1
# typeof([])        =>  object          -> in JS
# print(type([]))   =>  <class 'list'>  -> in Python
# ---------------------------------------------------------
# UPDATE
# fruits = ['apple', 'banana', 'cherry']
# fruits[1] = 'kiwi'   # ['apple', 'kiwi', 'cherry']
# fruits[:2] = ['kiwi', 'orange']  # ['kiwi', 'orange', 'cherry']
# fruits[:2] = 'kiwi' # ['k', 'i', 'w', 'i', 'cherry']
# fruits[:] = ['kiwi']  # ['kiwi']
# print(fruits)

# x_list[...:...] = [...]   =>  updates from ... to ... by [...]
# ---------------------------------------------------------
# ADD
# fruits = ['apple', 'banana', 'cherry']
# [].insert(position, element_to_add) => вставлять
# [].append()  =>  добавит элемент в конец листа
# [].extend()  =>  добавит элементы в конец листа

# fruits.insert(1, 'kiwi')  # ['apple', 'kiwi', 'banana', 'cherry']
# fruits.append('orange')   # ['apple', 'banana', 'cherry', 'orange']
# fruits.extend(('orange', 'mango'))  # ['apple', 'banana', 'cherry', 'orange', 'mango']
# ---------------------------------------------------------
# REMOVE
# fruits = ['apple', 'banana', 'cherry']

# "..." in x  =>  проверяет есть ли элемент в листе
# [].pop()     =>  удаляет последний элемент
# [].remove()  =>  удаляет элемент по значению

# fruits.remove('banana')  # ['apple', 'cherry']
# fruits.pop()             # ['apple', 'banana']
# fruits.pop(0)            # ['banana', 'cherry']
# ---------------------------------------------------------
# COPY
# [].copy() => копирует лист

# fruits = ['apple', 'banana', 'cherry']
# x = fruits.copy()
# x.pop()
# print("X:", x)
# print("Fruits:", fruits)

# ---------------------------------------------------------
# SORT

# numbers = [100, 50, 65, 82, 23]

# numbers.sort()
# print(numbers)  # [23, 50, 65, 82, 100]
# --------------------------------------
# x = sorted(numbers)
# print(x)  # [23, 50, 65, 82, 100]
# print(numbers)  # [100, 50, 65, 82, 23]
# --------------------------------------
# WITH KEY
# ----------
# EXAMPLE 1
# words = ['a', 'aaaa', 'aa', 'aaa', 'wwwwwww', 'bbbbb']
# words.sort(key=len)
# print(words)

# [].sort(reverse=True)  => меняет оригинальный лист
# sorted([])             => не меняет оригинальный лист 
#                           и можно присвоить новой переменной
# ---------------------------------------------------------
# REVERSE
# [].reverse() =>  меняет оригинальный лист
# reversed([]) =>  не меняет оригинальный лист
#                  и можно присвоить новой переменной

# nums = [1, 2, 3, 4, 5]
# nums.reverse()
# print(nums)  # [5, 4, 3, 2, 1]

# x = reversed(nums)
# print(list(x))