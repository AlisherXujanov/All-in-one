from typing import Any


lesson = "Class  &&  OOP"
_1 = 'Abstract and Inheritance'
# Abstract
# Inheritance

# this == self

# class User:
#     def __init__(self, name, age) -> None:
#         self.name = name
#         self.age = age
    
# user1 = User("John", 20)
# print(user1.name)
# user2 = User("Tom", 25)
# print(user2.name)
# user3 = User("Jerry", 20)
# print(user3.name)



# __init__  => is a constructor method which is used to initialize the attributes of a class
# it is called automatically when an object is created

#############################################################################################
################ Abstraction

# "abc" here stands for abstract base class. It is first imported and then used as 
# a parent class for some class that becomes an abstract class. Its simplest implementation 
# can be done as below.


# from abc import ABC, abstractmethod

# class AbcAnimal(ABC):
#     def __init__(self, name, food):
#         self.name = name
#         self.food = food
        
#     def __str__(self) -> str:
#         return f"{self.name} is an animal and loves to eat {self.food}"

#     @abstractmethod
#     def get_description(self):
#         pass
#         # raise NotImplementedError


# class Pets(AbcAnimal):
#     def __init__(self, name, food, speed):
#         super().__init__(name, food)
#         self.speed = speed

#     def get_description(self):
#         return f"{self.name} eats {self.food}"


# dog = Pets("Dog", "Meat", 10)
# print(dog)
# print(dog.get_description())



# abs module is used to create abstract classes
# it is helpful when we want to create a class that will be used as a base class
# abstractmethod is used to declare abstract methods which will be implemented by the child classes
# is it used to ensure that the child classes will have the same method as the parent class
# and returns an error if the child class does not have the same method as the parent class
# RU: абстрактный класс - это класс, который не предназначен для создания экземпляров,
# а предназначен для использования в качестве родительского класса для других классов
# абстрактный метод - это метод, который объявлен, но не реализован в базовом классе.

#############################################################################################
################ Inheritence

# Inheritance allows us to define a class that inherits all the methods 
# and properties from another class.
# Parent class is the class being inherited from, also called base class.
# Child class is the class that inherits from another class, also called derived class.

# is a way of creating a new class for using details of an existing class without modifying it.
# The newly formed class is a derived class (or child class).
# Similarly, the existing class is a base class (or parent class).

# class Parent:
#     def __init__(self, name):
#         self.name = name
    
#     def test(self):
#         print("Hello world")

# class Child(Parent):
#     #     Inherited members from parent class
#     #     Additional members of the child class
#     def __init__(self, name, age):
#         super().__init__(name)  # => calls the parent class constructor
#         self.age = age

#     def test(self):
#         print("Hello world from child")

#     def __repr__(self) -> str:
#         '''
#             Is used to represent the object with a string.
#             It is used for debugging and logging.
#         '''
#         return f"{self.name} is {self.age} years old"

#     def __str__(self) -> str:
#         '''
#             Is used to represent the object with a string.
#             It is used for the end user.
#         '''
#         return f"{self.name} is {self.age} years old"


# child = Child("John", 20)
# print(child)
# print(child.test())
# ===============================================================================
# ===============================================================================
# ===============================================================================
class Animal:
    def __init__(self, name:str, color:str, food:str, age:int) -> None:
        self.name = name
        self.color = color
        self.food = food
        self.age = age
        
    def __str__(self) -> str:
        return f"{self.name} is an animal and loves to eat {self.food}"


a1 = Animal("Dog", "Black", "Meat", 10)


class Pets(Animal):
    def __init__(self, name:str, color:str, food:str, age:int, wild:bool) -> None:
        super().__init__(name, color, food, age)
        self.wild = wild


pet1 = Pets("Dog", "Black", "Meat", 10, False)
print(pet1)



class Birds(Animal):
    def __init__(self, name:str, color:str, food:str, age:int, can_fly:bool=True) -> None:
        super().__init__(name, color, food, age)
        self.can_fly = can_fly


    def __call__(self, *args: Any, **kwds: Any) -> Any:
        return f"This is call method from {self.name} class"

    def __str__(self) -> str:
        return super().__str__() + f" and can {'fly' if self.can_fly else 'not fly'}."


bird1 = Birds("Eagle", "Black", "Meat", 10)
print(bird1)

bird2 = Birds("Penguin", "Black", "Fish", 2, False)
print(bird2)


print(bird2())