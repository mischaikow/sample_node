## An introduction to Node.js & Typescript

From Jan 16, 2024 - some notes from chat and things to do

The major backend package managers for Typescript:
 - Nodejs
 - Bun
 - Deno

Linters:
 - For VSCode the ESLint plugin is the standard
 - For vim/nvim you can use lsp (such as coc.vim - https://github.com/neoclide/coc.nvim)

This should be coupled with an auto-formatter like Prettier to keep the code look clean and readable.
Keep in mind, as [Prettier says on its website](https://prettier.io/docs/en/comparison): use Prettier for formatting and linters for catching bugs.

Things you could do next:
 - Get Prettier set up
 - Refine the linter to only look at files we actually want to edit
 - Add `scripts` to our `package.json` so that we can launch everything with simple `npm run` commands
 - Add a testing framework (I often just use Jest)
 - Containerize
 - etc.
