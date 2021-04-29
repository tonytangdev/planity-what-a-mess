import { sanitizeCity } from "../sanitizeCity"

test('should return null because city is null', () => {
    const city = null

    const expected = null

    const res = sanitizeCity(city)

    expect(res).toBe(expected)
})

test('should return null because city is undefined', () => {
    const city = undefined

    const expected = null

    const res = sanitizeCity(city)

    expect(res).toBe(expected)
})

test('should return the same city', () => {
    const city = "Paris"

    const expected = "Paris"

    const res = sanitizeCity(city)

    expect(res).toBe(expected)
})

test('should return "Paris" because input is "PaRis"', () => {
    const city = "PaRis"

    const expected = "Paris"

    const res = sanitizeCity(city)

    expect(res).toBe(expected)
})

test('should return "Rome" because input is "romE"', () => {
    const city = "romE"

    const expected = "Rome"

    const res = sanitizeCity(city)

    expect(res).toBe(expected)
})