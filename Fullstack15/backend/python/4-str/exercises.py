# Напишите функцию на Python для проверки повторяющихся букв.
# Он должен принимать строку, то есть предложение. Функция должна возвращать
# True, если в предложении есть слово с повторяющимися буквами, иначе возвращать False.

# Hello  =>  True
# Worldo  =>  Fasle

def repeating_letters(string):
    for letter in string:
        idx = string.find(letter)
        if idx != len(string)-1:
            if string[idx+1] == letter:
                return True
    return False

# print(repeating_letters("world o"))  # False
# print(repeating_letters("Hello"))    # True
# =================================================================
# =================================================================
# 3. Напишите функцию, чтобы найти второй наиболее часто 
# встречающийся символ в данной строке.

def get_second_most_coming(string):
    first_max = ''
    second_max = ''
    for letter in string:
        if string.count(letter) > len(second_max):
            second_max = first_max
            first_max = letter
    return first_max, second_max
# second_max="", first_max="H"
# second_max="H", first_max="e"
# second_max="e", first_max="l"
# second_max="e", first_max="o"
# ...
# second_max="o", first_max="l"
r = get_second_most_coming("Hello World")  # o
print("Result: ", r)
