import { client } from '@/utils/client'
import { getTushareStockList } from '@/utils/tushare/getTushareStockList'

export const initTushareData = async () => {
  const count = await client.count({
    collection: 'stocks',
  })

  if (count.totalDocs === 0) {
    const res = await getTushareStockList()
    if (res.code === 0) {
      const transactionId = await client.db.beginTransaction()

      try {
        for (let index = 0; index < res.data.items.length; index++) {
          const item = res.data.items[index]
          await client.create({
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
          client.logger.info(`初始化股票列表数据: ${index + 1}/${res.data.items.length} ${item[2]}`)
        }

        await client.db.commitTransaction(transactionId!)
        client.logger.info('初始化股票列表数据成功')
        return true
      } catch (e) {
        client.logger.error(e)
        await client.db.rollbackTransaction(transactionId!)
        return false
      }
    }
  }
  return true
}
