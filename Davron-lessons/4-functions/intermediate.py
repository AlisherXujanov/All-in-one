# 1. Напишите функцию, которая принимает 
# массив чисел и находит второе наименьшее и второе наибольшее числа.

def get_second_biggest_and_smallest(l:list[int]) -> list:
    sorted_list = sorted(l)
    return [sorted_list[1], sorted_list[-2]]

r = get_second_biggest_and_smallest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
# print(r)  # [2, 9]
# ============================================================
# ============================================================
# 2. Напишите функцию, которая принимает сортированный список чисел 
# (список, в котором элементы сортированы от наименьшего к наибольшему)
# и другое число. Функция решает, находится ли заданное число в списке, 
# и возвращает соответствующий булевый результат. (Используйте бинарный поиск.)

def binary_search(l:list[int], target:int) -> bool:
    start_idx:int = 0
    end_idx:int   = len(l) - 1

    while True:
        if start_idx <= end_idx:    
            MIDDLE_IDX = (start_idx + end_idx) // 2
            MDDLE_ITEM = l[MIDDLE_IDX]
            if MDDLE_ITEM == target:
                return True
            else:
                if MDDLE_ITEM > target:
                    end_idx = MIDDLE_IDX - 1
                else:
                    start_idx = MIDDLE_IDX + 1
        else:
            return False

r = binary_search(list(range(1000)), 999)
# print(r)  # True


# 1 - 100     =>  89    =>   50<89
# 51 - 100    =>  89    =>   75<89 
# 76 - 100    =>  89    =>   88<89
# 89 - 100    =>  89    =>   95>89
# 89 - 94     =>  89    =>   91>89
# 89 - 90     =>  89    =>   89==89   => True


# ------------------------------------------------------------
# WHILE LOOP SYNTAX
# while условие == 'positive':
#     block code to run
#     break    -> exit the loop
#     continue -> skip the rest of the code in the block

# ============================================================
# ============================================================
# 3. Напишите функцию, которая принимает строку в качестве 
# параметра и находит самое длинное слово в строке.
def find_longest(text:str) -> str:
    result = ''
    for word in text.split():
        if len(word) > len(result):
            result = word
    return result


r = find_longest("The quick brown fox jumped over the lazy dog")  # "jumped"
print("Longest word:", r)

