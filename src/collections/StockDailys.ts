import type { CollectionConfig } from 'payload'

export const StockDailys: CollectionConfig = {
  slug: 'stock-dailys',
  fields: [
    {
      name: 'ts_code',
      type: 'text',
      required: true,
      admin: {
        description: '股票代码',
      },
    },
    {
      name: 'trade_date',
      type: 'date',
      required: true,
      admin: {
        description: '交易日期',
      },
    },
    {
      name: 'open',
      type: 'number',
      required: true,
      admin: {
        description: '开盘价',
      },
    },
    {
      name: 'high',
      type: 'number',
      required: true,
      admin: {
        description: '最高价',
      },
    },
    {
      name: 'low',
      type: 'number',
      required: true,
      admin: {
        description: '最低价',
      },
    },
    {
      name: 'close',
      type: 'number',
      required: true,
      admin: {
        description: '收盘价',
      },
    },
    {
      name: 'pre_close',
      type: 'number',
      required: true,
      admin: {
        description: '昨收价【除权价，前复权】',
      },
    },
    {
      name: 'change',
      type: 'number',
      required: true,
      admin: {
        description: '涨跌额',
      },
    },
    {
      name: 'pct_chg',
      type: 'number',
      required: true,
      admin: {
        description: '涨跌幅【基于除权后的昨收计算的涨跌幅：（今收-除权昨收）/除权昨收】',
      },
    },
    {
      name: 'vol',
      type: 'number',
      required: true,
      admin: {
        description: '成交量（手）',
      },
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
      admin: {
        description: '成交额（千元）',
      },
    },
  ],
}
