import translators as ts


ARABIC = 'ar'
UZBEK = 'uz'
ENGLISH = 'en'
RUSSIAN = 'ru'
JAPANESE = 'ja'


original_text = "Hello, what a beautiful weather it is today!"
# ----------------------------------------------------------------------
arabic_translation = ts.translate_text(original_text, to_language=ARABIC)
print("ARABIC translation: ", arabic_translation)
# ----------------------------------------------------------------------
uzbek_translation = ts.translate_text(original_text, to_language=UZBEK)
print("UZBEK translation: ", uzbek_translation)
# ----------------------------------------------------------------------
russian_translation = ts.translate_text(original_text, to_language=RUSSIAN)
print("RUSSIAN translation: ", russian_translation)
# ----------------------------------------------------------------------
japanese_translation = ts.translate_text(original_text, to_language=JAPANESE)
print("JAPANESE translation: ", japanese_translation)
# ----------------------------------------------------------------------
# ----------------------------------------------------------------------
# ----------------------------------------------------------------------
# OUTPUT:
# ARABIC translation:  مرحبا ، يا له من طقس جميل اليوم!
# UZBEK translation:  Assalomu alaykum bugungi kun qanday go'zal ob-havo!
# RUSSIAN translation:  Здравствуйте, какая сегодня прекрасная погода!
# JAPANESE translation:  こんにちは、今日はなんと美しい天気でしょう!

