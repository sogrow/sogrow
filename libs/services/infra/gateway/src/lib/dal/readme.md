# How To Use Prisma

## Track your migration history with `prisma migrate dev`

The `prisma migrate dev` command allows you to track the changes you make to your database.
The command automatically generates SQL migration files (saved in /prisma/migrations) and applies them to the database.
When a migration is applied to the database, the migrations table (\_prisma_migrations) in your database is also updated.

### Append the `--create-only` flag to generate a new migration without applying it

The `--create-only` flag allows you to generate a new migration without applying it. This is useful if you want to review the changes before applying them to the database.

### Sync your migration histories with `prisma migrate deploy`

The prisma migrate deploy command allows you to sync your migration history from your development environment with your database in your staging or production environment.

_The command should be run in an automated CI/ CD environment._
