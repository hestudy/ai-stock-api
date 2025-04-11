import type { SanitizedConfig } from 'payload'

import payload from 'payload'
import { seedTushareStockDaily } from './seedTushareStockDaily'
import { seedTushareStocks } from './seedTushareStocks'

export const script = async (config: SanitizedConfig) => {
  await payload.init({ config })
  await seedTushareStocks(payload)
  await seedTushareStockDaily(payload)
  payload.logger.info('tushare数据初始化完成')
  process.exit(0)
}
