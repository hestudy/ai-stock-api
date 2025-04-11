import { getTushareStockList } from '@/utils/tushare/getTushareStockList'
import { BasePayload } from 'payload'

export const initTushareData = async (payload: BasePayload) => {
  const count = await payload.count({
    collection: 'stocks',
  })

  if (count.totalDocs === 0) {
    const res = await getTushareStockList()
    if (res.code === 0) {
      const transactionId = await payload.db.beginTransaction()

      try {
        for (let index = 0; index < res.data.items.length; index++) {
          const item = res.data.items[index]
          await payload.create({
            collection: 'stocks',
            data: {
              symbol: item[1] as string,
              ts_code: item[0] as string,
              name: item[2] as string,
              area: item[3] as string,
              industry: item[4] as string,
              fullname: item[5] as string,
              enname: item[6] as string,
              cnspell: item[7] as string,
              market: item[8] as string,
              exchange: item[9] as string,
              curr_type: item[10] as string,
              list_status: item[11] as string,
              list_date: item[12] as string,
              delist_date: item[13] as string,
              is_hs: item[14] as string,
              act_name: item[15] as string,
              act_ent_type: item[16] as string,
            },
            req: {
              transactionID: transactionId!,
            },
          })
          payload.logger.info(
            `初始化股票列表数据: ${index + 1}/${res.data.items.length} ${item[2]}`,
          )
        }

        await payload.db.commitTransaction(transactionId!)
        payload.logger.info('初始化股票列表数据成功')
        return true
      } catch (e) {
        payload.logger.error(e)
        await payload.db.rollbackTransaction(transactionId!)
        return false
      }
    }
  }

  payload.logger.info('股票列表数据已存在')
  return true
}
