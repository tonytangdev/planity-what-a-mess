/**
 * Sanitize the city according to those rules :
 * 
 * - cities are not written in a proper way (there are some letters in *uppercase* in the middle of the word, but they should only be at the beginning)
 * 
 * - You have to delete all `null` or `undefined` fields in the sanitize format
 * 
 * @param city city
 * @returns sanitized city
 */
export const sanitizeCity = (city?: string | null): string | null => {
    if (!city) return null

    let sanitizedCity = city
        .replace(/^./, (firstLetter) => firstLetter.toUpperCase()) // match first letter
        .replace(/\B.*/, (rest) => rest.toLowerCase()) // match all but first charact

    return sanitizedCity
}
