import type { SanitizedConfig } from 'payload'

import payload from 'payload'
import { seedTushareData } from './seedTushareData'

export const script = async (config: SanitizedConfig) => {
  await payload.init({ config })
  await seedTushareData(payload)
  payload.logger.info('tushare数据初始化完成')
  process.exit(0)
}
