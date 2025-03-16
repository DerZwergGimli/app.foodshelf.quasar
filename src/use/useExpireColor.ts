import { convertToUTCTimestamp } from 'src/use/useConvertToUTCTimestamp';

export function useExpireColor(inputDate: string): string {
  const currentDate = Date.now();
  const parsedDate = convertToUTCTimestamp(inputDate);

  const delta = parsedDate - currentDate;

  console.log(currentDate, parsedDate);

  console.log(delta);

  if (delta > 365 * 24 * 60 * 60 * 1000) return 'green'; // 1 year
  if (delta > 6 * 30 * 24 * 60 * 60 * 1000) return 'orange'; // 6 months
  if (delta >= 0)
    return 'purple'; // 6 months
  else return 'red';
}
