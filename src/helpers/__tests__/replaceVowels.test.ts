import { replaceVowels } from "../replaceVowels"

test('should replace 3 by e', () => {
    const str = '3'
    const expected = 'e'

    const res = replaceVowels(str)

    expect(res).toBe(expected)
})

test('should replace 4 by a', () => {
    const str = '4'
    const expected = 'a'

    const res = replaceVowels(str)

    expect(res).toBe(expected)
})

test('should replace 1 by i', () => {
    const str = '1'
    const expected = 'i'

    const res = replaceVowels(str)

    expect(res).toBe(expected)
})

test('should replace 0 by o', () => {
    const str = '0'
    const expected = 'o'

    const res = replaceVowels(str)

    expect(res).toBe(expected)
})

test('should replace "33441100" by "eeaaiioo"', () => {
    const str = '33441100'
    const expected = 'eeaaiioo'
    
    const res = replaceVowels(str)

    expect(res).toBe(expected)
})
