
from typing import List

def rotate(nums: List[int], k: int) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    for _ in range(k):
        last = nums.pop() 
        nums.insert(0, last)
        
# =====================================================================         
# =====================================================================         
# =====================================================================         
# =====================================================================         

def majorityElement(nums:List[int]) -> int:
    sorted_arr = sorted(nums)
    majority = sorted_arr[0]

    for num in set(sorted_arr):
        if nums.count(num) > nums.count(majority):
            majority = num
    return majority










