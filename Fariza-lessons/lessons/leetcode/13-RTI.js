function romanToInt(s) {
    const roman_dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };
    let i = 0;
    let result = 0;
    while (i < s.length) {
        if (i + 1 < s.length && s.slice(i, i + 2) in roman_dict) {
            result += roman_dict[s.slice(i, i + 2)];
            i += 2;
        } else {
            result += roman_dict[s.charAt(i)];
            i += 1;
        }
    }
    return result;
}

let r = romanToInt('III'); // 3
console.log(r)
