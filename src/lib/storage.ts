export function safeJsonParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export function readLS<T>(key: string, fallback: T): T {
  return safeJsonParse<T>(localStorage.getItem(key), fallback)
}

export function writeLS(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value))
}
