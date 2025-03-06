let str1 = "How's%20it%20going%3F"
let str2 = "How's it going?"

let encoded_str2 = encodeURIComponent(str2)
console.log('Encoded:', encoded_str2)


let decoded_str1 = decodeURIComponent(str1)
console.log('Decoded:', decoded_str1)

let URI = "http://www.basescript.com?=Hello World"
let encoded_uri = encodeURIComponent(URI)
console.log(encoded_uri)


