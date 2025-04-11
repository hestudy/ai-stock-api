import { Stock } from '@/payload-types'
import { tushare } from './tushare'

type TuShareData = {
  code: number
  msg: string
  data: {
    fields: string[]
    items: (string | null | number)[][]
    has_more: boolean
    count: number
  }
}

export const getTushareStockList = async () => {
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
  return res as TuShareData
}
