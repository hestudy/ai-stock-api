import { getDateSpace } from '../date/getDateSpace'
import { storage } from '../storage'
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

export const getTushareStockDaily = async (count: number) => {
  const dateList = getDateSpace(count)
  const data = {} as Record<string, TuShareData>

  for (let index = 0; index < dateList.length; index++) {
    const date = dateList[index]
    const dateStr = date.format('YYYYMMDD')
    const storageData = await storage.getItem(`tushare:daily:${dateStr}`)
    if (storageData) {
      data[dateStr] = storageData as TuShareData
      continue
    }

    const res = await tushare({
      api_name: 'daily',
      params: {
        trade_date: dateStr,
      },
      fields: [
        'ts_code',
        'trade_date',
        'open',
        'high',
        'low',
        'close',
        'pre_close',
        'change',
        'pct_chg',
        'vol',
        'amount',
      ],
    })

    if (res.code !== 0) {
      throw new Error(res.msg)
    }

    await storage.setItem(`tushare:daily:${dateStr}`, res)
    data[dateStr] = res
  }
  return data
}
