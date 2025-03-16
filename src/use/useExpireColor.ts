export function useExpireColor(inputDate: string): string {
  const currentDate = new Date();
  const parsedDate = new Date(inputDate);
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

  if (parsedDate > currentDate) return 'green';
  if (parsedDate >= sixMonthsAgo) return 'orange';
  if (parsedDate < sixMonthsAgo) return 'red';

  return '';
}
