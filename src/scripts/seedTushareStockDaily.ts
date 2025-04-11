import { getTushareStockDaily } from '@/utils/tushare/getTushareStockDaily'
import { BasePayload } from 'payload'

const COUNT = 10

export const seedTushareStockDaily = async (payload: BasePayload) => {
  payload.logger.info('开始初始化股票日线数据')
  const count = await payload.count({
    collection: 'stock-dailys',
  })

  if (count.totalDocs < COUNT) {
    const res = await getTushareStockDaily(COUNT)

    const dateList = Object.keys(res)

    const transactionId = await payload.db.beginTransaction()

    try {
      for (let index = 0; index < dateList.length; index++) {
        const date = dateList[index]
        const data = res[date]
        const items = data.data.items

        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
          const item = items[itemIndex]
          await payload.create({
            collection: 'stock-dailys',
            data: {
              ts_code: item[0] as string,
              trade_date: date,
              open: item[1] as number,
              high: item[2] as number,
              low: item[3] as number,
              close: item[4] as number,
              pre_close: item[5] as number,
              change: item[6] as number,
              pct_chg: item[7] as number,
              vol: item[8] as number,
              amount: item[9] as number,
            },
            req: {
              transactionID: transactionId!,
            },
          })
          payload.logger.info(
            `初始化股票日线数据-${date}: ${itemIndex + 1}/${items.length} ${item[0]}`,
          )
        }

        payload.logger.info(`初始化股票日线数据: ${index + 1}/${dateList.length} ${date}`)
      }

      await payload.db.commitTransaction(transactionId!)
      payload.logger.info('初始化股票日线数据成功')
      return true
    } catch (e) {
      payload.logger.error(e)
      await payload.db.rollbackTransaction(transactionId!)
      return false
    }
  }

  payload.logger.info('股票日线数据已存在')
  return true
}
