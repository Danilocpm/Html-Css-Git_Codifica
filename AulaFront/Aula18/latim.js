function translation(word) {
    let i = 0
    let vowels = "aeiou"

    while (!vowels.includes(word.charAt(i))) {
        i++
    }

    if(i == word.length) return word.split('').reverse().join('') + 'ay'


    return word.slice(i) + word.slice(0, i) + 'ay'

}

console.log(translation("stop"))
console.log(translation("rhythm"))