
_2 = 'Polymorphism and Encapsulation and Decorators'
"""
################ Polymorphism
# Polymorphism allows you define one interface and have multiple implementations.
# Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.

class Character:
    def attack(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Soldier(Character):
    def attack(self):
        return 'Soldier shoots a gun!'

class Alien(Character):
    def attack(self):
        return 'Alien uses a laser beam!'

class Robot(Character):
    def attack(self):
        return 'Robot uses a mechanical arm!'


#############################################################################################
################ Encapsulation
# is used to restrict access to methods and variables.
# This prevents data from direct modification which is called encapsulation.

# class A:
    # def __init__(self):
    #     self._a = 2.  # Protected member ‘a’
    #     self.__b = 2.  # Private member ‘b’

# Real world example
class BankAccount:
    def __init__(self):
        self.__account_number = None
        self.__pin = None
        self.__balance = 0

    def set_account_details(self, account_number, pin):
        self.__account_number = account_number
        self.__pin = pin

    def get_balance(self, account_number, pin):
        if self.__account_number == account_number and self.__pin == pin:
            return self.__balance
        else:
            return "Invalid account details"

    def deposit(self, account_number, pin, amount):
        if self.__account_number == account_number and self.__pin == pin:
            self.__balance += amount
            return "Deposit successful"
        else:
            return "Invalid account details"

    def withdraw(self, account_number, pin, amount):
        if self.__account_number == account_number and self.__pin == pin:
            if amount <= self.__balance:
                self.__balance -= amount
                return "Withdrawal successful"
            else:
                return "Insufficient balance"
        else:
            return "Invalid account details"


#############################################################################################
#################### DECORATORS

# @property   is a built-in decorator in Python that is used to define the properties
#             of an object. The @property decorator makes the work easier by
#             automatically calling the getter method when the value of the attribute is accessed.

# @classmethod is a built-in decorator in Python that is used to create class methods.
#              The class method can be called by both the class and the object.
#              This method accepts the class as the first argument that is passed automatically
#              when the method is called.

# @staticmethod is a built-in decorator in Python that defines a static method.
#               A static method doesn’t receive any reference argument whether it is called by an
#               instance of a class or by the class itself. This means that a static method can neither
#               modify object state nor class state. Static methods are restricted in what data they can
#               access - and they’re primarily a way to namespace your methods.

# -- Static method knows nothing about the class and just deals with the parameters.
# -- Class method works with the class since its parameter is always the class itself.

# Link that is about difference of two decorators:
# https://sparkbyexamples.com/python/python-difference-between-staticmethod-and-classmethod/#h-1-what-is-staticmethod


# class Student:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     @classmethod
#     def fromBirthYear(cls, name, year):
#         return cls(name, date.today().year - year)

#     @staticmethod
#     def isAdult(age):
#         return age > 18

# student1 = Student('Rolf', 19)
# student2 = Student.fromBirthYear('Anna', 1990)

# print(student1.age)
# print(student2.age)


####################################################################################
####################################################################################
_3 = 'Dunder methods'

from abc import ABC, abstractmethod


class AbstractUserClass(ABC):
    name: str
    surname: str
    age: int
    email: str

    @abstractmethod
    def get_info(self):
        raise NotImplementedError(
            "This is an abstract method and needs to be implemented in the child class.")


class User(AbstractUserClass):
    def __init__(self, name: str, surname: str, age: int = 0, email: str = '') -> None:
        self.name = name
        self.surname = surname
        self.age = age
        self.email = email

    def __str__(self) -> str:
        return f'{self.name} {self.surname} is {self.age} years old.\nEmail: {self.email}'

    def __repr__(self) -> str:
        return f'{self.name} {self.surname} is {self.age} years old.\nEmail: {self.email}'

    def __call__(self, *args, **kwargs):
        print(f"This is call fn from __call__")
        for i in args:
            print(i)
        return ''
        # ex:
        # user1("test1", "test2", "test3")  => This is call fn from __call__

    def __add__(self, other):
        return "This user has $" + str(other.budget)

    def get_info(self):
        print(f'{self.name} {self.surname}')
        return ''

    @classmethod
    def from_string(cls, string):
        if not string.count(',') == 3:
            raise Exception("String must have 4 values separated by comma.")

        # string  =>  "John, Doe, 25, test@gmail.com"
        splitted_str = string.split(",")
        name, surname, age, email = splitted_str
        # name = splitted_str[0]
        # surname = splitted_str[1]
        # age = splitted_str[2]
        # email = splitted_str[3]
        return cls(name, surname, int(age), email)

    @staticmethod
    def is_adult(age):
        return age > 18


class Client(User):
    def __init__(self, name: str, surname: str, budget: float) -> None:
        super().__init__(name, surname)
        self.budget = budget

    def __str__(self) -> str:
        return f'{self.name} {self.surname} has ${self.budget} budget.'

    def __repr__(self) -> str:
        return f'{self.name} {self.surname} has ${self.budget} budget.'

    def get_info(self):
        print(f'{self.name} {self.surname} has ${self.budget} budget.')
        return ''


# # =================================================
# user1 = User('John', 'Doe', 25, 'test@gmail.com')
# print(user1.get_info())
# # =================================================
# client1 = Client("Cathrine", "Mackwold", 10000)
# print(client1.get_info())
# # =================================================
# result = user1 + client1
# print(result)
# =================================================
# user1 = User.from_string("John, Doe, 25, test@gmail.com")  # classmethod
# print(user1)
# print(User.is_adult(user1.age))  # staticmethod
"""
