import { getDateSpace } from '@/utils/date/getDateSpace'
import { expect, test } from 'vitest'

test('获取时间间隔日期数组', () => {
  const res = getDateSpace(10)
  expect(res.length).toBe(10)
})
