// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { StockDailys } from './collections/StockDailys'
import { Stocks } from './collections/Stocks'
import { Users } from './collections/Users'
import { migrations } from './migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Stocks, StockDailys],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    prodMigrations: migrations,
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  bin: [
    {
      scriptPath: path.resolve(dirname, 'scripts/seed.ts'),
      key: 'seed',
    },
  ],
})
