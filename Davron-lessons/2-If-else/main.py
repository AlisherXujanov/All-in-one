# Python has several built-in data types. Here are the most commonly used ones:

# Numeric Types:         int, float, complex
# Sequence Types:        list, tuple, range
# Text Sequence Type:    str
# Binary Sequence Types: bytes, bytearray, memoryview
# Set Types:             set, frozenset
# Mapping Type:          dict
# Boolean Type:          bool
# None Type:             None
# ------------------------------------------------------------------

# NEGATIVES = ['', 0, False, None, [], {}, ()]
# Bool   =>   bool()

# print(bool(0))   # False
# print(bool(''))  # False
# print(bool([]))  # False
# -------------------------
# print(bool(-1))   # True
# print(bool('.'))  # True

# ------------------------------------------------------------------
# If / elif / else 
# if 1==2:
#     print(f'1 == 1 is => {1==2}')
# elif 1==1:
#     print(f'1 == 1 is => {1==1}')
# else:
#     print(1==2)
# ------------------------------------------------------------------
# match / case
# HTTPS_status = 200
# match HTTPS_status:
#     # if HTTPS_status == 200 or HTTPS_status == 201:
#     case 200 | 201: 
#         print('OK')
#     case 404:
#         print('Not found')
#     case 301 | 302:
#         print('Redirect')
#     case _:
#         print('Unknown')



