## Migrations to DB
`npx sequelize db:migrate`

## Create Migration
`npx sequelize-cli migration:generate --name <name>`

## Create Model Migration with attributes
`npx sequelize-cli model:generate --name <name> --attributes <firstAttribute:string>, <lastAttribute:number>`

## Revert migrations
`npx sequelize db:migrate:undo:all`

## Run specific seeds
`npx sequelize db:seed --seed <name of seed>`