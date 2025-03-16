export function convertToUTCTimestamp(dateString: string) {
  const [year, month, day] = dateString.split('/').map(Number);
  return Date.UTC(year!, month! - 1, day); // Convert to milliseconds
}
