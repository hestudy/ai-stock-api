export const tushare = async (args: {
  api_name: string
  params: Record<string, any>
  fields?: string[]
}) => {
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

  const data = await res.json()

  return data
}
