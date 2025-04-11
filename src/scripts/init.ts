import { client } from '@/utils/client'
import { exit } from 'process'
import { initTushareData } from './initTushareData'

const init = async () => {
  await initTushareData(client)
}

init().finally(() => {
  exit(0)
})
