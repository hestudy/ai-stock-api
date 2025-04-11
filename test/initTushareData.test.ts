import { initTushareData } from '@/scripts/initTushareData'
import { client } from '@/utils/client'
import { expect, test } from 'vitest'

test('初始化股票列表数据', async () => {
  const res = await initTushareData(client)
  expect(res).toBe(true)
})
