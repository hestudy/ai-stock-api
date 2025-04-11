import { initTushareData } from '@/scripts/initTushareData'
import { expect, test } from 'vitest'

test('初始化股票列表数据', async () => {
  const res = await initTushareData()
  expect(res).toBe(true)
})
