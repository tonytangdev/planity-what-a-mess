import { replaceVowels } from "./replaceVowels"

/**
 * Sanitize the name accoiding to those rules :
 * 
 * - if user name is "#ERROR", you have to skip it and pick the name in another table
 * 
 * - name vowel are replaced by number (e by 3, a by 4, i by 1 and o by 0).
 * 
 * - You have to delete all null or undefined fields in the sanitize format
 * 
 * @param name name
 * @returns sanitized name
 */
export const sanitizeName = (name?: string | null): string | null => {
    if (!name || name === "#ERROR") return null
    let sanitizedName = replaceVowels(name)

    return sanitizedName
}