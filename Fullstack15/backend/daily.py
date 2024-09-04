def repeat_three_times(original_function):
    def wrapper(*args, **kwargs):
        for _ in range(3):
            try:
                return original_function(*args, **kwargs)
            except ZeroDivisionError as error:
                print("--------------------------------")
                print(error)
                continue
        return None
    return wrapper


print("==========================================")
@repeat_three_times
def multiply(a, b):
    return a / b
print("==========================================")


r = multiply(9, 3)
print(r)
print("==========================================")
r = multiply(2, 0)
print(r)
