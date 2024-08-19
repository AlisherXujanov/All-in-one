import translators as ts

q_text = 'Какая погода сегодня?'
arabic_lang = 'ar'
english_lang = 'en'
japanese_lang = 'ja'

simple_translation = ts.translate_text(q_text, to_language=arabic_lang)
print("Simple translation: ", simple_translation)

english_translation = ts.translate_text(q_text, to_language=english_lang)
print("English translation: ", english_translation)

japanese_translation = ts.translate_text(q_text, to_language=japanese_lang)
print("Japanese translation: ", japanese_translation)