
lesson = "Dictionaries  =>  словарь"
# DICTIONARIES 


# Словари - это структуры данных, которые хранят данные в виде пар ключ-значение.
x = {
    "first": "Один",    "second": "Два",
    "third": "Три",     "fourth": "Четыре",
    "fifth": "Пять",    "sixth": "Шесть",
    "seventh": "Семь",  "eighth": "Восемь",
}
# print(x["fourth"]) # => Четыре 
# print(x["www"]) # => # Error if not found
# print(x.get("www"))              # None
# print(x.get("www", "Not found")) # None


# ------------------------------------------------
# z = [ "Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь" ]
# for i in z:
#     if i == "Четыре":
#         print(i)
# NOTE:
# If there are 1000 doors, when using list and seeking some of them,
# the loop we are using, opens every door one by one to check them
# But, if we use dictionary here, it directly opens the needed one.
# RU: Если есть 1000 дверей, когда мы используем <list> и ищем 
# некоторые из них, цикл, который мы используем, открывает каждую дверь
# по одной, чтобы проверить их. Но, если мы используем здесь <dict>,
# он сразу же открывает нужную.
# ------------------------------------------------
# IN JAVA-SCRIPT
# function Person(name, ..., ...) {
#     this.name = name
#     this.name = name
#     this.name = name
#     ...
# }
# let person1 = new Person(..., ..., ...)
# ------------------------------------------------
# IN PYTHON
# dict()  =>  dict(key=value, key=value, key=value)
# person = dict(name='Kamron', bemiyya=True)
# print(person)
# list()  => []
# str()   => ''
# int()   => 0
# float() => 0.0
# bool()  => False
# dict()  => {}
# set()   => set()


# # ACCESSING ITEMS ---------------------------------------------------------------------------
# {...}[key]         => берёт значение по ключу
# {...}.get(key)     => берёт значение по ключу
# {...}.get(key, default)  => берёт значение по ключу, если его нет, то возвращает default


# Object.keys({...}) => возвращает список ключей (JS)
# {...}.keys()       => возвращает список ключей

# Object.values({...}) => возвращает список ключей (JS)
# {...}.values()     => возвращает список значений

# Object.entries({...}) => возвращает список ключей (JS)
# {...}.items()      => возвращает список кортежей (ключ, значение)

# person1 = dict(name='Javox', bemiyya='True')
# print(list(person1.items()))


# # ADDING ITEMS -----------------------------------------------------------------------------
# person1 = dict(name='Mirsaid', bemiyya=False)
# print(person1.items())
# person1['bemiyya'] = True
# person1['...'] = "..."
# person1[1] = 1
# print(person1.items())
# -----------------
# Update => updates the dict (changes the original)
# dict.update({key:value, key:value, key:value})
# person1.update({
#     "name": "Alex", 
#     "address": "Samarkand", 
#     "bemiyya":True
# })
# print(person1)
# When updating a dict, if the key exists, it updates the value
# If the key does not exist, it adds a new key:value pair
# RU: При обновлении словаря, если ключ существует, он обновляет значение
# Если ключ не существует, он добавляет новую пару ключ: значение


# ==========================================================================================
# ==========================================================================================
# ==========================================================================================
# If the key is not found, a new key:value pair is added to the dictionary.
# RU: Если ключ не найден, в словарь добавляется новая пара ключ: значение.

# But if it exists, then the value of the key is NOT updated.
# RU: Но если он существует, то значение ключа НЕ обновляется.
# dict.setdefault(key, value)
# person1 = dict(name='Mirsaid', bemiyya=False, address="SAMARKAND")
# person1.setdefault("address", "Tashkent")
# print(person1)



# # REMOVING ITEMS ---------------------------------------------------------------------------
# person1 = dict(name='Mirsaid', bemiyya=False)
# dict.pop(key)
# del_val = person1.pop('name')
# print("del_val: ", del_val)
# print("person1: ", person1)
# -------------------------------------
# dict.pop(key, default)
# res = person1.pop('www', "Not found")
# print("Result: ", res)
# print(person1)
# -------------------------------------
# dict.popitem() => removes the last inserted item
# res = person1.popitem()
# print("Result: ", res)
# print("Remaining: ", person1)
# -------------------------------------
# del dict[key]
# del person1['bemiyya']
# del person1 # deletes the whole dict
# print("Remaining: ", person1)


# ============================================================================================
# # MERGE ------------------------------------------------------------------------------------
# ============================================================================================
# person1 = dict(name='Mirsaid', bemiyya=False)
# person2 = dict(name="Covid", contageous=True)
# person3 = dict(name="Bemiyya", widespread=True)
# -----------------------------------
# SYNTAX of PIPE (|) operator
# dict1.update(dict2)
# dict1 |= dict2
# dict1 |= dict2 | dict3 | dict4
# -----------------------------------
# print("Before: ", person1)
# person1 |= person2    # ===  person1.update(person2)
# print("After: ", person1)
# person1 |= person2 | person3
# print("After: ", person1)
# -----------------------------------

# def test(a, b, *args, **kwargs):
#     ...

# l1 = [1, 2, 3]
# l2 = [4, 5, 6]
# l3 = [*l1, *l2]

# {**dict1, **dict2, **dict3, **dict4}
# result = {**person1, **person2, **person3}
# print("New: ", result)

# -----------------------------------
# a = {**person, **person2, **person3 } 
# works like spread operator in JS
# -----------------------------------


# # OTHER METHODS ----------------------------------------------------------------------------
# person = dict(name='Mirsaid', bemiyya=False)

# dict.clear()
# dict.copy()

# for key, val in person.items():
#     person[key] = ""

# p2 = person.copy()
# p2.update({"name":"Ali"})
# print(p2)
# print(person)


# list, tuple, str, range
# dict.fromkeys(iterable, value)  -> is used to create a new dictionary from the given 
#                                    sequence of elements with a value provided by the user.
# EX: 
# r = dict.fromkeys(range(100), '...')
# print(r)

# fruits = ['apple', 'mango', 'banana']
# result = dict.fromkeys(fruits, 0)
# print(result)
# result['apple'] = '$5'
# print(result)

# x = dict.fromkeys(['name', 'age'], 'unknown')
# print(x)

# # --------------------------------------------------------------------------------------------
# # --------------------------------------------------------------------------------------------
# from random import randint
# def random_dict_of_github_issue_ids(stop: int, max_count: int, start: int = 0):
#     return dict.fromkeys(
#         [str(randint(start, stop)) for _ in range(randint(0, max_count))], ""
#     )
# print(random_dict_of_github_issue_ids(100, 10))
# # --------------------------------------------------------------------------------------------
# # --------------------------------------------------------------------------------------------
# zip() function
# zip(iterator1, iterator2, ...)
# Result: ...(zip object)  =>  (1, 'a'), (2, 'b'), (3, 'c')

# itr1 = list('abcdefghijklmnopqrstuvwxyz')
# itr2 = range(len(itr1))
# zipped = zip(itr1, itr2)

# print(list(zipped))

# for (item, item2) in zipped:
#     print(item, item2)

# # --------------------------------------------------------------------------------------------
# # DICTIONARY COMPREHENSIONs-------------------------------------------------------------------

# Using range() function and no input list
# usingrange = {x:x*2 for x in range(12)}
# print("Using range(): ",usingrange)

# # Using one input list
# numdict = {x:x**2 for x in number}
# print("Using one input list to create dict: ", numdict)

# # Lists
# months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
# number = [1,2,3,4,5,6,7,8,9,10,11,12]

# # Using two input lists
# months_dict = {key:value for (key, value) in zip(number, months)}
# print("Using two lists: ", months_dict)


# person = { "name":"Mirsaid",   "bemiyya":False }
# new_person = {val:key for key,val in person.items()}
# print(new_person)




# HOMEWORK
# https: //www.w3resource.com/python-exercises/dictionary/

