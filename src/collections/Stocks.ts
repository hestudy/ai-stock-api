import type { CollectionConfig } from 'payload'

export const Stocks: CollectionConfig = {
  slug: 'stocks',
  fields: [
    {
      name: 'ts_code',
      type: 'text',
      required: true,
      admin: {
        description: 'TS代码',
      },
    },
    {
      name: 'symbol',
      type: 'text',
      required: true,
      admin: {
        description: '股票代码',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: '股票名称',
      },
    },
    {
      name: 'area',
      type: 'text',
      required: true,
      admin: {
        description: '地域',
      },
    },
    {
      name: 'industry',
      type: 'text',
      required: true,
      admin: {
        description: '所属行业',
      },
    },
    {
      name: 'fullname',
      type: 'text',
      required: false,
      admin: {
        description: '股票全称',
      },
    },
    {
      name: 'enname',
      type: 'text',
      required: false,
      admin: {
        description: '英文全称',
      },
    },
    {
      name: 'cnspell',
      type: 'text',
      required: true,
      admin: {
        description: '拼音缩写',
      },
    },
    {
      name: 'market',
      type: 'text',
      required: true,
      admin: {
        description: '市场类型',
      },
    },
    {
      name: 'exchange',
      type: 'text',
      required: false,
      admin: {
        description: '交易所代码',
      },
    },
    {
      name: 'curr_type',
      type: 'text',
      required: false,
      admin: {
        description: '交易货币',
      },
    },
    {
      name: 'list_status',
      type: 'text',
      required: false,
      admin: {
        description: '上市状态 L上市 D退市 P暂停上市',
      },
    },
    {
      name: 'list_date',
      type: 'date',
      required: true,
      admin: {
        description: '上市日期',
      },
    },
    {
      name: 'delist_date',
      type: 'date',
      required: false,
      admin: {
        description: '退市日期',
      },
    },
    {
      name: 'is_hs',
      type: 'text',
      required: false,
      admin: {
        description: '是否沪深港通标的，N否 H沪股通 S深股通',
      },
    },
    {
      name: 'act_name',
      type: 'text',
      required: true,
      admin: {
        description: '实控人名称',
      },
    },
    {
      name: 'act_ent_type',
      type: 'text',
      required: true,
      admin: {
        description: '实控人企业性质',
      },
    },
  ],
}
