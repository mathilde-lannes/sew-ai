# sew.ai back-end

> This Node.js back-end is powered by Apollo and GraphQL 🚀

## Quickstart

```
cd sew-ai/server

# install dependencies
yarn install

# save a migration
npx prisma migrate dev --name 'add-vote-model' --preview-feature

# generate the Prisma client
npx prisma generate

# run the dev server
yarn dev
```