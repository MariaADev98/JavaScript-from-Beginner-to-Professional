let str1 = 'I love JS'
let fixed_caps = str1.toLowerCase()
console.log(fixed_caps)
vowels = ['a', 'e', 'i', 'o', 'u']
vowels.forEach((letter, index) => {
    console.log(letter)
    fixed_caps = fixed_caps.replaceAll(letter, index)
    
});
console.log(fixed_caps)