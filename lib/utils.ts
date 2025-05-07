import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Extracts all HTML code (including self-closing tags) from a string and returns it as one string
export function stripHtmlTags(str: string) {
  return str
    ?.replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// Truncates a string to a maxLength characters
export function truncateDescription(text: string, maxLength: number) {
  return text.length > maxLength
    ? text.substring(0, maxLength).trim() + '...'
    : text
}
