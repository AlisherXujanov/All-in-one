import random
# DICTS
# *―----------------------------------------------------------
# !------------------BEGINNER LEVEL(Newbie)------------------
# *-----------------------------------------------------------
# !TASK 1
# Создайте объект под названием car с следующими свойствами: brand, model, color, year.
# Выведите каждое свойство в консоль

# print("Welcome to car factory.Write the properties of the car you want!")
# print("================================================================")
# brandOfCar = input("Enter brand of car you want: ").upper()
# modelOfCar = input("Enter model of car you want: ").upper()
# colorOfCar = input("Enter color of car you want: ").title()
# yearOfCar = input("Enter year of car you want: ")
# car = {}
# car["brand"] = brandOfCar
# car["model"] = modelOfCar
# car["color"] = colorOfCar
# car["year"] = yearOfCar
# print(list(car))


# *----------------------------------------------------------
# !TASK 2
# У вас есть объект, получите длину ключей и значений объекта.

# car = {'brand': 'BMW', 'model': 'M5', 'color': 'Green', 'year': '2024'}
# keylen = [len(i) for i in car.keys()]
# vallen = [len(i2) for i2 in car.values()]
# print(list(zip(keylen, vallen)))

# print(len(car.items()))

# *----------------------------------------------------------
# !TASK 3
# Создайте функцию, которая принимает объект и ключ в качестве  параметров.
# Затем удалите ключ из объекта и верните оставшийся объект.

def deleteKey(obj: dict, key: str) -> dict:
    copy = obj.copy()
    del copy[key]
    return copy


# car = {'brand': 'BMW', 'model': 'M5', 'color': 'Green', 'year': '2024'}
# r = deleteKey(car, 'color')
# print(r)

# *----------------------------------------------------------
# !----------------INTERMEDIATE LEVEL(Junior)----------------
# *----------------------------------------------------------
# !TASK 1
# Создайте функцию, которая принимает объект в качестве параметра и возвращает
# сумму всех значений, которые являются числами.
def sumNumericItems(obj: dict) -> dict:
    result = 0
    for key, val in obj.items():
        for letter in str(key):
            if letter.isnumeric():
                result += int(letter)
        for letter in str(val):
            if letter.isnumeric():
                result += int(letter)
    return result


car = {'brend': 'BMW', 'model': 'M5', 'color': 'Green', 'year': '2024'}
# print(sumNumericItems(car))

# *----------------------------------------------------------
# !TASK 2
# Создайте функцию, которая принимает объект в качестве параметра и преобразует
# каждый ключ в обратный регистр(назад-вперёд) и возвращает новый объект.


def reversedKeys(obj: dict) -> dict:
    # lenOfKey = [key[::-1] for key in obj.keys()]
    # return list(zip(lenOfKey, obj.values()))
    return {key[::-1]: val for key, val in obj.items()}


car = {'brand': 'BMW', 'model': 'M5', 'color': 'Green', 'year': '2024'}
# print(reversedKeys(car))

# *----------------------------------------------------------
# !TASK 3
# Создайте функцию, которая принимает столько объектов, сколько захотите, и
# возвращает объект, который содержит все ключи и значения переданных объектов


def uniteObject(*args) -> dict:
    pool = {}
    for obj in args:
        pool.update(obj)
    return pool


dict1 = {'brand': 'BMW', 'model': 'M5'}
dict2 = {'color': 'Green', 'year': '2024'}
dict3 = {'price': '10000', 'engine': 'V8'}
r = uniteObject(dict1, dict2, dict3)
# print(r)


# *----------------------------------------------------------
# !TASK 4
# Создайте функцию, которая принимает объект в качестве параметра и возвращает
# объект, отсортированный по его ключам


def sortedObject(obj: dict) -> dict:
    sorted_keys = sorted(obj.keys())
    return {key: obj[key] for key in sorted_keys}


obj = {"w": 1, "a": 2, "c": 3, "b": 4}
# print(sortedObject(obj))


# *----------------------------------------------------------
# !TASK 5
# Создайте функцию, которая принимает объект в качестве параметра
# и возвращает объект, отсортированный по его значениям(а не ключам).


def sortedObject(obj: dict) -> dict:
    sorted_vals = sorted(obj.values())
    pool = {}
    for item in sorted_vals:
        for key in obj.keys():
            if obj[key] == item:
                pool[key] = item
    return pool


obj = {"a": 5, "b": 3, "c": 7, "d": 1, "e": 2}
# print(sortedObject(obj))


# *----------------------------------------------------------
# !-------------------ADVANCED LEVEL(Pro)-------------------
# *----------------------------------------------------------
# !TASK 1
# Напишите функцию, чтобы подсчитать, сколько раз каждое
# значение встречается в объекте.

def reapetedValue(obj: dict) -> dict:
    result = {}
    for value in obj.values():
        result[value] = result.get(value, 0) + 1
    return result


obj = {"a": 5, "b": 3, "c": 7, "d": 1,
       "e": 2, "f": 5, "g": 3, "h": 7,
       "i": 1, "j": 2
       }
# output: {5: 2, 3: 2, 7: 2, 1: 2, 2: 2}
ed_values = reapetedValue(obj)
# print("count", ed_values)

# *----------------------------------------------------------
# !TASK 2
# Напишите функцию, чтобы получить копию объекта, где ключи
# стали значениями, а значения ключами.


def replaceDict(obj: dict) -> dict:
    # CopyOfObj = obj.copy()
    # key = CopyOfObj.keys()
    # val = CopyOfObj.values()
    # return f"{obj} \n{list(zip(val, key))}"
    return {val: key for key, val in obj.items()}


car = {'brand': 'BMW', 'model': 'M5', 'color': 'Green', 'year': '2024'}
# print(replaceDict(car))

# *----------------------------------------------------------
# !TASK 3
# Напишите программу, чтобы получить максимальное и минимальное
# значения (если это число) в словаре.


def find_min_max_values_in_dict(obj: dict) -> dict:
    numbersD = [int(v) for v in obj.values() if str(v).isnumeric()]
    minN = min(numbersD)
    maxN = max(numbersD)

    return f"Min number: {minN}\nMax number: {maxN}"


car = {'a': 10, 'b': 5, 'c': 'hello', 'd': 3}
# print(find_min_max_values_in_dict(car))

# *----------------------------------------------------------
# !TASK 4:
# Вам надо найти количество людей одного типа из массива и сохранить
# их в массив категории. В массиве категорий специально допущены ошибки
# (исходный массив менять нельзя)

people = [
    {
        "id": random.randrange(1, 100),
        "name": 'Timur',
        "info": {
            "school": '235',
            "faculity": 'SMM'
        },
    },
    {
        "id": random.randrange(1, 100),
        "name": 'Imran',
        "info": {
            "school": 'ne izvestno',
            "faculity": 'programming'
        },
    },
    {
        "id": random.randrange(1, 100),
        "name": 'Aminjon',
        "info": {
            "school": '444',
            "faculity": 'Dizayn'
        },
    },
    {
        "id": random.randrange(1, 100),
        "name": 'Maxmud',
        "info": {
            "school": '777',
            "faculity": '3dsmax'
        },
    },
    {"id": random.randrange(1, 100),
        "name": 'Muxammad',
        "info": {
            "school": '5555',
            "faculity": 'Backend'
    },
    },
    {
        "id": random.randrange(1, 100),
        "name": 'Timur',
        "info": {
            "school": '235',
            "faculity": 'SMM'
        },
    },
    {
        "id": random.randrange(1, 100),
        "name": 'Imran',
        "info": {
            "school": 'ne izvestno',
            "faculity": 'programming'
        },
    },
    {
        "id": random.randrange(1, 100),
        "name": 'Aminjon',
        "info": {
            "school": '444',
            "faculity": 'Dizayn'
        },
    },
    {
        "id": random.randrange(1, 100),
        "name": 'Maxmud',
        "info": {
            "school": '777',
            "faculity": '3dsmax'
        },
    }, {
        "id": random.randrange(1, 100),
        "name": 'Maxmud',
        "info": {
            "school": '777',
            "faculity": '3dsmax'
        },
    },
    {
        "id": random.randrange(1, 100),
        "name": 'Muxammad',
        "info": {
            "school": '5555',
            "faculity": 'Backend'
        },
    },
]
categories = [
    {
        "course": ' SMM',
        "count": 0
    },
    {
        "course": 'PROGRAMMING',
        "count": 0
    },
    {
        "course": '     3DSMAX',
        "count": 0
    },
    {
        "course": ' DIZAYN',
        "count": 0
    },
    {
        "course": '   BACKEND',
        "count": 0
    }
]
for user in people:
    user_faculity = user['info']['faculity'].strip().title()
    user["info"]["faculity"] = user_faculity
    for category in categories:
        c_course = category["course"].strip().title()
        category["course"] = c_course
        if user_faculity == c_course:
            category["count"] += 1
            
# print(categories)

# *----------------------------------------------------------
# !TASK 5:
# Получите всех пользователей по этой ссылке https: // jsonplaceholder.typicode.com/users ...
# и разделите их по окончаниям электронной почты (например: com, net, org и т. д.). Для
# этого создайте функцию и передайте массив объектов(пользователей) в качестве
# параметра.Таким образом, функция вернет объект, где каждый ключ - это окончание
# электронной почты, а значение - количество пользователей с таким окончанием
# электронной почты

# OUTPUT  ==  {"com":2,  "net":5,  "org": 3,  "io": 1}

people = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",

        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
