import { sanitizeName } from "../sanitizeName"

test('should return null because name is "#ERROR"', () => {
    const name = "#ERROR"

    const expected = null

    const res = sanitizeName(name)

    expect(res).toBe(expected)
})

test('should return null because name is null', () => {
    const name = null

    const expected = null

    const res = sanitizeName(name)

    expect(res).toBe(expected)
})

test('should return null because name is undefined', () => {
    const name = undefined

    const expected = null

    const res = sanitizeName(name)

    expect(res).toBe(expected)
})

test('should replace vowels', () => {
    const name = "t0ny3a4"

    const expected = "tonyeaa"

    const res = sanitizeName(name)

    expect(res).toBe(expected)
})

test('should return the same name', () => {
    const name = "paul"

    const expected = "paul"

    const res = sanitizeName(name)

    expect(res).toBe(expected)
})

