import { tushare } from '@/utils/tushare'
import { expect, test } from 'vitest'

test('tushare-股票列表', async () => {
  const res = await tushare({
    api_name: 'stock_basic',
    params: {},
    fields: [
      'ts_code',
      'symbol',
      'name',
      'area',
      'industry',
      'fullname',
      'enname',
      'cnspell',
      'market',
      'exchange',
      'curr_type',
      'list_status',
      'list_date',
      'delist_date',
      'is_hs',
      'act_name',
      'act_ent_type',
    ],
  })
  expect(res.code).toBe(0)
})
