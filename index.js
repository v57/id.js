import base58 from 'bs58'
import crypto from 'crypto'

// id generator
/**
 * @abstract returns random id by generating $size random bytes and converting to base58 string
 * @param {number} size
 * @returns {string}
 */
export function id(size) {
  return base58.encode(crypto.randomBytes(size))
}
/**
 * @abstract returns unique id by sending random ids to $check until it returns any negative response (0, false, null, undefined are negative)
 * @param {number} size
 * @param {(id: string) => any?} contains
 * @returns {Promise<string>}
 */
export async function uniqueId(size, contains) {
  while (true) {
    const id = base58.encode(crypto.randomBytes(size))
    if (!await contains(id)) return id
  }
}