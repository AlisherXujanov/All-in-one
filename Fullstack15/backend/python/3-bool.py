
# Python has several built-in data types. Here are the most commonly used ones:

# Numeric Types: int, float, complex
# Sequence Types: list, tuple, range, str
# Binary Sequence Types: bytes, bytearray, memoryview
# Set Types: set, frozenset
# Mapping Type: dict
# Boolean Type: bool
# None Type: None

# Bool   =>   bool()

# NEGATIVES:   False, None, 0, "", [], {}, ()
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
#     case 200 | 201:
#         print('OK')
#     case 404:
#         print('Not found')
#     case 301 | 302:
#         print('Redirect')
#     case _: # else
#         print('Unknown')