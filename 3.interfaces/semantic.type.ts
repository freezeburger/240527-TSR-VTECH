/**
 * Must be a unique int within the same collection
 */
export type UniqueId = number;

/**
 * Must follow the project defined username convention
 * {@link https://valtech.com} 
 */
export type Username = string;

/**
 * 15 chars maximum
 */
export type TextShort = string;

/**
 * Unbounded Text Blob
 */
export type TextLong = string;

/**
 * @example
 * "+54 9 XXX XXX XXXX" 
 */
export type InternationalPhoneNumber = string;

export type URL = `${ 'http' | 'https' }://${string}`;

/**
 * A valid @valtech.com email
 */
export type ValtechEmail = `${ string }@valtech.com`;