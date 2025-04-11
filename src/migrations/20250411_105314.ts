import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "stocks" ALTER COLUMN "ts_code" DROP NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "symbol" DROP NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "name" DROP NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "area" DROP NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "industry" DROP NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "cnspell" DROP NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "market" DROP NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "list_date" SET DATA TYPE varchar;
  ALTER TABLE "stocks" ALTER COLUMN "list_date" DROP NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "delist_date" SET DATA TYPE varchar;
  ALTER TABLE "stocks" ALTER COLUMN "act_name" DROP NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "act_ent_type" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "ts_code" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "trade_date" SET DATA TYPE varchar;
  ALTER TABLE "stock_dailys" ALTER COLUMN "trade_date" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "open" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "high" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "low" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "close" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "pre_close" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "change" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "pct_chg" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "vol" DROP NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "amount" DROP NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "stocks" ALTER COLUMN "ts_code" SET NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "symbol" SET NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "name" SET NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "area" SET NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "industry" SET NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "cnspell" SET NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "market" SET NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "list_date" SET DATA TYPE timestamp(3) with time zone;
  ALTER TABLE "stocks" ALTER COLUMN "list_date" SET NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "delist_date" SET DATA TYPE timestamp(3) with time zone;
  ALTER TABLE "stocks" ALTER COLUMN "act_name" SET NOT NULL;
  ALTER TABLE "stocks" ALTER COLUMN "act_ent_type" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "ts_code" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "trade_date" SET DATA TYPE timestamp(3) with time zone;
  ALTER TABLE "stock_dailys" ALTER COLUMN "trade_date" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "open" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "high" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "low" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "close" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "pre_close" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "change" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "pct_chg" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "vol" SET NOT NULL;
  ALTER TABLE "stock_dailys" ALTER COLUMN "amount" SET NOT NULL;`)
}
