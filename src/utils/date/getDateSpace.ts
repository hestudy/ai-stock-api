import dayjs, { Dayjs } from 'dayjs'

export const getDateSpace = (space: number) => {
  const now = dayjs().subtract(1, 'day')
  const dateList: Dayjs[] = [now]

  for (let i = 0; i < space - 1; i++) {
    dateList.push(now.subtract(i + 1, 'day'))
  }
  return dateList
}
