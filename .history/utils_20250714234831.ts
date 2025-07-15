export function formatDate(date:string) {
  return new Date(date).toLocaleDateString(locales:'en-US', options: {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}