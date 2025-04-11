import { getTushareStockList } from '@/utils/tushare/getTushareStockList'
import { expect, test } from 'vitest'

test('tushare-股票列表', async () => {
  const res = await getTushareStockList()
  expect(res.code).toBe(0)
})
