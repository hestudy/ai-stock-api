import { storage } from './storage'

type TuShareData = {
  code: number
  msg: string
  data: Record<string, any>
}

export const tushare = async (args: {
  api_name: string
  params: Record<string, any>
  fields?: string[]
}) => {
  const storageData = await storage.getItem(`tushare:${args.api_name}`)

  if (storageData) {
    return storageData as TuShareData
  }

  const token = process.env.TUSHARE_TOKEN
  const url = 'https://api.tushare.pro'

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      api_name: args.api_name,
      token,
      params: args.params,
      fields: args.fields?.join(','),
    }),
  })

  const data = (await res.json()) as TuShareData

  if (data.code !== 0) {
    throw new Error(data.msg)
  }

  await storage.setItem(`tushare:${args.api_name}`, data)

  return data
}
