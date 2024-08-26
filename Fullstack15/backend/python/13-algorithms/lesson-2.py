import time
import random

# ✅3. Linear search  (Линейный поиск) - O(n)
# ✅4. Binary search
# ✅5. Bubble sort

# =============================================================================
# =============================================================================
# ✅3. Linear search
arr = list(range(1000000))
target = 88888

start_time = time.time()
for num in arr:
    if num == target:
        print("Found")
end_time = time.time()

diff = end_time - start_time
print(round(diff, 5))

# =============================================================================
# =============================================================================
# ✅4. Binary search
arr = list(range(1000000))  # NOTE:  Array should be sorted
target = 88888
start_time = time.time()

start = 0
end = len(arr) - 1
while start <= end:
    MIDDLE = (start + end) // 2
    
    if arr[MIDDLE] == target:
        print("Found on index: ", MIDDLE)
        break
    else:
        if arr[MIDDLE] > target:
            end = MIDDLE - 1
        else:
            start = MIDDLE + 1
            
diff = end_time - start_time
print(round(diff, 10))

# =============================================================================
# =============================================================================
# ✅5. Bubble sort 🫧  - O(n2) - The most time it takes
start_time = time.time()

def bubble_sort(unsorted_list:list) -> list:
    # IN PLACE SORT
    sorted = False
    while not sorted:
        sorted = True
        
        for idx in range(len(unsorted_list)-1):
            if unsorted_list[idx] > unsorted_list[idx+1]:
                # a = 1
                # b = 2
                # a, b, = b, a
                unsorted_list[idx], unsorted_list[idx+1] = unsorted_list[idx+1], unsorted_list[idx]
                sorted = False


unsorted_list = list(range(10000))
random.shuffle(unsorted_list) # make it unsorted
print("-----------------------------------------------------------------------------------")
print("-----------------------------------------------------------------------------------")
# print("Unsorted_list: ", unsorted_list)
print("-----------------------------------------------------------------------------------")
print("-----------------------------------------------------------------------------------")

bubble_sort(unsorted_list)
# print("Sorted_list: ", unsorted_list) # [2, 3, 5, 6, 7, 8]

end_time = time.time()
diff = end_time - start_time
print(round(diff, 10))
