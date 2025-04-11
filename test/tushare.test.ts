import { getTushareStockDaily } from '@/utils/tushare/getTushareStockDaily'
import { getTushareStockList } from '@/utils/tushare/getTushareStockList'
import { expect, test } from 'vitest'

test('tushare-股票列表', async () => {
  const res = await getTushareStockList()
  expect(res.code).toBe(0)
})

test('tushare-日线数据', async () => {
  const res = await getTushareStockDaily(2)
  expect(Object.keys(res).length).toBe(2)
})
