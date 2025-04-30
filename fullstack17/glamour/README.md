# Glamour


## Working with Git

### Create a new branch and send pull request

When you finish working on the task and the branch is ready to be merged, you need to create a pull request.
And afterwards you will need to checkout into main branch and merge the branch.

1. `git checkout -b <branch-name>`
2. `git add .`
3. `git commit -m "commit message"`
4. `git push origin <branch-name>`
5. Send a pull request on GitHub.
    - First git to the github repo and click on the `Pull requests` tab. (green button on the right)
    - Click on the `New pull request` button.
    - Select the branch you want to merge with the main branch. (if it is not auto selected)
    - Write a description of the changes you made.
    - Click on the `Create pull request` button. (click on me AlisherXujanov as a reviewer)




## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
